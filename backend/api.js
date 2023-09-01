const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3030;

app.use(helmet());
app.use(cors()); // Enable CORS for all routes

// Define a route to search iTunes
app.get('/search', async (req, res) => {
    const query = req.query.q;
    const media = req.query.media || 'all'; // Get the media query parameter
  
    // You can customize the iTunes API URL based on the selected media type
    const apiUrl = `https://itunes.apple.com/search?term=${query}&media=${media}`;
  
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
  
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data from iTunes.' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
