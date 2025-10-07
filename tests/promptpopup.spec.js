import { test,expect } from "@playwright/test";
test ('confirmpopup',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    page.on('dialog',async dialog =>{
       //console.log(await dialog.type());
       //console.log(await dialog.message());
       await page.waitForTimeout(2000);
       await dialog.accept('dont open');
       await expect(dialog.message()).toContain('delete')
    });
await page.getByRole('checkbox',{type:'checkbox'}).first().click();
await page.getByRole('button',{name:'Delete',exact:true}).click();
});