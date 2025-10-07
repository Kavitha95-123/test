import { test,expect } from "@playwright/test";
import { log } from "console";
import path from"path";
test ('upload',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
console.log(__dirname);
await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../wsrjhwef.txt'))
await page.getByRole('button',{name:'Upload Single File'}).click()
await page.waitForTimeout(2000);
//let verify = await page.locator('#singleFileStatus').textContent()

 //expect(verify).toContain('wsrjhwef.txt')
 await page.locator('#multipleFileInput').setInputFiles[(path.join(__dirname,'../wsrjhwef.txt'),(path.join(__dirname,'../wsrjhwef.txt')))
 ]
 await page.getByRole('button',{name:'Upload Multiple File'}).click()

});