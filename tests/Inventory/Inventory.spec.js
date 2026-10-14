import { test, expect } from "../../fixtures/Inventory.fixture";

test.describe("Inventory Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/inventory.html");
  });

  test("Inventory Information", async ({ inv }) => {
    await expect(inv.allItem).toHaveCount(6);
    for (const item of await inv.allItem.all()) {
      await expect(item.locator(inv.itemName)).toBeVisible();
      await expect(item.locator(inv.itemDesc)).toBeVisible();
      await expect(item.locator(inv.itemPrice)).toBeVisible();
      await expect(item.locator(inv.btnAdd)).toBeVisible();
    }
  });

  test("Add item to Cart", async ({ inv }) => {
    await inv.expectBtnName("Sauce Labs Backpack", "Add to cart");

    await inv.addToCart("Sauce Labs Backpack");

    await inv.expectBtnName("Sauce Labs Backpack", "Remove");
    await inv.header.expectCartCount(1);
  });

  test("Add multiple item to Cart", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.addToCart("Sauce Labs Bike Light");
    await inv.addToCart("Sauce Labs Bolt T-Shirt");

    await inv.header.expectCartCount(3);

    await inv.header.cart.click();

    await expect(inv.itemName).toContainText([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
    ]);
  });

  test("Remove item from Cart", async ({ inv }) => {
    await expect(inv.header.cartBadge).toBeHidden();

    await inv.addToCart("Sauce Labs Backpack");

    await expect(inv.header.cartBadge).toBeVisible();

    await inv.removeFromCart("Sauce Labs Backpack");

    await expect(inv.header.cartBadge).toBeHidden();
  });
});
