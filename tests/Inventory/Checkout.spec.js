import { test, expect } from "../../fixtures/Inventory.fixture";

test.describe("Checkout product", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/inventory.html");
  });

  test("Checkout valid", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.addToCart("Sauce Labs Bike Light");
    await inv.header.cart.click();
    await inv.cart.btnCo.click();
    await inv.co.checkout("Khaerul", "Kefin", "33827");

    await inv.co.expectTaxPrice();

    await inv.co.btnFinish.click();

    await expect(inv.co.imgCo).toHaveAttribute("src", /checkmark/);
  });
});
