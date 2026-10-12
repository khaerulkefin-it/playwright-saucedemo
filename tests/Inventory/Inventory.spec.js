import { test, expect } from "../../fixtures/Inventory.fixture";

test.describe("Inventory Page", () => {
  test("Access Inventory page", async ({ inventory, page }) => {
    await page.goto("/inventory.html");

    await expect(inventory.inventoryItem.first()).toBeVisible();
    await expect(inventory.inventoryItem).toHaveCount(6);
    for (const iName of inventory.inventoryItemName) {
      console.log(await iName.textContent());
    }
  });
});
