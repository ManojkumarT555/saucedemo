import { Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly inventoryTitle: Locator;
    readonly cartIcon: Locator;
    readonly addBackpackToCart: Locator;
    readonly addBikeLightToCart: Locator;
    readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        // Object Repository
        this.inventoryTitle = page.locator('.title');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.addBackpackToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addBikeLightToCart = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    }

    async addBackpack() {
        await this.addBackpackToCart.click();
    }

    async addBikeLight() {
        await this.addBikeLightToCart.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}