export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("password");
    this.loginButton = page.getByRole("button", { name: "Login" });

    this.errorMsg = page.getByTestId("error");
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
