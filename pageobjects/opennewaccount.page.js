import { test,expect } from "@playwright/test";
export class opennewacoountpage{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page)
{
    this.page=page
    this.dropdown1=page.locator('//select[@id="type"]')
    this.dropdown2=page.locator('//select[@id="fromAccountId"]')
    this.opnbtn=page.locator('//input[@value="Open New Account"]')
}
    async opennewaccount(option1,option2)
    {
      await this.dropdown1.selectOption(option1)
      await this.dropdown2.selectOption(option2)
      await this.opnbtn.click()
    }
}