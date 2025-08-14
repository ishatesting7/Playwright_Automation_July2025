const XLSX = require('xlsx');

function readExcelValue(filePath, sheetName)
{
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const values = jsonData.flat();
    return values;
}

function writeExcelValue(filePath, sheetName, data)
{
    const workbook = XLSX.readFile(filePath);
    const worksheet = XLSX.utils.json_to_sheet(data, { header: 1 });
    workbook.Sheets[sheetName] = worksheet;
    XLSX.writeFile(workbook, filePath);
}

module.exports = {
    readExcelValue,
    writeExcelValue
};