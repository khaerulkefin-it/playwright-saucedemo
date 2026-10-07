import { test, expect } from "../fixtures/login.fixture";
import users from "../data/loginData.json" assert { type: "json" };

test("login trial", async ({ login, page }) => {
  await login.goto("/");

  await login.login("standard_user", process.env.VALID_PASSWORD);

  await expect(page).toHaveURL("/inventory.html");
  await expect(page.getByTestId("title")).toBeVisible();
});

test.describe("Data Driven - Login  by Role", () => {
  for (const user of users) {
    test(`login attemp: ${user.expected}`, async ({ login, page }) => {
      await login.goto("/");
      await login.login(user.username, user.password);

      if (user.expected == "success") {
        await expect(page).toHaveURL("/inventory.html");
        await expect(page.getByTestId("title")).toBeVisible();
        await expect(page.getByTestId("title")).toHaveText("Products");
      } else {
        await expect(login.errorMsg).toBeVisible();
      }
    });
  }
});
