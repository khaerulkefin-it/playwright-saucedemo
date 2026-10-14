import { expect } from "@playwright/test";
import { HeaderComponent } from "../components/header.component";
import { CartPage } from "./CartPage";

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.cart = new CartPage(page);

    this.allItem = page.getByTestId("inventory-item");
    this.itemName = page.getByTestId("inventory-item-name");
    this.itemDesc = page.getByTestId("inventory-item-desc");
    this.itemPrice = page.getByTestId("inventory-item-price");
    this.btnAdd = page.getByRole("button", { name: "Add to cart" });
    this.btnRemove = page.getByRole("button", { name: "Remove" });
    this.sortProduct = page.getByLabel("Sort products");
  }

  async addToCart(item) {
    await this.allItem
      .filter({ has: this.page.getByText(item) })
      .locator(this.btnAdd)
      .click();
  }

  async removeFromCart(item) {
    await this.allItem
      .filter({ has: this.page.getByText(item) })
      .locator(this.btnRemove)
      .click();
  }

  async expectBtnName(item, btnText) {
    await expect(
      this.allItem.filter({ has: this.page.getByText(item) }).locator(".btn"),
    ).toHaveText(btnText);
  }
}
