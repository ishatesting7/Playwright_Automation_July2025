import { test, expect } from '@playwright/test';

let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test('test', async ({ page }) => {

  await page.goto(baseURL);
  await page.getByPlaceholder('username').fill('Admin');

  await page.getByPlaceholder('password').fill('admin123');
  await page.locator('button[type="submit"]').click();
  //await page.waitForTimeout(5000);

  //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))
});