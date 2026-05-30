import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { loginData } from '../testdata/loginData';

test.describe('Cart Tests', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await loginPage.visit();
        await loginPage.login(
            loginData.validUsername,
            loginData.validPassword
        );
        await inventoryPage.addBackpackToCart();
        await inventoryPage.addFleeceJacketToCart();
        await inventoryPage.openCart();
    });
    test('TC04 : Open Cart Page', async ({ page }) => {
        const cartPage = new CartPage(page);

        await expect(cartPage.cartTitle).toHaveText('Your Cart');
    });

});