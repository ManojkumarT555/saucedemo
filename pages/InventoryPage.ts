import { Page, Locator } from "@playwright/test";

export class InventoryPage {

    readonly page: Page;
    readonly addBackpackButton: Locator;
    readonly addFleeceJacketButton: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addFleeceJacketButton = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async addFleeceJacketToCart() {
        await this.addFleeceJacketButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}