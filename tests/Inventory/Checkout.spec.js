import { test, expect } from "../../fixtures/Inventory.fixture";

test.describe("Checkout product", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/inventory.html");
  });

  test("Checkout single item", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.header.cart.click();

    const cartItem = (await inv.cart.allItem.allTextContents()).map((item) =>
      item.replace("Remove", ""),
    );

    await inv.cart.btnCo.click();
    await inv.co.checkout("Khaerul", "Kefin", "33827");

    const coItem = await inv.cart.allItem.allTextContents();

    await expect(cartItem).toEqual(coItem);

    await inv.co.expectTaxPrice();
    await inv.co.btnFinish.click();

    await expect(inv.co.imgCo).toHaveAttribute("src", /checkmark/);
  });

  test("Checkout multiple item", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.addToCart("Sauce Labs Onesie");
    await inv.header.cart.click();

    const cartItem = (await inv.cart.allItem.allTextContents()).map((item) =>
      item.replace("Remove", ""),
    );

    await inv.cart.btnCo.click();
    await inv.co.checkout("Khaerul", "Kefin", "33827");

    const coItem = await inv.cart.allItem.allTextContents();

    await expect(cartItem).toEqual(coItem);
    await inv.co.expectTotalItem();
    await inv.co.expectTaxPrice();
    await inv.co.expectFinalTotal();

    await inv.co.btnFinish.click();

    await expect(inv.co.imgCo).toHaveAttribute("src", /checkmark/);
  });

  test("Checkout with null first name", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.header.cart.click();
    await inv.cart.btnCo.click();
    await inv.co.checkout("", "Kefin", "33827");

    await expect(inv.co.errorCode).toContainText("First Name is required");
  });

  test("Checkout with null last name", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.header.cart.click();
    await inv.cart.btnCo.click();
    await inv.co.checkout("Khaerul", "", "33827");

    await expect(inv.co.errorCode).toContainText("Last Name is required");
  });

  test("Checkout with null postal code", async ({ inv }) => {
    await inv.addToCart("Sauce Labs Backpack");
    await inv.header.cart.click();
    await inv.cart.btnCo.click();
    await inv.co.checkout("Khaerul", "Kefin", "");

    await expect(inv.co.errorCode).toContainText("Postal Code is required");
  });
});
