import { test, expect } from '@playwright/test';

test('Dropdown Demo', async ({ page }) => {


    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    
    // Select the dropdown element
    await page.locator('[id="select2-reasondummy-container"]').click();

    await page.locator('[class="select2-search__field"]').fill('Visa application')

    await page.locator('[class="select2-search__field"]').press('Enter');
    await page.waitForTimeout(3000); // Wait for 3 seconds to ensure the action is processed    

    // Validate the selected option 
    const selectedOption = await page.locator('[id="select2-reasondummy-container"]').textContent();
    console.log('Selected Option:', selectedOption);
    await expect(selectedOption).toContain('Visa application');

    // await page.locator('[class="select2-search__field"]').fill('Pr')

    // await page.locator('[class="select2-results__option"]').toHaveCount(3);


})
