//https://www.google.com/
//https://jqueryui.com/droppable/

import { test, expect } from '@playwright/test';


var baseURL = "https://www.bing.com/"

test('Keyboard Action', async({page}) =>{

    await page.goto(baseURL);

    await page.locator('#sb_form_q').click();

    await page.locator('#sb_form_q').fill('Playwright',{force:true})

    await page.locator('#sb_form_q').press('Enter')

    await page.waitForTimeout(3000);

    await page.locator('#sb_form_q').press('Control+a');

    await page.locator('#sb_form_q').press('Delete');

    await page.locator('#sb_form_q').fill('Cypress',{force:true})

    await page.waitForTimeout(4000);

    /*

     page.keyboard.press('Tab',{delay:1000})

    */
    
})
