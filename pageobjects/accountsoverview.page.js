import { test,expect } from "@playwright/test";
export class Acoountoverviewpage{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page)
{
this.page = page
this.accno = page.locator('//a[text()="13344"]')
this.balance = page.locator("//tr[1]/td[2]")
this.amtBal = page.locator("//tr[1]/td[3]")

}
async accountoverview()
{
await expect(this.accno).toBeVisible()
await expect(this.balance).toBeVisible()
await expect(this.amtBal).toBeVisible()

}
}
