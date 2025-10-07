import { test,expect } from "@playwright/test";
test ('confirmpopup',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    page.on('dialog',async dialog =>{
       console.log(await dialog.type());
       console.log(await dialog.message());
       await page.waitForTimeout(2000);
       await dialog.accept();
       await expect(dialog.message()).toContain('delete')
    });
    await page.locator('//tbody/tr[1]/td/input').check();
    await page.getByRole('button',{name:'Delete',exact:true}).click()
});