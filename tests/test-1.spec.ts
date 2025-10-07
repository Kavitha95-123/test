import { test,expect } from "@playwright/test";
test.skip('Home page',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button")
    //let pageTitle = page.title()
    //console.log(pageTitle)
    //await expect(page).toHaveTitle("qspiders")
    let pageUrl = page.url()
    console.log(pageUrl)
    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/button")
    await page.locator('#btn').click()
});
test.only('built-infunctions',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/')
    let logo = await page.getByAltText('img not found')
    await expect(logo).toBeVisible()
    await page.getByRole('button',{name:/Yes/i}).click()
})







































