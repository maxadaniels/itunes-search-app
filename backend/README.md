# iTunes Search App

This is a simple web application that allows users to search for media content (e.g., movies, music, podcasts) on iTunes using the iTunes Search API.

## How to Use the App

1. Visit the deployed app: [iTunes Search App](#link-to-deployed-app)
2. Enter your search query in the input field.
3. Select the type of media you want to search for from the dropdown menu.
4. Click the "Search" button.
5. View the search results in the table below, including title, artist name, and release date.
6. Click the "Favorites" button to save items to your favorites list.

## Installation

To run this app locally on your machine, follow these instructions:

1. Clone the repository to your local machine:

git clone https://github.com/maxadaniels/Capstone-Project.git

2. Navigate to the project directory:

    cd backend\frontend

3. Install the dependencies:

    npm install

4. Start the development server:

    npm start

5. Open your web browser and access the app at http://localhost:3000.

## Security Measures

    This app follows best practices for security, including:

Environment Variables: API keys and sensitive information are stored as environment variables to prevent exposure in the source code.

Helmet Middleware: The app uses the Helmet middleware to set various HTTP headers that enhance security.

CORS Configuration: Cross-Origin Resource Sharing (CORS) is configured to control which origins can access the app's resources.

Link to Deployed App
The app is deployed and accessible online at iTunes Search App.
