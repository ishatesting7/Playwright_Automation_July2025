import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

let baseURL = "https://testautomationpractice.blogspot.com/"
test('Checkboxes', async ({ page }) => {

  await allure.description("The test checks if an active user with a valid password can sign in to the app.");
  await allure.epic("Signing in");
  await allure.feature("Sign in with a password");
  await allure.story("As an active user, I want to successfully sign in using a valid password");
  await allure.tags("signin", "ui", "positive");
  await allure.issue("https://github.com/allure-framework/allure-js/issues/331", "ISSUE-331");
  await allure.owner("eroshenkoam");
  await allure.parameter("browser", "chrome");
  await page.goto(baseURL);

  const checkbox = page.locator('input[id="sunday"]');
  
  await checkbox.check();

  await expect(checkbox).toBeChecked();

  // Uncheck the checkbox

  await checkbox.uncheck();

  await expect(checkbox).not.toBeChecked();

  const weekDays = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday', '#sunday'];
 
  for(const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

    // Uncheck all checkboxes   
  for(const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    }
    //Radio Button
    const radioButtonMale = page.locator('input[id="male"]');
    const radioButtonFemale = page.locator('input[id="female"]');
    await radioButtonMale.check();
    await expect(radioButtonMale).toBeChecked();
    await expect(radioButtonFemale).not.toBeChecked();  
    await radioButtonFemale.check();
    await expect(radioButtonFemale).toBeChecked();
    await expect(radioButtonMale).not.toBeChecked();
    
});