import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from '@axe-core/playwright';

const viewports = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 375, height: 667 },
];

for (const vp of viewports) {
  test.describe(`viewport: ${vp.name}`, () => {
    test(`accessibility check on ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:3000');
      await injectAxe(page);
      await checkA11y(page);
      await expect(
        page.getByRole('navigation', { name: /form-stepper/i }),
      ).toBeVisible();
    });
  });
}
