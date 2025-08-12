//https://jqueryui.com/droppable/

import { test, expect } from '@playwright/test';


var baseURL = "https://jqueryui.com/droppable/"

test('Mouse Action login', async({page}) =>{

    await page.goto(baseURL);
    //Click
    await page.locator('[href="https://jqueryui.com/demos/"]').click();

    //Double Click()
    await page.goto('https://qa-practice.netlify.app/double-click')

    await page.waitForTimeout(1000);

    await page.locator('#double-click-btn').dblclick();

    await expect(page.locator('#double-click-result')).toHaveText('Congrats, you double clicked!');

    //right click
    await page.locator('#double-click-btn').click({button:'right'})
    
    //middle click
    await page.locator('#double-click-btn').click({button:'middle'})

    //left click
    await page.locator('#double-click-btn').click({button:'left'})

    //mouse hover
    await page.goto('https://tutorialsninja.com/demo/');

    await page.locator(".dropdown-toggle[href='https://tutorialsninja.com/demo/index.php?route=product/category&path=25']").hover();

    await page.waitForTimeout(4000);
    

})
