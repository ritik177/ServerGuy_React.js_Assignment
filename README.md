![Screenshot (17)](https://github.com/user-attachments/assets/a8a84bc3-009c-4b29-9800-9a86b1067e70)

# Algolia Hacker News Search Clone
This project is a React-based clone of the Algolia Hacker News search interface. It allows users to search for stories, comments, or polls from Hacker News, filter results by popularity or date, and narrow down searches based on time ranges. Users can navigate through paginated results and view individual story details.

# Features
Search Functionality: Allows users to search for stories, comments, or polls by title, URL, or author.

# Filtering:
-> Story Type: Filter by stories, comments, or polls. -> Sort Order: Sort results by popularity or date. -> Time Range: Filter results by time ranges such as "Last 24 hours," "Past week," "Past month," and "Past year." -> Pagination: Navigate through multiple pages of search results. -> Responsive Design: Adapts to different screen sizes for a seamless experience on both desktop and mobile devices.

# Key Components
=> Header: Displays the title and a placeholder login link. => SearchBar: Provides filters and a search input field for querying stories. => ResultItem: Displays individual search results. => Pagination: Allows users to move between pages of search results.

# Setup
Prerequisites Node.js: Make sure Node.js is installed on your machine. npm or yarn: This project uses npm by default, but you can use yarn as well.

# Installation
Clone the repository: -> git clone [https://github.com/ritik177/ServerGuy_React.js_Assignment.git]

-> cd hackernews_clone

# Install dependencies:
---- npm install

# Start the development server:
---- npm start

=> Open the app in your browser: Navigate to http://localhost:3000.

# Usage
Use the search input and filters to find specific stories, comments, or polls. Navigate through paginated results using the "Previous" and "Next" buttons at the bottom of the page.

# Integration with Algolia Hacker News API
Currently, this project uses mock data for demonstration. To integrate it with the actual Algolia Hacker News API, replace the handleSearch function in Home.js with an API call as follows:

javascript
import axios from 'axios';

const handleSearch = async (query, storyType, sortOrder, timeRange) => { const response = await axios.get(https://hn.algolia.com/api/v1/search?query=${query}&tags=${storyType}&numericFilters=${timeRange}&sortOrder=${sortOrder}); setResults(response.data.hits); }; Make sure to update the API parameters as needed.

# Folder Structure
src/components: Contains reusable components like Header, SearchBar, ResultItem, and Pagination. src/pages: Contains the main Home page where all components are brought together. src/App.js: Main application file that renders the Home component. src/index.js: Entry point that renders the React app.

# Dependencies
React: UI library for building the interface. Axios (optional): For making API calls to the Algolia Hacker News API (if integrated).




Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.
