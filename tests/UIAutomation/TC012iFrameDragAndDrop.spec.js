//https://jqueryui.com/droppable/


import { test, expect } from '@playwright/test';


var baseURL = "https://jqueryui.com/droppable/"

test('Iframe Demo', async({page}) =>{

    await page.goto(baseURL);

    const iframeDemo = page.frameLocator('.demo-frame');

    const dragElement = iframeDemo.locator('[id="draggable"]');

    const dropElement = iframeDemo.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);

    await page.waitForTimeout(10000);

    await page.locator('[type="search"]').fill('Playwright');

    await page.waitForTimeout(2000);

})
