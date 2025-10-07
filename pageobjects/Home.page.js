import { test,expect } from "@playwright/test";
export class Homepage{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page)
{
 this.page = page
 this.Open_New_Account= page.locator('//a[text()="Open New Account"]')
 //this.trfbtn = page.locator('//a[text()="Transfer Funds"]')
 this.rlbtn = page .locator('//a[text()="Request Loan"]')
}

async homenewaccount ()
{

    await this.Open_New_Account.click()

    
}
async transfer(){
    await this.trfbtn.click()
}
async request(){
    await this.rlbtn.click()
}
}