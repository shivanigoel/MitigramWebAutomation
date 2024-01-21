const { test, expect } = require('@playwright/test');
const axios = require('axios');
const testData = require('../TestData/testdata.json');

test.describe('Login API Tests', () => {
  test('API: Validate Login API @Critical', async () => {
    const apiUrl = testData.apiEndpoint;

    // Make an API request to validate the Login API
    const apiResponse = await axios.get(apiUrl);

    // Validate the API response
   
    expect(apiResponse.statusText).toBe(testData.loginAPI.StatusCode);
    expect(apiResponse.request.method).toBe(testData.loginAPI.RequestMethod);
  });

  test.fixme('API: Validate Login API - Invalid Credentials @High', async () => {
    // Test case to validate the API response when invalid credentials are used
   
  });

  test.fixme('API: Validate Login API - Empty Credentials @High', async () => {
    // Test case to validate the API response when empty credentials are used

  });
});
