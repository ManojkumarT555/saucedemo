import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { loginData } from '../testdata/loginData';

test.describe('Login Tests', () => {
    let loginpage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        await loginpage.visit();
    });

    test('TC01 : Login with valid credentials', async () => {
        await loginpage.login(loginData.validUsername, loginData.validPassword);
        await expect(loginpage.inventorytitle).toHaveText('Products');
    });

    test('TC02 : Login with invalid credentials', async () => {
        await loginpage.login(loginData.invalidUsername, loginData.invalidPassword);
        await expect(loginpage.errorMessage).toBeVisible();
    });
});