import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('Logout User', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});