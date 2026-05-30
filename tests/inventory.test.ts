import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { loginData } from '../testdata/loginData';

test.describe('Inventory Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.visit();
        await loginPage.login(
            loginData.validUsername,
            loginData.validPassword
        );
    });
    test('TC03 : Add Backpack To Cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.addBackpackToCart();
        await inventoryPage.addFleeceJacketToCart();
        await inventoryPage.removeBackpack();
        await expect(inventoryPage.cartBadge).toHaveText('1');
    });

});