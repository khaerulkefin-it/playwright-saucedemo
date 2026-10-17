import { expect } from "@playwright/test";
import { HeaderComponent } from "../components/header.component";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);

    this.allItem = page.getByTestId("inventory-item");
    this.itemName = page.getByTestId("inventory-item-name");
    this.itemDesc = page.getByTestId("inventory-item-desc");
    this.itemPrice = page.getByTestId("inventory-item-price");
    this.itemQty = page.getByTestId("item-quantity");
    this.btnRemove = page.getByRole("button", { name: "Remove" });
    this.conShop = page.getByRole("button", { name: "Continue Shopping" });
    this.btnCo = page.getByRole("button", { name: "Checkout" });
  }

  async removeFromCart(item) {
    await this.allItem
      .filter({ has: this.page.getByText(item) })
      .locator(this.btnRemove)
      .click();
  }

  async expectDetailCart(item) {
    await this.allItem
      .filter({ has: this.page.getByText(item) })
      .locator(this.itemName)
      .allTextContents();
  }

  async expectTotalItem(count) {
    await expect(this.itemName).toHaveCount(count);
  }
}
