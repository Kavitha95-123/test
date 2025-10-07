import { test,expect } from "@playwright/test";
test('drag and drop',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))
    await page.getByText('Mobile Cover').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('')
})