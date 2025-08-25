import { test, expect } from '@playwright/test';
import { generateRandomString, generateRandomDate } from '../../utility/reusableMethod.js';
import 'dotenv/config';
let authToken = '';
let bookingId = '';

    test('Generate API Auth token', async ({ page }) => {
        const response = await page.request.post('https://restful-booker.herokuapp.com/auth', {
            data: {
            username: process.env.Applicationusername,
            password: process.env.Applicationpassword
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


test('Create a new booking', async ({ page }) => {

        let firstName = generateRandomString(5);
        let checkinDate = generateRandomDate();
        const response = await page.request.post('https://restful-booker.herokuapp.com/booking', {
            data: {
                firstname: firstName,
                lastname: 'Doe',
                totalprice: 150,
                depositpaid: true,
                bookingdates: {
                    checkin: checkinDate,
                    checkout: '2023-10-10'
                },
                additionalneeds: 'Breakfast'
            },
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${authToken}` // Uncomment if you need to use an auth token 
            }
        });
    
        // Check if the response status is 200 OK
        expect(response.status()).toBe(200);
    
        // Parse the JSON response
        const responseData = await response.json();
        bookingId = responseData.bookingid;
        // Log the created booking details to the console
        console.log('Created Booking:', responseData);
    
        expect(responseData).toHaveProperty('bookingid');
        expect(responseData.booking).toHaveProperty('firstname', firstName);
        expect(responseData.booking).toHaveProperty('lastname', 'Doe');
        expect(responseData.booking).toHaveProperty('totalprice', 150);
        expect(responseData.booking).toHaveProperty('depositpaid', true);
        expect(responseData.booking.bookingdates).toHaveProperty('checkin', checkinDate);
        expect(responseData.booking.bookingdates).toHaveProperty('checkout', '2023-10-10');
        expect(responseData.booking).toHaveProperty('additionalneeds', 'Breakfast');
});

test('Get the created booking by ID', async ({ page }) => {
    const response = await page.request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
    
    // Check if the response status is 200 OK
    expect(response.status()).toBe(200);
    
    // Parse the JSON response
    const bookingDetails = await response.json();
    
    // Log the booking details to the console
    console.log('Booking Details:', bookingDetails);
    
   
});