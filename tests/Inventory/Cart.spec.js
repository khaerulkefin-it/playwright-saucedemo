import { test, expect } from "../../fixtures/Inventory.fixture";

test.describe("Inventory Cart", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/inventory.html");
  });

  test("Empty Cart", async ({ inv }) => {
    await expect(inv.header.cart).toBeVisible();
    await expect(inv.header.cartBadge).toBeHidden();
    await expect(inv.header.cart).toHaveAttribute("aria-label", "Cart, empty");
  });

  test("Detail Cart", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Fleece Jacket");

    await inv.header.expectCartCount(1);

    await inv.header.cart.click();

    await expect(inv.cart.itemName).toHaveText("Sauce Labs Fleece Jacket");
    await expect(inv.cart.itemPrice).toHaveText("$49.99");
    await expect(inv.cart.itemQty).toHaveText("1");
  });

  test("Multiple Information Detail Cart", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.addToCart("Sauce Labs Bike Light");
    await inv.addToCart("Sauce Labs Bolt T-Shirt");

    await inv.header.expectCartCount(3);

    await inv.header.cart.click();

    await expect(inv.cart.itemName).toHaveText([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
    ]);

    await expect(inv.cart.itemPrice).toHaveText(["$29.99", "$9.99", "$15.99"]);

    await expect(inv.cart.itemQty).toHaveText(["1", "1", "1"]);
  });

  test("Remove item from Cart", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.addToCart("Sauce Labs Bike Light");

    await inv.header.expectCartCount(2);

    await inv.header.cart.click();

    await inv.cart.expectTotalItem(2);

    await inv.cart.removeFromCart("Sauce Labs Backpack");

    await inv.header.expectCartCount(1);
    await inv.cart.expectTotalItem(1);
  });

  test("Continue shopping", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.addToCart("Sauce Labs Bike Light");

    await inv.cart.header.expectCartCount(2);

    await inv.header.cart.click();
    await inv.cart.conShop.click();

    await inv.header.expectCartCount(2);
    await expect(inv.page).toHaveURL("/inventory.html");
  });
});
