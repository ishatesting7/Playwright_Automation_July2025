// utils/readExcelValue.js
import { readFile, utils, writeFile } from 'xlsx';

/**
 * Reads data from an Excel file and returns it as an array of objects.
 */
function readExcelValue(filePath, sheetName = null) {
  const workbook = readFile(filePath);
  const actualSheetName = sheetName || workbook.SheetNames[0];
  const worksheet = workbook.Sheets[actualSheetName];
  const jsonData = utils.sheet_to_json(worksheet); // Array of objects

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
  const worksheet = utils.json_to_sheet(data, {
    header: ['username', 'password', 'result']
  });
  workbook.Sheets[sheetName] = worksheet;
  writeFile(workbook, filePath);
}

export default {
  readExcelValue,
  writeExcelValue
};
