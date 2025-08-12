import { test, expect } from '@playwright/test';

test.describe('two tests', () => {
  test('one', async ({ page }) => {
 
   await page.goto('https://www.google.com/');
   await  page.locator("//textarea[@id='APjFqb']").fill('Playwright Test');

});

  test('two', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("//textarea[@id='APjFqb']").fill('Cypress Test');
      });

  test('three', async ({ page }) => {
 
        await page.goto('https://www.google.com/');
        await  page.locator("//textarea[@id='APjFqb']").fill('Selenium');
     
     });
});