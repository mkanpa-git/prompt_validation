import { test, expect } from "@playwright/test";

test("wizard loads", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(
    page.getByRole("navigation", { name: /form-stepper/i }),
  ).toBeVisible();
});
