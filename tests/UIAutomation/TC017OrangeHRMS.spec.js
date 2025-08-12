import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Organization' }).click();
  await page.getByRole('listitem').filter({ hasText: /^General Information$/ }).click();

  
  const value1 = await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").isDisabled();
  const value2 = await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").inputValue();

  const value3 = await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").isDisabled();
  const value4 = await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").inputValue();

  console.log(value1);
  console.log(value2);

  //getByRole('listitem').filter({ hasText: /^Sales & Marketing$/ }).getByRole('button')
  console.log(value3);

  console.log(value2);


  //div[class='oxd-grid-item oxd-grid-item--gutters organization-name-container'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']


//CSS
//[class="oxd-table-card"]:first-child [class="oxd-icon-button oxd-table-cell-action-space"]:last-child

//class="oxd-table-card" - 6 Element
//for

////div[contains(text(),`Jobinsam@6742`)]
///html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/div[6]/div[1]/button[1]/i[1]



//li:nth-child(2) div:nth-child(1) span:nth-child(1) button:nth-child(1) i:nth-child(1)

});