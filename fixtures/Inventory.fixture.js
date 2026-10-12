import { test as base, expect } from "@playwright/test";
import InventoryPage from "../page/InventoryPage";

export const test = base.extend({
  inventory: async ({ page }, use) => {
    const inventory = new InventoryPage(page);
    await use(inventory);
  },
});

export { expect };
