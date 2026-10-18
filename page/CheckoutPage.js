import { expect } from "@playwright/test";
import { HeaderComponent } from "../components/header.component";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);

    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.postalCode = page.getByPlaceholder("Zip/Postal Code");
    this.errorCode = page.getByTestId("error");
    this.btnCancel = page.getByRole("button", { name: "Cancel" });
    this.btnContinue = page.getByRole("button", { name: "continue" });
    this.btnFinish = page.getByRole("button", { name: "Finish" });

    this.allItem = page.getByTestId("inventory-item");
    this.itemName = page.getByTestId("inventory-item-name");
    this.itemDesc = page.getByTestId("inventory-item-desc");
    this.itemPrice = page.getByTestId("inventory-item-price");

    this.totItem = page.getByTestId("subtotal-label");
    this.totTax = page.getByTestId("tax-label");
    this.totPrice = page.getByTestId("total-label");

    this.imgCo = page.getByRole("img", { name: "Pony Express" });
  }

  async checkout(fName, lName, zip) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.postalCode.fill(zip);
    await this.btnContinue.click();
  }

  async expectTaxPrice() {
    const tax = Number((await this.totItem.innerText()).split("$")[1]);
    const totalPrice = Number((tax * 0.08).toFixed(2));

    await expect(Number((await this.totTax.innerText()).split("$")[1])).toBe(
      totalPrice,
    );
  }
}
