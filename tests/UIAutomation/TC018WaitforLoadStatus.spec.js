import { test, expect } from '@playwright/test';

test('test @regression @smoke ', async ({ page }) => {
  
  
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.locator('.subLink').click();

    await page.waitForLoadState('networkidle');

   // await page.waitForTimeout(1000);

    const countCheckBox = await page.locator('//input[@type="checkbox"]').count();

    expect(countCheckBox).toBe(6);

});