import { test as base, expect } from "@playwright/test";
import inventoryPage from "../page/InventoryPage";

export const test = base.extend({
  Inventory: async ({ login, page }, use) => {
    const inventory = new inventoryPage(page);
    await use(login);
  },
});

export { expect };
