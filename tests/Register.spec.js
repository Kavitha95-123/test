import { Registerpage } from "../pageobjects/Register.page";
import { test } from "@playwright/test";
test('test1',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    let rpage = new Registerpage(page)
   let a = await rpage.register('kavitha','kavitha@gmail.com','1234')
    console.log(a)
});
