import {test,expect  } from "@playwright/test";
import fs  from "fs";
import path from "path";
// import { path } from "path";
test('file download',async({page}) =>{
    const customfolder = ("C:/Users/Kavitha/Desktop/objects");
    const customfilename = 'wsrjhwef.txt'
    const fullpath = await path.join(customfolder,customfilename)
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('the downloaded file')
    const [downloadfile] = await Promise.all(
        [
            page.waitForEvent('download'),
            page.getByRole('button',{name:'Download'}).click()
        ])
        console.log(fullpath);
        await downloadfile.saveAs(fullpath)
        if (fs.existsSync(fullpath))
        {
            console.log('file is saved to' + fullpath);
            
        }
        else
        {
            console.log('file is not saved to' + fullpath);
            
        }
});



