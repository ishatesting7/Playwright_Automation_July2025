import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').nth(1).fill('Demo');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('DemoQA');
  await page.getByRole('textbox', { name: 'Add note' }).fill('DemoQANOTes');
  await page.waitForSelector('[class="oxd-file-button"]');
  await page.getByText('Browse').setInputFiles('tests/uploadFiles/demo.pdf');

  //await page.getByRole('button',{name:'Choose File'}).
  //await page.locator('[class="oxd-file-button"]').setInputFiles('tests/uploadFiles/demo.pdf');
  await page.waitForTimeout(10000); // Wait for the file to be uploaded

});