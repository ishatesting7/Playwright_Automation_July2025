import { test, expect } from '@playwright/test';

test.describe('two tests', () => {
  test('Demo 1 @smoke @regression', async ({ page }) => {
 
   await page.goto('https://www.google.com/');
   await  page.locator("//textarea[@id='APjFqb']").fill('Playwright Test');

});

  test('Demo 1 @regression', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("//textarea[@id='APjFqb']").fill('Cypress Test');
      });

  test('Demo 2 @smoke', async ({ page }) => {
 
        await page.goto('https://www.google.com/');
        await  page.locator("//textarea[@id='APjFqb']").fill('Selenium');
     
     });
});