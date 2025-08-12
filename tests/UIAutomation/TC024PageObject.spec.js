import {expect, test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
let lp;
let hp;

test.beforeEach('Description for Before Each', async({page})=>{

    lp = new LoginPage(page);
    hp = new HomePage(page);

})

test('Navigate to Login Page', async({page})=>{



    await lp.navigateToLogin();
    await lp.enterLoginCreds("demo","demo");
    await page.waitForTimeout(3000);
    await hp.validateLogoutBtn();
    


})

test('Click Close Button', async({page})=>{



    await lp.navigateToLogin();
    await page.waitForTimeout(3000);

    await lp.closeLoginPopup();   


})

