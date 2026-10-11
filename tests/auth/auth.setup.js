import { test as setup, expect } from "../../fixtures/login.fixture";
import path from "node:path";

const authFile = path.resolve("playwright", ".auth", "user.json");

setup("authenticate as standard user", async ({ login, page }) => {
  await login.goto("/");
  await login.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL("/inventory.html");

  await page.context().storageState({
    path: authFile,
  });
});
