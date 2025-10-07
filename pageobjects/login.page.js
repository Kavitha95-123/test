import { test,expect } from "@playwright/test";
export class Loginpage{
/**
 * @param {import ('playwright').Page} page
 */
constructor(page)
{
    this.page=page
    this.nametf=page.locator('input[name="username"]');
    this.pwdtf=page.locator('input[name="password"]');
    this.lgbtn=page.locator('input[value="Log In"]');
}
async gotoLoginPage(){
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
}
async login(username,pwd)
{
    await expect(this.nametf).toBeEditable
    await this.nametf.fill(username)
    await this.pwdtf.fill(pwd)
    await this.lgbtn.click()
}
}
