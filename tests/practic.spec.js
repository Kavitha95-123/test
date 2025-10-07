import {test,expect} from "@playwright/test";
test ('authentication',async({browser})=>{
    const context = browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }


    });
     const page = await context.newPage();
     await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0')

});