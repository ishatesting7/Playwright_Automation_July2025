const { test, expect} = require('@playwright/test')

test('Simple Alert with Ok', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //#alertBtn

    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click("//button[@id='alertBtn']")

    await page.waitForTimeout(3000)
})


test('Simple Alert with Ok and cancel', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //#alertBtn

    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        
        await dialog.dismiss()
        //await dialog.accept()
    })

    await page.click('[id="confirmBtn"]')

    await page.waitForTimeout(3000)

    await expect(page.locator('[id="demo"]')).toHaveText('You pressed Cancel!');
})


test('Simple Alert with type and click ok', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //#alertBtn

    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        
        await dialog.accept('John Doe');
        //await dialog.accept()
    })

    await page.click('[id="promptBtn"]')

    await page.waitForTimeout(5000)

    //await expect(page.locator('[id="demo"]')).toHaveText('You pressed Cancel!');
})