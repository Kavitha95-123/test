import { test,expect } from "@playwright/test";
export class Requestloanpage{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page){
    this.page=page
    this.lamt = page.locator('//input[@id = "amount"]')
    this.dpay = page.locator('//input[@id = "downPayment"]')
    this.facc = page.locator('//select[@id = "fromAccountId"]')
    this.aplbtn=page.locator('//input[@value="Apply Now"]')
}
async requestloan(amount,downpay,faccid){
    await this.lamt.fill(amount)
    await this.dpay.fill(downpay)
    await this.facc.selectOption(faccid)
    await this.aplbtn.click()
}
}