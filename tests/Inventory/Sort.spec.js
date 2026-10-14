import { test, expect } from "../../fixtures/Inventory.fixture";

test.describe("Inventory Sort", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/inventory.html");
  });

  test("Sort product ascending", async ({ inv }) => {
    await inv.sortProduct.selectOption("az");

    const sortItem = await inv.itemName.allTextContents();

    await expect(inv.sortProduct.locator("option:checked")).toHaveText(
      "Name (A to Z)",
    );
    await expect(sortItem).toEqual([...sortItem].sort());
  });

  test("Sort product descending", async ({ inv }) => {
    await inv.sortProduct.selectOption("za");

    const sortItem = await inv.itemName.allTextContents();

    await expect(inv.sortProduct.locator("option:checked")).toHaveText(
      "Name (Z to A)",
    );
    await expect(sortItem).toEqual([...sortItem].sort().reverse());
  });

  test("Sort product price ascending", async ({ inv }) => {
    await inv.sortProduct.selectOption("lohi");

    const sortPrice = await inv.itemPrice.allTextContents();
    const numericPrice = sortPrice.map((sortPrice) =>
      Number(sortPrice.replace("$", "")),
    );

    await expect(inv.sortProduct.locator("option:checked")).toHaveText(
      "Price (low to high)",
    );
    await expect(numericPrice).toEqual([...numericPrice].sort((a, b) => a - b));
  });

  test("Sort product price descending", async ({ inv }) => {
    await inv.sortProduct.selectOption("hilo");

    const sortPrice = await inv.itemPrice.allTextContents();
    const numericPrice = sortPrice.map((sortPrice) =>
      Number(sortPrice.replace("$", "")),
    );

    await expect(inv.sortProduct.locator("option:checked")).toHaveText(
      "Price (high to low)",
    );
    await expect(numericPrice).toEqual([...numericPrice].sort((a, b) => b - a));
  });
});
