import excel  from "exceljs";
// export async function readExcelData(sheetname,path,rownum,cellnum)
// {
//     const book = new excel.Workbook()
//     await book.xlsx.readFile(path)
//     const sheet = await book.getWorksheet(sheetname)
//     const data = await sheet.getRow(rownum).getCell(cellnum).value
//     return data
// }
// export async function writedaata(path,sheetname,rownum,cellnum){
//     const book = new excel.Workbook()
//     await book.xlsx.readFile(path)
//     const sheet = await book.addWorksheet(sheetname)
//     sheet.getRow(rownum).getCell(cellnum).value='kavitha'
//     await book.xlsx.writeFile(path)

// }

export async function celldata(path, sheetname){
    const book = new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet = book.getWorksheet(sheetname)
    let arr1 = []
    for(let i=1; i<= sheet.rowCount; i++){
        let arr =[]
        for(let j=1; j<= sheet.columnCount; j++){
            let temp = sheet.getRow(i).getCell(j).value
            arr.push(temp)
        }
        arr1.push(arr)
    }
    return arr1
}


