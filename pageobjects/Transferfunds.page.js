import { test,expect } from "@playwright/test";
export class Transferfundspage{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page)
{
this.page = page
this.amt = page.locator('//input[@type="text"]')
this.frm = page.locator('//select[@id="fromAccountId"]')
this.toa = page.locator('//select[@id="toAccountId"]').first()
this.subtn = page.locator('//input[@type="submit"]')
}
async Transferfund(amount,acno1,acno2)
{
  await this.amt.fill(amount)
  await this.frm.selectOption(acno1)
  await this.toa.selectOption(acno2)
  await this.subtn.click()
}
}
