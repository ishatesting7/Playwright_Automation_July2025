/*
curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 28,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
*/
import { test, expect } from '@playwright/test';
test('Create a new pet', async ({ page }) => {
    const response = await page.request.post('https://petstore.swagger.io/v2/pet', {
    
        data: {
            id: 28,
            category: {
                id: 0,
                name: 'string'
            },
            name: 'doggie',
            photoUrls: ['string'],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'available'
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

    // Log the created pet details to the console
    console.log('Created Pet:', responseData);

    expect(responseData).toHaveProperty('id', 28);
    expect(responseData).toHaveProperty('name', 'doggie');
    expect(responseData).toHaveProperty('status', 'available');
    expect(responseData.category).toHaveProperty('id', 0);
    expect(responseData.category).toHaveProperty('name', 'string');
    expect(responseData.tags[0]).toHaveProperty('id', 0);
    expect(responseData.tags[0]).toHaveProperty('name', 'string');  
});
