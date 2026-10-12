class InventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryItem = page.getByTestId("inventory-item");
    this.inventoryItemName = page.getByTestId("inventory-item-name").all();
    this.inventoryItemPrice = page.getByTestId("inventory-item-price");
    this.btnAddToCart = page.getByRole("button", { name: "Add to cart" });
  }
}

export default InventoryPage;
