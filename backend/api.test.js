const axios = require('axios');
const { app } = require('./api'); // Import your Express app

describe('API Tests', () => {
  // Define a test for the /search route
  test('should return a successful response from /search', async () => {
    // Define the test data (query and media type)
    const query = 'example';
    const media = 'all';

    // Make a request to your API using Axios
    const response = await axios.get(`http://localhost:3030/search?q=${query}&media=${media}`);

    // Assert that the response has a status code of 200 (OK)
    expect(response.status).toBe(200);
    const responseData = response.data;
    expect(responseData).toHaveProperty('results');
  });

});

