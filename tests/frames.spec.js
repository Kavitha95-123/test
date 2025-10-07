import { test,expect } from "@playwright/test";
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    let f = page.frames()
    console.log(f.length);
    let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.locator('//input[@name="mytext1"]').fill("hi");
    await page.waitForTimeout(2000);
    let frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
    await frame2.locator('//input[@name="mytext2"]').fill('hello')
    await page.waitForTimeout(2000);
    let frame4 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
    await frame4.locator('//input[@name="mytext4"]').fill('how are you')
    await page.waitForTimeout(2000);
    let frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    // let frame3 = await page.locator('//frame3[@src="frame_3.html"]').contentFrame()
    await frame3.locator('//input[@name="mytext3"]').fill("fine")
    await page.waitForTimeout(2000)
    const innerframe = await frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
    await innerframe.locator('//div[@data-value="I am a human"]').check()
    await page.waitForTimeout(2000)
});
test('handling frames in demoapp',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames')
    const frame1 = await page.frameLocator('iframe[class="w-full h-96"]')
    await page.waitForTimeout(2000)
    await frame1.locator('//input[@name="username"]').fill('admin')
    await page.waitForTimeout(2000)
    await frame1.locator('//input[@name="password"]').fill('manager')
    await page.waitForTimeout(2000)
});
