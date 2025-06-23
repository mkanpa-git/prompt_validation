import { test, expect } from "@playwright/test";

// Utility to mock backend endpoints
async function mockApi(page) {
  // Storage for draft data that would normally be persisted
  let draft: any = null;

  // Intercept load draft call
  await page.route('**/appl/draft', async route => {
    if (route.request().method() === 'GET') {
      route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(draft) });
    } else {
      draft = JSON.parse(route.request().postData() || 'null');
      route.fulfill({ status: 204, body: '' });
    }
  });

  // Intercept submission call
  await page.route('**/appl/draft/submit', route => {
    route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
  });
}

test.beforeEach(async ({ page }) => {
  await mockApi(page);
});

test('resume from saved draft', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: /next step/i }).click();
  await page.getByRole('button', { name: /next step/i }).click();
  await expect(
    page.getByRole('listitem', { name: 'Applicant' }),
  ).toHaveAttribute('aria-current', 'step');

  await page.getByLabel('First Name').fill('John');
  await page.getByLabel('Last Name').fill('Doe');

  // Reload should restore state and step position
  await page.reload();
  await expect(
    page.getByRole('listitem', { name: 'Applicant' }),
  ).toHaveAttribute('aria-current', 'step');
  await expect(page.getByLabel('First Name')).toHaveValue('John');
});

test('conditional fields and role restrictions', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: /next step/i }).click();
  await page.getByRole('button', { name: /next step/i }).click();

  // Verify conditional field
  await page.selectOption('select[name="name_ref"]', 'Other');
  await expect(page.getByLabel('Other Source (If applicable)')).toBeVisible();

  // Switch role via store (if implemented)
  await page.evaluate(() => window.useFormStore?.setState({ role: 'curator' }));
  // Example expectation for curator-only field
  await expect(page.getByLabel('Curator Notes')).toBeVisible();
});

test('successful submission', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: /next step/i }).click();
  await page.getByRole('button', { name: /next step/i }).click();
  await page.getByLabel('First Name').fill('Jane');
  await page.getByLabel('Last Name').fill('Doe');
  await page.getByRole('button', { name: /submit application/i }).click();
  await expect(page.locator('text=Application submitted')).toBeVisible();
});

