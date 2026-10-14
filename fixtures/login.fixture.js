import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage.js";

export const test = base.extend({
  login: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login);
  },
});

export { expect };
