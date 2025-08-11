const{test, expect} = require('@playwright/test');

test('iFRAMES DEMO', async ({ page }) => {


    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Switch to the first iframe
    // Count the number of iframes
    const allframes = await page.frames();

    console.log(`Total number of frames: ${allframes.length}`);

    // Switch to the first iframe
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})

    await frame1.fill('[name="mytext1"]', 'John Doe');

    await page.waitForTimeout(5000);

    // Switch to the second iframe

    const frame2 = await page.frameLocator('frame[src="frame_4.html"]').locator('[name="mytext4"]');

    await frame2.fill('John Doe');

    await page.waitForTimeout(5000);
    
})