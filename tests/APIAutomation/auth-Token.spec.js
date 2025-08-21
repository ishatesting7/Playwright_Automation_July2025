//Generate the auth token and store in the variable
import { test, expect } from '@playwright/test';

// This test is for generating an auth token
// request URL - https://restful-booker.herokuapp.com/auth'
let authToken = '';
test('Generate API Auth token', async ({ page }) => {
    const response = await page.request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
        username: 'admin',
        password: 'password123'
        }
    });
    // Check if the response status is 200 OK
    expect(response.status()).toBe(200);
    
    // Parse the JSON response
    const responseData = await response.json();
    
    // Store the token in a variable
    authToken = responseData.token;
    
    // Log the token to the console
    console.log('Auth Token:', authToken);
})

// get all booking ids
test('Get all booking IDs', async ({ page }) => {
    const response = await page.request.get('https://restful-booker.herokuapp.com/booking');
    
    // Check if the response status is 200 OK
    expect(response.status()).toBe(200);
    
    // Parse the JSON response
    const bookings = await response.json();
    
    // Log the booking IDs to the console
    bookings.forEach(booking => {
        console.log('Booking ID:', booking.bookingid);
    });
});