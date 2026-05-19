import {Page,Locator} from "@playwright/test";
import { URLS } from '../utils/constants';

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly inventorytitle: Locator;
    readonly errorMessage: Locator;
    constructor(page: Page) {
        this.page=page;
        //obj repository
        this.usernameInput=page.getByPlaceholder('Username');
        this.passwordInput=page.getByPlaceholder('Password');
        this.loginButton=page.locator('#login-button');
        this.inventorytitle=page.locator('.title');
        this.errorMessage=page.locator('[data-test="error"]');
    }

    async visit(){
        await this.page.goto(URLS.baseURL);
        await this.page.setViewportSize({width:1280,height:720});
    }

    async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}