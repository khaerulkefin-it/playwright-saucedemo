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
  }

  async checkout(fName, lName, zip) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.postalCode.fill(zip);
    await this.btnContinue.click();
  }
}
