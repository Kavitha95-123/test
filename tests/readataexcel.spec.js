import { test } from "@playwright/test";
import { celldata } from "../utility/readataexcel";
test('test1',async({page})=>{
    let data = await readExcelData('worksheet','./playwright/Testdata/worksheet.xlsx',1,1)
    console.log(data);

})

test('readdata', async()=>{
    let data = await celldata('C:/Users/Kavitha/Desktop/playwright/Testdata/worksheet.xlsx','Sheet2')
    console.log( await data);
    
})