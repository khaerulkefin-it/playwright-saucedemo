import { test as base, expect } from "@playwright/test";
import { CartPage } from "../page/CartPage";

export const test = base.extend({
  cart: async ({ page }, use) => {
    const cart = new CartPage(page);
    await use(cart);
  },
});

export { expect };
