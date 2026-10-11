import { test, expect } from "../../fixtures/login.fixture";
import users from "../../data/loginData.json" assert { type: "json" };

test.describe("Authentication - Login", () => {
  test.use({
    storageState: {
      cookies: [],
      origins: [],
    },
  });
  test.beforeEach(async ({ login }) => {
    await login.goto("/");
  });
  test("Login with Valid credentials", async ({ login, page }) => {
    await login.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL("/inventory.html");
    await expect(page.getByTestId("title")).toHaveText("Products");
    await expect(page.getByTestId("inventory-item-name")).toHaveCount(6);
  });

  test("Login with Invalid username", async ({ login, page }) => {
    await login.login("invalid", "secret_sauce");

    await expect(page.getByTestId("error")).toBeVisible();
    await expect(page.getByTestId("error")).toContainText(
      "Username and password do not match any user in this service",
    );
  });

  test("Login with Invalid password", async ({ login, page }) => {
    await login.login("standard_user", "invalid");

    await expect(page.getByTestId("error")).toBeVisible();
    await expect(page.getByTestId("error")).toContainText(
      "Username and password do not match any user in this service",
    );
  });

  test("Login with Null username", async ({ login, page }) => {
    await login.login("", "secret_sauce");

    await expect(page.getByTestId("error")).toBeVisible();
    await expect(page.getByTestId("error")).toContainText(
      "Username is required",
    );
  });

  test("Login with Null Password", async ({ login, page }) => {
    await login.login("standard_user", "");

    await expect(page.getByTestId("error")).toBeVisible();
    await expect(page.getByTestId("error")).toContainText(
      "Password is required",
    );
  });

  test("Login with Null credential", async ({ login, page }) => {
    await login.login("", "");

    await expect(page.getByTestId("error")).toBeVisible();
    await expect(page.getByTestId("error")).toContainText(
      "Username is required",
    );
  });

  test("Login with locked user", async ({ login, page }) => {
    await login.login("locked_out_user", "secret_sauce");

    await expect(page.getByTestId("error")).toBeVisible();
    await expect(page.getByTestId("error")).toContainText(
      "Sorry, this user has been locked out",
    );
    await expect(page.getByTestId("inventory-item-name")).not.toBeVisible();
  });
});

// test.describe("Data Driven - Login  by Role", () => {
//   for (const user of users) {
//     test(`login attemp: ${user.expected}`, async ({ login, page }) => {
//       await login.goto("/");
//       await login.login(user.username, user.password);

//       if (user.expected == "success") {
//         await expect(page).toHaveURL("/inventory.html");
//         await expect(page.getByTestId("title")).toBeVisible();
//         await expect(page.getByTestId("title")).toHaveText("Products");
//       } else {
//         await expect(login.errorMsg).toBeVisible();
//       }
//     });
//   }
// });
