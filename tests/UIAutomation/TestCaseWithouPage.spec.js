const {test, expect, chromium} = require('@playwright/test');


test('Without Using Page', async()=>{


    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = new context.newPage();
    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

})
