import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async wait(seconds: number){
        await this.page.waitForTimeout(seconds * 1000);
    }

    async getTitle(){
        return await this.page.title();
    }
}