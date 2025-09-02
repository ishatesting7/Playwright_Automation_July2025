const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');

let browser, context, page;

Given('I open the SauceDemo login page', async function () {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
  await page.goto('https://www.saucedemo.com/');
});

When('I enter username {string} and password {string}', async function (username, password) {
  await this.page.fill('#user-name', username);
  await this.page.fill('#password', password);
});

When('I click the login button', async function () {
  await this.page.click('#login-button');
});

Then('I should see the inventory page for {string}', async function (username) {
  await this.page.waitForSelector('.inventory_list', { timeout: 5000 });
  const inventoryVisible = await this.page.isVisible('.inventory_list');
  assert.strictEqual(inventoryVisible, true, `${username} should see inventory page`);
});

Then('I should see an error message {string}', async function (expectedError) {
  await this.page.waitForSelector('[data-test="error"]', { timeout: 5000 });
  const errorText = await this.page.textContent('[data-test="error"]');
  assert.ok(errorText.includes(expectedError), `Expected error "${expectedError}" but got "${errorText}"`);
});
