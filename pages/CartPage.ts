import { Page, Locator } from "@playwright/test";
import { InventoryPage } from "./InventoryPage";

export class CartPage extends InventoryPage {
    readonly cartTitle: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cartTitle = page.locator('.title');
        this.checkoutButton = page.locator('#checkout');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

