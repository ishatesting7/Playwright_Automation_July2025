const {test, expect} = require('@playwright/test')

test('Assertion Test', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.locator('[type="text"]')).toHaveCount(4)

    console.log('Assertion Test Completed Successfully!')
})