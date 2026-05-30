import { Page, Locator } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly cartTitle: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.locator('.title');
        this.checkoutButton = page.locator('#checkout');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

