const {test, expect} = require('@playwright/test');

test('Dropdown Demo Test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption('India');

    await page.locator('#country').selectOption({label:'India'});

    await page.locator('#country').selectOption({index:1});

    await page.locator('#country').selectOption({value:'australia'});
    
    await page.selectOption('#country','France');
    
    //To check number of options - Approach 1

    const optionLength =await page.locator('#country option')
    await expect(optionLength).toHaveCount(10);

    //To check number of options - Approach 1

    const demoOption = await page.$$('#country option')
    console.log("Number of Option in Dropdown", demoOption.length);
    expect(demoOption.length).toBe(10)


    //To Validate specific country in the dropdown
    let status=false;
    for(const demo of demoOption)
    {
        console.log('Country - ', await demo.textContent());
        let value = await demo.textContent();
        if(value.includes('United States'))
        {
            status = true;
            break;
        }
    }

    expect(status).toBeTruthy();

})