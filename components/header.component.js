import { expect } from "@playwright/test";

export class HeaderComponent {
  constructor(page) {
    this.page = page;

    this.cart = page.getByTestId("shopping-cart-link");
    this.cartBadge = page.getByTestId("shopping-cart-badge");
  }

  async expectCartCount(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
