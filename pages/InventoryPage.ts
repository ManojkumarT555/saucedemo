import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class InventoryPage extends LoginPage {

    readonly addBackpackButton: Locator;
    readonly addFleeceJacketButton: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;
    readonly removeBackpackButton: Locator;
    
    constructor(page: Page) {
        super(page);
        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addFleeceJacketButton = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async addFleeceJacketToCart() {
        await this.addFleeceJacketButton.click();
    }

    async removeBackpack() {
        await this.removeBackpackButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}