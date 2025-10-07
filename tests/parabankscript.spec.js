import { Loginpage } from "../pageobjects/login.page";
import { Homepage } from "../pageobjects/Home.page";
import { opennewacoountpage } from "../pageobjects/opennewaccount.page";
import { Transferfundspage } from "../pageobjects/Transferfunds.page";
import { test,expect } from "@playwright/test";
import excel from 'exceljs'
import { celldata } from "../utility/readataexcel";
import funds from "../Testdata/funds.json"
import loan from "../Testdata/loan.json"
import { Requestloanpage } from "../pageobjects/requestloan.page";
test('parabank',async({page})=>{
    let data=await celldata('./Testdata/logindetails.xlsx','Sheet1')
    console.log(data);
    
    await page.goto(data[1][0])
    let lpage = new Loginpage(page)
    
    let hpage = new Homepage(page)
    let openpage = new opennewacoountpage(page)
    await lpage.login(data[1][1],data[1][2])
   await hpage.homenewaccount()
   await openpage.opennewaccount('SAVINGS','13344')
   let actVal=page.locator('//a[@href="activity.htm?id=13344"]').textContent()
   console.log(actVal);
   
   await expect(actVal).toContain('13344')
    //await hpage.transfer()
    //let trspage = new Transferfundspage(page)
    //await trspage.Transferfund(funds.amount,funds.acno1,funds.acno2)
    let rpage = new Requestloanpage(page)
    await rpage.requestloan(loan.amount,loan.downpay,loan.faccid)


});








