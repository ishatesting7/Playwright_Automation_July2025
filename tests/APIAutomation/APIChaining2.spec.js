import { test, expect } from '@playwright/test';
import { generateRandomString, generateRandomDate } from '../../utility/reusableMethod.js';
import 'dotenv/config';

test('API Chaining: Auth, Create Booking, Get Booking', async ({ page }) => {
    // Step 1: Generate API Auth token
    const authResponse = await page.request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: process.env.Applicationusername,
            password: process.env.Applicationpassword
        }
    });
    expect(authResponse.status()).toBe(200);
    const authToken = (await authResponse.json()).token;
    console.log('Auth Token:', authToken);

    // Step 2: Create a new booking
    let firstName = generateRandomString(5);
    let checkinDate = generateRandomDate();
    const bookingResponse = await page.request.post('https://restful-booker.herokuapp.com/booking', {
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
        }
    });
    expect(bookingResponse.status()).toBe(200);
    const responseData = await bookingResponse.json();
    const bookingId = responseData.bookingid;
    console.log('Created Booking:', responseData);

    expect(responseData).toHaveProperty('bookingid');
    expect(responseData.booking).toHaveProperty('firstname', firstName);

    // Step 3: Get the created booking by ID
    const getResponse = await page.request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
    expect(getResponse.status()).toBe(200);
    const bookingDetails = await getResponse.json();
    console.log('Booking Details:', bookingDetails);
});