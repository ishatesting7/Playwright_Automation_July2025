import { test, expect } from '@playwright/test';

test('Radio Button and Checkboxes', async({page})=>{


    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    // Selector for "Round Trip" radio button
    //const roundTripRadio = page.locator('input#product_549');

    const roundButtonIDLocator = ["input#product_550","input#product_551","input#product_549", "input#product_3186","input#product_7441"];

    //await page.context.cookies().clear(); // Clear cookies before starting the test

    for(const rb of roundButtonIDLocator) {
    // Validate visibility
    if (await page.locator(rb).isVisible()) {
    console.log('Round Trip radio button is visible.');
    } else {
        console.error('Round Trip radio button is NOT visible.');
    }

    // Validate enabled state
    if (await page.locator(rb).isEnabled()) {
    console.log('Round Trip radio button is enabled.');
    } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

    // Check if it's selected, if not, select it
    if (await page.locator(rb).isChecked()) {
    console.log('Round Trip radio button is already selected.');
    } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await page.locator(rb).check();
    await page.waitForTimeout(3000); // Wait for 3 second to ensure the action is processed
    await page.locator(".woocommerce-message").to
    // Validate it’s now checked
    if (await page.locator(rb).isChecked()) {
      console.log('Successfully selected the Round Trip radio button.');
    } else {
      console.error('Failed to select the Round Trip radio button.');
    }
    }
  }
  const validateTextLocator = page.locator(".woocommerce-message");

  // await page.$$('.woocommerce-message');

  // await page.$('.woocommerce-message')
  const radioSingleButton = page.locator('input#product_550');
  await radioSingleButton.check();
  await page.waitForTimeout(5000); // Wait for 3 seconds to ensure the action is processed
  await expect (validateTextLocator).toHaveText('"Dummy return ticket" added to your order. Complete your order below.')

  //await page.locator 
//   roundButtonIDLocator.forEach(async (rb) => {

//   });
        
})