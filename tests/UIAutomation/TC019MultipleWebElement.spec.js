import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  
    await page.goto('https://demoblaze.com/');

    // count the number of links on the page

    const countLink = await page.$$('a')

    const pageURls = await page.$$eval('a', demoLink =>
    demoLink.map(link =>link.href))

    console.log(pageURls);
    //console.log(countLink);

    for(const link of countLink)
    {
        const linkText = await link.textContent();

        //await link.click()
        
        console.log(linkText)
    }

    await page.waitForSelector('//div[@id="tbodyid"]//h4/a');

    const productDetails = await page.$$('//div[@id="tbodyid"]//h4/a')

    for(const product of productDetails)
    {
        const prod = await product.textContent();
        console.log(prod);
    }

    const amount = await page.$$('//div[@id="tbodyid"]//h5')
    const am = [12, 145, 3343];
    for(const amt of amount)
    {
        const am = await amt.textContent();
        console.log(am);
    }


});

test('one', async ({ page }) => {
 
    await page.goto('https://www.google.com/');
    await  page.locator("//textarea[@id='APjFqb']").fill('Playwright Test');
 
 });