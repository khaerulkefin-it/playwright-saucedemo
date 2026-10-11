class inventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryItem = page.getByTestID("inventory-item");
    this.invetoryItemName = page.getByTestID("inventory-item-name");
    this.inventoryItemPrice = page.getByTestID("inventory-item-price");
    this.btnAddToCart = page.getByRole("button", { name: "Add to cart" });
  }
}

export default inventoryPage;
