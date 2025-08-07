const {test, expect} = require('@playwright/test');

test('TC006 Locating Multiple Elements', async({page}) => {

    await page.goto('https://demoblaze.com/');
    //const links = page.$$('a');
    const links = await page.locator('a').all(); // Use locator to find all anchor elements
    const linkTexts = await Promise.all(links.map(async (link) => { //resolve and reject
        return await link.textContent();
    }));
    console.log(linkTexts);
    expect(linkTexts.length).toBeGreaterThan(0); // Check if there are any links
    expect(linkTexts).toContain('Contact'); // Check if 'Contact' link is present

    console.log('---------------LIST of HREF LINKS---------------');
    for(const link of links) {
        const href = await link.getAttribute('href');
        console.log(href);
    }

    console.log('---------------LIST of PRODUCT NAMES---------------');

    // Locate multiple elements using XPath
    // Note: Ensure that the XPath expression is correct for your page structure
    await page.waitForSelector('//div[@id="tbodyid"]//h4//a'); // Wait for the product elements to be present
    const productName = await page.$$('//div[@id="tbodyid"]//h4//a');

    for(const product of productName) {
        const name = await product.textContent();
        console.log(name);
    }

    // LLM


});