import { test,expect } from "@playwright/test";
import { log } from "console";
test('test1',async({browser})=>{
    let context = await browser.newContext({
        permissions:['notifications']
    });
   let page = await context.newPage()
   await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
   await page.locator('#browNotButton').click()
   let res = await page.evaluate(()=>{
    return Notification.permission
   });
console.log(res);
});


