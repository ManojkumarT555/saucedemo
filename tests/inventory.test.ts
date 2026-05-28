import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';

import { InventoryPage } from '../pages/InventoryPage';

import { loginData } from '../testdata/loginData';

test.describe('Inventory Tests', () => {

    test('TC03 : Add product to cart', async ({ page }) => {

        const loginPage = new LoginPage(page);

        const inventoryPage =
            new InventoryPage(page);

        // Login

        await loginPage.visit();

        await loginPage.login(
            loginData.validUsername,
            loginData.validPassword
        );

        // Inventory validations

        await expect(
            inventoryPage.inventoryTitle
        ).toHaveText('Products');

        // Add product

        await inventoryPage.addBackpack();

        // Validate cart count

        await expect(
            inventoryPage.shoppingCartBadge
        ).toHaveText('1');
    });
});