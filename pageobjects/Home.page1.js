import { test,expect } from "@playwright/test";
export class Homepage1{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page)
{
 this.page = page
 this.Accounts_Overview=page.locator('//a[text()="Accounts Overview"]')

}

async account(){
    await this.Accounts_Overview.click()
}
}