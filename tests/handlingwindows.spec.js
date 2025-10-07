import { test } from "@playwright/test";
test ('handling pages',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    const pagepromise = context.waitForEvent('page')
    await page.getByRole('button',{name:'view more'}).first().click()
    let newPage = await pagepromise;
    await newPage.locator("//*[local-name()='svg']").click()
    await newPage.waitForTimeout(2000)
    //console.log(await context.pages());
    let pg = await context.pages();
    console.log(await pg.length);
    let maintab = pg[0]
    let childtab = pg[1]
    console.log(await maintab.title());
    console.log(await childtab.title());
    await maintab.bringToFront()
    await childtab.close()
    console.log(pg.length);
})

