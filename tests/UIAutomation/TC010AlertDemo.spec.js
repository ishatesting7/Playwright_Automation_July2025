const{test, expect} = require('@playwright/test');

test('Javascript Alerts Demo', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    // Click on the first button to trigger an alert
    // Handle Alert Popup
    page.on('dialog', async dialog => { 

        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');

        await dialog.accept(); // Accept the alert
        console.log('Alert accepted');  
        
    })

    await page.click('button[onclick="jsAlert()"]');
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
});


test('Javascript Alerts Demo with OK and Cancel', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    // Click on the first button to trigger an alert
    // Handle Alert Popup
    page.on('dialog', async dialog => { 

        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');

        await dialog.accept(); // Accept the alert
        console.log('Alert accepted');  

        //await dialog.dismiss(); // Dismiss the alert
        
    })

    await page.click('button[onclick="jsConfirm()"]');
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
});

test('Javascript Alerts Demo Prompt Type', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    // Click on the first button to trigger an alert
    // Handle Alert Popup
    page.on('dialog', async dialog => { 

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');// Check default value of prompt
        expect(dialog.defaultValue()).toBe(''); // Default value is empty
        await dialog.accept('Demo User'); // Accept the alert
        console.log('Alert accepted');  

        //await dialog.dismiss(); // Dismiss the alert
        
    })
    await page.click('button[onclick="jsPrompt()"]');
    await expect(page.locator('#result')).toHaveText('You entered: Demo User'); // Verify the result after accepting the prompt
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
});