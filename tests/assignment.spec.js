import { test,expect } from "@playwright/test";
import { log } from "console";
test ('verify elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByPlaceholder("Enter your full name").fill("kavitha");
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9743265728");
    await page.getByPlaceholder("Type your message here...").fill("details");
    await page.getByPlaceholder("Search products...").fill("books");
    await page.waitForTimeout(5000);
   
    const button = await page.getByRole('button',{name:'search'})
     await expect(button).toBeEnabled()
    console.log('Button is visble');

});