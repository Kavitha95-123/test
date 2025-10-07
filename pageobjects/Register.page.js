import { expect } from "@playwright/test";
export class Registerpage{


/**
 * @param {import ('playwright').Page} page
 */
constructor(page){
    this.page = page 
    this.nametf =page.getByPlaceholder('Enter your name')
    this.emailtf=page.getByPlaceholder('Enter your Email')
    this.pwdtf=page.getByPlaceholder('Enter your password')
    this.rgstrbtn=page.getByRole('button',{name:'Register'})


 }
 
 async register(username,emailtf,pwd){
    await expect(this.nametf).toBeEditable
    await this.nametf.fill(username)
    await this.emailtf.fill(emailtf)
    await this.pwdtf.fill(pwd)
    await this.rgstrbtn.click()
 }}