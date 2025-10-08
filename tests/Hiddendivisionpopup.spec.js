import { test,expect } from "@playwright/test";
test.skip('Hiddendivision popup',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/hidden?sublist=0')
    await page.getByText('Add Customer').click()
    await page.waitForTimeout(2000)
    await page.click('#customerName')
    await page.waitForTimeout(2000)
    await page.keyboard.type('kavitha')
    await page.waitForTimeout(2000)
    await page.click('#customerEmail')
    await page.waitForTimeout(2000)
    await page.keyboard.insertText('kavitha@gmail.com')

    
});
 test.skip('keyboard',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await page.getByText('Yes')
    await page.waitForTimeout(2000)
    await page.keyboard.down('Enter')
    await page.waitForTimeout(2000)
    await page.keyboard.up('Enter') 
 });
 test('mouse',async({page})=>{
await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
await page.locator('Yes').hover
await page.mouse.click()
 });

 