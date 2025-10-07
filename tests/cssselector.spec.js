import { test,expect } from "@playwright/test";
test('Test Css value using toHaveCSS', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')

    const button1 = page.locator('//div[@class="bd-example"]/button[text()="Primary" and @class="btn btn-primary"]')
    
    const button1clr = await expect(button1).toHaveCSS('background-color', 'rgb(0, 123, 255)')
});

test('Test Secondary button using toHaveCSS', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')

    const button1 = page.locator('//div[@class="bd-example"]/button[text()="Secondary" and @class="btn btn-secondary"]')
    
    await expect(button1).toHaveCSS('background-color', 'rgb(108, 117, 125)')
});
test('Test Success  usingdanger toHaveCSS', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')

    const button1 = page.locator('//div[@class="bd-example"]/button[text()="Danger" and @class="btn btn-danger"]')
    
    await expect(button1).toHaveCSS('background-color', 'rgb(108, 117, 125)')
});