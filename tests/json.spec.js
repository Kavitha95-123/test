import { test } from "@playwright/test";
import { Registerpage } from "../pageobjects/Register.page";
import tdata from "../Testdata/data.json"

test.skip ('register',async({page})=>{
    await page.goto(tdata.url)
    let rpage = new Registerpage(page)
    await rpage.register(tdata.name,tdata.email,tdata.pwd)
    await page.waitForTimeout(2000)
});
tdata.forEach(({url,name,email,pwd},index)=>{
    // const url = data.url
    // const name = data.name
    // const eml = data.email
    // const pd = data.pwd
    test(`register #${index+1}`,async({page})=>{ 
     await page.goto(url)
     let rpage = new Registerpage(page)
     await rpage.register(name,email,pwd)
     await page.waitForTimeout(2000)
    });
});