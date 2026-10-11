import { test, expect } from "@playwright/test";

test("authenticated user can view inventory", async ({ page }) => {
  await page.goto("/inventory.html");

  await expect(page).toHaveURL(/inventory\.html/);

  await expect(page.locator('[data-test="title"]')).toHaveText("Products");

  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
});
