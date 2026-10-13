import { test as base, expect } from "@playwright/test";
import { InventoryPage } from "../page/InventoryPage";

export const test = base.extend({
  inv: async ({ page }, use) => {
    const inv = new InventoryPage(page);
    await use(inv);
  },
});

export { expect };
