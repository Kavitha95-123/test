import { Loginpage } from "../pageobjects/login.page";
import { Homepage1 } from "../pageobjects/Home.page1";
import { Acoountoverviewpage } from "../pageobjects/accountsoverview.page";
import { test,expect } from "@playwright/test";
 test ('pbank',async({page})=>{
    let lpage = new Loginpage(page)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
    await lpage.login('john','demo')

    let h1page = new Homepage1(page)
    await h1page.account()

    let h1accertion = new Acoountoverviewpage()
    await h1accertion.accountoverview()

 });