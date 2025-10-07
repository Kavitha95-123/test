import { test } from "@playwright/test";
import { writedaata } from "../utility/readataexcel";
test('test1',async({page})=>{
   await writedaata('./Testdata/worksheet.xlsx','login',1,3)
    

})