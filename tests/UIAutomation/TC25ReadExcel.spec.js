// tests/loginWithExcel.spec.js
const { test, expect } = require('@playwright/test');
const { readExcelValue, writeExcelValue } = require('../../utility/readExcelValue');

const filePath = '';
const { data, workbook, sheetName } = readExcelValue(filePath);

test.describe('Login tests from Excel', () => {
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    test(`Login test for ${user.username}`, async ({ page }) => {
      try {
        await page.goto('https://freelance-learn-automation.vercel.app/login');
        await page.fill('#username', user.username);
        await page.fill('#password', user.password);
        await page.click('button[type="submit"]');
        //demo
        await expect(page.locator('#dashboard')).toBeVisible();

        data[i].result = 'Pass';
      } catch (err) {
        data[i].result = 'Fail';
      } finally {
        writeExcelValue(filePath, data, sheetName, workbook);
      }
    });
  }
});
