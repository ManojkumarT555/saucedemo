import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {loginData} from '../testdata/loginData';
import {checkoutData} from '../testdata/checkoutData';

test.describe('Checkout Process', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        await loginPage.visit();
        await loginPage.login(loginData.validUsername, loginData.validPassword);
        await inventoryPage.addBackpackToCart();
        await inventoryPage.addFleeceJacketToCart();
        await inventoryPage.openCart();
        await expect(cartPage.cartTitle).toHaveText('Your Cart');
        await cartPage.clickCheckout();
    });
    test('TC05 : Complete Checkout Process', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        
        await checkoutPage.fillCheckoutInfo(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode);
        await checkoutPage.continueCheckout();
        await checkoutPage.finishCheckout();
    });
});