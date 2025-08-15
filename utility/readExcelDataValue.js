// utils/readExcelValue.js
const XLSX = require('xlsx');

/**
 * Reads data from an Excel file and returns it as an array of objects.
 */
function readExcelValue(filePath, sheetName = null) {
  const workbook = XLSX.readFile(filePath);
  const actualSheetName = sheetName || workbook.SheetNames[0];
  const worksheet = workbook.Sheets[actualSheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet); // Array of objects

  return {
    data: jsonData,
    workbook,
    sheetName: actualSheetName
  };
}

/**
 * Writes data back to the Excel file.
 */
function writeExcelValue(filePath, data, sheetName, workbook) {
  const worksheet = XLSX.utils.json_to_sheet(data, {
    header: ['username', 'password', 'result']
  });
  workbook.Sheets[sheetName] = worksheet;
  XLSX.writeFile(workbook, filePath);
}

module.exports = {
  readExcelValue,
  writeExcelValue
};
