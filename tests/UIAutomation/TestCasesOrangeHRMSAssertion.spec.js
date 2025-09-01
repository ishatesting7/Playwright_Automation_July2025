import { test, expect } from '@playwright/test';

let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test('test', async ({ page }) => {

  await page.goto(baseURL);
  await page.getByPlaceholder('username').fill('Admin');

  await page.getByPlaceholder('password').fill('admin123');
  await page.locator('button[type="submit"]').click();

  let m = 10;

  //await page.waitForTimeout(5000);
  await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()
  
  await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toContainText('Dashboard')

  await expect(page).toHaveTitle('OrangeHRM');

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
  //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))
});


test('test with negative username and password', async ({ page }) => {

    await page.goto(baseURL);
    await page.getByPlaceholder('username').fill('Admin');
  
    await page.getByPlaceholder('password').fill('admin12');
    await page.locator('button[type="submit"]').click();
  
    let m = 10;
   
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toContainText('Invalid credentials');
    //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))
  });


  test('Validate the forgot password functionality', async ({ page }) => {


    const chr = 'abcdefghijklmnopqrstuvxyz0123456789'

    let username = '';

    for(let i = 0; i < 6; i++)
    {
        username = username + chr.charAt(Math.random()*chr.length);
    }
    username = username+"@hotmail.com"

    await page.goto(baseURL);
  
    await page.getByText('Forgot your password?').click();

    await page.getByPlaceholder('Username').fill(username)

    await page.getByRole('button',{name:'Reset Password'}).click();
    //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))

    await expect(page.locator('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]')).toHaveText('Reset Password link sent successfully')
});

