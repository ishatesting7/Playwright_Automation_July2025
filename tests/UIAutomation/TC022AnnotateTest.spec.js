import { test, expect } from '@playwright/test';

test('test login page @smoke', {
  annotation: {
    type: 'login',
    description: 'https://github.com/microsoft/playwright/issues/23180'
  },
}, async ({ page }) => {
  // ...
  page.goto('https://playwright.dev/docs/test-annotations#annotate-tests')
});

test('example test', async ({ page, browser }) => {
    test.info().annotations.push({
      type: 'browser version',
      description: browser.version(),
    });
  
    // ...
  });
  
  