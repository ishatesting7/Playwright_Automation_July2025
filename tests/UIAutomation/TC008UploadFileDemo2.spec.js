const {test,expect } = require('@playwright/test');
const path = require('path');

test('test Demo', async ({ page }) => {
  // Go to login page and login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for the dashboard to load
  await page.waitForSelector('nav >> text=Admin');

  // Navigate to Admin > Job > Job Titles
  await page.click('nav >> text=Admin');
  await page.click('text=Job');
  await page.click('text=Job Titles');
  await page.waitForLoadState('networkidle');

  // Click on the "Add" button
  await page.click('button:has-text("Add")');

  // Fill in Job Title and Description
  //await page.fill('input[placeholder="Job Title"]', 'Test Job');
  //await page.fill('textarea[placeholder="Type description here"]', 'This is a test description');

  // Upload the file by targeting the hidden input[type="file"]
  const filePath = path.resolve('tests/uploadFiles/demo.pdf'); // Replace with your actual file
  await page.setInputFiles('input[type="file"]', filePath);

  // Optional: Fill in Note
  await page.fill('textarea[placeholder="Add note"]', 'Uploaded via Playwright');

  // Save the form
  await page.click('button:has-text("Save")');

  // Wait and close
  await page.waitForTimeout(10000);
})
