import { test, expect } from '@playwright/test';

test.describe('two tests', () => {

  
  test('Demo 1', async ({ page }) => {

   const userDetails = [
    {
    firstname : "First Name", 
     lastname: "Last Name", 
     address:"12 Avenue", 
     city:"New York",
     state:"USA"
    },
    { 
        firstname : "First Name 1", 
         lastname: "Last Name", 
         address:"12 Avenue", 
         city:"New York",
         state:"USA"
        },
        {
        firstname : "First Name 2", 
        lastname: "Last Name", 
        address:"12 Avenue", 
        city:"New York",
        state:"USA"
        }
];

for (const user of userDetails)
{

   await page.goto('https://parabank.parasoft.com/parabank/register.htm');
   
   await  page.locator("//input[@id='customer.firstName']").fill(user.firstname);

   await page.waitForTimeout(1000)

   await  page.locator("//input[@id='customer.lastName']").fill(user.lastname);

   await page.waitForTimeout(1000)

   await  page.locator("//input[@id='customer.address.street']").fill(user.address);

   await page.waitForTimeout(1000)

   await  page.locator("//input[@id='customer.address.city']").fill(user.city);
}

});

});