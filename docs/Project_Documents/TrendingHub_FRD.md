# Functional Requirements Document (FRD)
# Trending Hub Website

## Document Information
- **Document Title:** Functional Requirements Document for Trending Hub Website
- **Version:** 1.0
- **Date:** March 19, 2025
- **Status:** Final

## Table of Contents
1. [Introduction](#introduction)
2. [System Overview](#system-overview)
3. [User Interface Requirements](#user-interface-requirements)
4. [Functional Requirements](#functional-requirements)
5. [API Integration Requirements](#api-integration-requirements)
6. [Backend Service Requirements](#backend-service-requirements)
7. [Data Requirements](#data-requirements)
8. [Non-Functional Requirements](#non-functional-requirements)
9. [Technical Specifications](#technical-specifications)
10. [Implementation Details](#implementation-details)
11. [Testing Requirements](#testing-requirements)
12. [Deployment Requirements](#deployment-requirements)
13. [Appendices](#appendices)

## Introduction

This Functional Requirements Document (FRD) provides detailed specifications for the development and implementation of the Trending Hub website. It translates the business requirements into technical specifications and functional requirements that will guide the development team in building the website.

### Purpose
The purpose of this document is to define the functional requirements, technical specifications, and implementation details for the Trending Hub website, ensuring that all stakeholders have a clear understanding of what will be delivered.

### Scope
This document covers all aspects of the Trending Hub website, including user interface, API integrations, backend services, data requirements, and technical specifications. It serves as the primary reference for the development team during implementation.

### References
- Business Requirements Document (BRD) for Trending Hub Website
- API documentation for YouTube, Twitter, TikTok, and Google Trends
- Web design mockups and wireframes

## System Overview

Trending Hub is a web-based platform that aggregates and displays trending content from multiple social media platforms in a single interface. The system consists of the following components:

1. **Frontend Web Application:** A responsive HTML/CSS/JavaScript application that provides the user interface and client-side functionality.

2. **API Integration Layer:** JavaScript modules that interact with various social media APIs to fetch trending content.

3. **Backend Proxy Services:** Server-side components that handle API authentication, CORS issues, and data transformation for certain platforms.

4. **Data Storage:** Local storage for user preferences and caching of API responses.

### System Architecture Diagram

```
+----------------------------------+
|          User's Browser          |
+----------------------------------+
              |
              v
+----------------------------------+
|        Frontend Application      |
|  (HTML, CSS, JavaScript, APIs)   |
+----------------------------------+
              |
              v
+----------------------------------+
|        API Integration Layer     |
+----------------------------------+
        /      |       \      \
       /       |        \      \
      v        v         v      v
+-------+ +--------+ +------+ +-------+
|YouTube| |Twitter | |TikTok| |Google |
| API   | | API    | | API  | |Trends |
+-------+ +--------+ +------+ +-------+
             |         |
             v         v
      +------------------+
      | Backend Services |
      | (Proxy Servers)  |
      +------------------+
```

## User Interface Requirements

### UI-1: Header Section
- The header must contain the Trending Hub logo on the left side
- The logo must be clickable and link back to the home page
- The header must include region filter buttons (Global, Americas, Europe, Asia, Africa, Oceania)
- The active region filter must be visually highlighted
- The header must have a transparent background with blur effect

### UI-2: Platform Filter Section
- Must be positioned below the header
- Must contain filter buttons for All, YouTube, Twitter/X, Facebook, and TikTok
- The active platform filter must be visually highlighted
- Must have a transparent background with blur effect

### UI-3: YouTube Content Section
- Must be positioned at the top of the main content area
- Must be 50% of the original size and positioned on the left side of the page
- Must display "YouTube" as the section title
- Must be divided into two parts:
  - Left side: Video preview area with embedded YouTube player
  - Right side: Scrollable list of trending videos
- Each trending item must display:
  - Ranking number (#1, #2, etc.)
  - Video thumbnail with play overlay on hover
  - Video title
  - View count
  - Upload time
- Clicking on a video must load it in the preview area
- Must have a transparent background with green glowing effects

### UI-4: Platform Windows Section
- Must be positioned below the YouTube section
- Must be arranged in a 2x2 grid layout
- Each platform window must be 30% of the original size
- Each platform window must display the platform name as the section title
- Each platform window must contain a scrollable list of trending items
- Each trending item must display:
  - Ranking number (#1, #2, etc.)
  - Title
  - Relevant metrics (views, likes, etc.)
  - Time information
- Clicking on a trending item must open a modal with additional information
- Must have transparent backgrounds with green glowing effects

### UI-5: Modal Windows
- Video Modal:
  - Must display embedded video content
  - Must have a close button in the top-right corner
  - Must cover most of the screen without completely obscuring the background
- Content Modal:
  - Must display detailed information about the selected trending item
  - Must have a close button in the top-right corner
  - Must include a link to the original content
  - Must have a semi-transparent background with green accents

### UI-6: Footer Section
- Must be positioned at the bottom of the page
- Must display copyright information on the left side
- Must include links to About, Privacy, and Contact pages on the right side
- Must have a transparent background with blur effect

### UI-7: Background Video
- Must display a spinning globe video
- Must cover the entire background of the page
- Must be fixed in position (not scroll with content)
- Must be muted and loop continuously
- Must not interfere with the readability of content

### UI-8: Responsive Design
- All UI elements must adapt to different screen sizes
- On mobile devices:
  - Platform windows must stack vertically
  - YouTube section must display video preview above the list
  - Header elements must reorganize for smaller screens
  - Font sizes must adjust for readability

## Functional Requirements

### FR-1: Region Filtering
- The system must allow users to filter trending content by geographical region
- Available regions must include Global, Americas, Europe, Asia, Africa, and Oceania
- Global must be the default selected region
- Changing the region must update all platform content simultaneously
- The system must visually indicate the currently selected region
- Region selection must persist during the user's session

### FR-2: Platform Filtering
- The system must allow users to filter content by platform
- Available platform filters must include All, YouTube, Twitter/X, Facebook, and TikTok
- "All" must be the default selected filter
- When a specific platform is selected, only that platform's content must be displayed
- The system must visually indicate the currently selected platform
- Platform selection must persist during the user's session

### FR-3: YouTube Video Preview
- The system must allow users to preview YouTube videos without leaving the page
- Clicking on a trending YouTube video must load it in the preview area
- The preview must use the official YouTube embedded player
- The preview player must include standard YouTube controls (play, pause, volume, etc.)
- The preview must maintain aspect ratio regardless of container size

### FR-4: Content Interaction
- All trending items must be clickable
- Clicking on a YouTube item must load the video in the preview area
- Clicking on items from other platforms must open a modal with additional information
- The modal must include:
  - Full title of the trending item
  - Detailed metrics (views, likes, shares, etc.)
  - Time information
  - Link to the original content
  - Brief description or excerpt when available

### FR-5: Data Refresh
- The system must automatically refresh trending data at regular intervals
- Default refresh interval must be 15 minutes
- The system must provide visual indication when data is being refreshed
- Users must be able to manually trigger a refresh
- The system must handle API failures gracefully and maintain the last successfully loaded data

### FR-6: Navigation
- The Trending Hub logo must link to the home page from any page
- Footer links must navigate to their respective pages (About, Privacy, Contact)
- Navigation must not require page reloads for filtering operations
- Browser back/forward buttons must work correctly with the application state

### FR-7: Error Handling
- The system must display appropriate error messages when API calls fail
- The system must fall back to sample data when APIs are unavailable
- Error messages must be user-friendly and suggest possible actions
- Critical errors must be logged for troubleshooting

## API Integration Requirements

### API-1: YouTube API Integration
- The system must integrate with the YouTube Data API v3
- The integration must use the provided API key: AIzaSyAJqRA9paFf5Te2sPyQ537lWujyTWPmeYw
- The system must fetch trending videos using the videos/list endpoint with chart=mostPopular parameter
- The system must support region-specific trending videos using the regionCode parameter
- The system must handle API quota limitations gracefully
- Required data points to retrieve:
  - Video ID
  - Title
  - Thumbnail URL
  - View count
  - Like count
  - Publication date
  - Channel name

### API-2: Twitter API Integration
- The system must integrate with the Twitter API v2
- The integration must use the provided credentials:
  - API Key: b5thfqqRVtzr6BWd8cxkc9gZI
  - API Key Secret: l8UU5qxx9EHMKblIuU4O9FD5GWmIvmjx3vIK05g4SueqrW6odT
  - Bearer Token: AAAAAAAAAAAAAAAAAAAAAEhg3AAAAAAAWPFlPnBRCxQB5O04oDBhY2Uuuhk%3DuDsZuaTa9pLEWkl3IUZAlWaUPEG3voN3iZL7SeY9CWd6YmTctB
- The system must use a backend proxy to handle CORS issues and API authentication
- The system must fetch trending topics using the trends/place endpoint
- The system must support region-specific trending topics using WOEID parameters
- Required data points to retrieve:
  - Trend name/hashtag
  - Tweet volume
  - URL to trend

### API-3: TikTok API Integration
- The system must integrate with a TikTok trending data source
- Due to limited official API access, the system must use a custom backend scraper
- The backend scraper must extract trending hashtags from TikTok's discover page
- The system must support region-specific trending when possible
- Required data points to retrieve:
  - Hashtag name
  - View count
  - URL to hashtag page

### API-4: Google Trends API Integration
- The system must integrate with Google Trends data
- Due to no official API, the system must use the PyTrends library via a backend service
- The backend service must fetch trending searches for specified regions
- The system must transform the data into a consistent format for display
- Required data points to retrieve:
  - Search term
  - Search volume (when available)
  - URL to search results

### API-5: Facebook Content Integration
- The system must display trending Facebook content
- Due to limited API access for trending data, the system may use sample data or alternative sources
- If alternative sources are used, they must provide similar data points to other platforms
- Required data points to include:
  - Content title/topic
  - Engagement metrics
  - Time information
  - URL to content

## Backend Service Requirements

### BS-1: Twitter API Proxy
- The system must include a Node.js Express server to proxy Twitter API requests
- The proxy must handle CORS issues by setting appropriate headers
- The proxy must forward authentication headers to the Twitter API
- The proxy must handle error responses from the Twitter API
- The proxy must be deployable to standard hosting services (Heroku, Vercel, etc.)

### BS-2: Google Trends Service
- The system must include a Python Flask server to fetch Google Trends data
- The service must use the PyTrends library to access trending searches
- The service must support region-specific trending searches
- The service must format the response to match the frontend's expected structure
- The service must be deployable to Python-friendly hosting services

### BS-3: TikTok Scraper Service
- The system must include a Python Flask server with Selenium to scrape TikTok trending data
- The scraper must navigate to TikTok's discover page and extract trending hashtags
- The scraper must handle TikTok's dynamic content loading
- The service must format the response to match the frontend's expected structure
- The service must include appropriate error handling for scraping failures

### BS-4: API Configuration
- The system must include a configuration file for all API endpoints and keys
- The configuration must support different environments (development, production)
- The configuration must include fallback options for when APIs are unavailable
- The configuration must map region codes to platform-specific region identifiers

## Data Requirements

### DR-1: Trending Data Structure
- All trending data must follow a consistent structure regardless of source platform
- Common data fields must include:
  - Unique identifier
  - Ranking position
  - Title/name
  - Metrics (views, likes, etc.)
  - Time information
  - URL to original content
- Platform-specific data fields may be included as needed

### DR-2: Sample Data
- The system must include sample data for all platforms and regions
- Sample data must follow the same structure as API-provided data
- Sample data must be used when:
  - APIs are unavailable
  - API keys are not configured
  - API rate limits are exceeded
  - Network errors occur

### DR-3: Data Transformation
- The system must transform API responses into the standardized data structure
- Transformation must handle differences in field names and data formats
- Transformation must include data validation to prevent errors
- Transformation must handle missing or null values gracefully

### DR-4: Data Storage
- User preferences (selected region, platform filter) must be stored in browser localStorage
- API responses may be cached in localStorage to reduce API calls
- Cached data must include a timestamp for freshness checking
- Cache expiration must be configurable

## Non-Functional Requirements

### NFR-1: Performance
- Initial page load must complete within 3 seconds on standard connections
- API data fetching must complete within 2 seconds
- UI interactions must respond within 100ms
- Animations must run at 60fps
- The application must function with minimal performance degradation with up to 100 trending items per platform

### NFR-2: Compatibility
- The website must function correctly on the following browsers:
  - Chrome (latest 2 versions)
  - Firefox (latest 2 versions)
  - Safari (latest 2 versions)
  - Edge (latest 2 versions)
- The website must be responsive and functional on:
  - Desktop computers (1024px and wider)
  - Tablets (768px to 1023px)
  - Mobile phones (320px to 767px)

### NFR-3: Accessibility
- The website must conform to WCAG 2.1 AA standards
- All interactive elements must be keyboard accessible
- All images must have appropriate alt text
- Color contrast must meet minimum requirements
- Text must be resizable without breaking layout

### NFR-4: Security
- API keys must not be exposed in client-side code
- Backend services must implement appropriate rate limiting
- All HTTP requests must use HTTPS
- User data must be protected according to privacy policy
- The application must not be vulnerable to common web attacks (XSS, CSRF, etc.)

### NFR-5: Scalability
- The architecture must support increasing numbers of users without significant performance degradation
- Backend services must be horizontally scalable
- Caching strategies must be implemented to reduce API calls

## Technical Specifications

### TS-1: Frontend Technologies
- HTML5 for structure
- CSS3 for styling
- JavaScript (ES6+) for client-side functionality
- No frontend frameworks required (vanilla JS)
- Font Awesome for icons
- Google Fonts for typography (Roboto)

### TS-2: Backend Technologies
- Node.js with Express for Twitter API proxy
- Python with Flask for Google Trends and TikTok services
- Selenium WebDriver for TikTok scraping

### TS-3: API Technologies
- REST APIs for all external services
- JSON for data interchange
- Fetch API for client-side HTTP requests

### TS-4: Hosting Requirements
- Static website hosting for frontend (GitHub Pages, Netlify, etc.)
- Node.js hosting for Twitter proxy (Heroku, Vercel, etc.)
- Python hosting for Google Trends and TikTok services (PythonAnywhere, Heroku, etc.)

## Implementation Details

### ID-1: File Structure
```
TrendingHub/
├── index.html
├── about.html
├── privacy.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── data.js
│   ├── api-config.js
│   ├── youtube-api.js
│   ├── twitter-api.js
│   ├── tiktok-api.js
│   └── google-api.js
└── backend/
    ├── twitter-proxy/
    │   ├── server.js
    │   └── package.json
    ├── google-trends/
    │   ├── app.py
    │   └── requirements.txt
    └── tiktok-scraper/
        ├── app.py
        └── requirements.txt
```

### ID-2: HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trending Hub</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Video Background -->
    <div class="video-background">
        <video autoplay muted loop id="globe-video">
            <source src="https://raw.githubusercontent.com/atalayd/TrendingHub/main/docs/assets/header-video.mp4" type="video/mp4">
        </video>
    </div>

    <!-- Header with Region Filters -->
    <header class="header">
        <div class="logo"><a href="index.html">Trending Hub</a></div>
        <div class="region-filters">
            <button class="filter-btn region-btn active" data-region="global">Global</button>
            <button class="filter-btn region-btn" data-region="americas">Americas</button>
            <button class="filter-btn region-btn" data-region="europe">Europe</button>
            <button class="filter-btn region-btn" data-region="asia">Asia</button>
            <button class="filter-btn region-btn" data-region="africa">Africa</button>
            <button class="filter-btn region-btn" data-region="oceania">Oceania</button>
        </div>
    </header>

    <!-- Platform Filters -->
    <div class="platform-filters">
        <button class="filter-btn platform-btn active" data-platform="all">All</button>
        <button class="filter-btn platform-btn" data-platform="youtube">YouTube</button>
        <button class="filter-btn platform-btn" data-platform="twitter">Twitter/X</button>
        <button class="filter-btn platform-btn" data-platform="facebook">Facebook</button>
        <button class="filter-btn platform-btn" data-platform="tiktok">TikTok</button>
    </div>

    <!-- Content Container -->
    <div class="content-container">
        <!-- YouTube Window -->
        <div class="youtube-window">
            <div class="platform-label">YouTube</div>
            <div class="youtube-content">
                <div class="youtube-preview">
                    <iframe id="youtube-player" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="youtube-list" id="youtube-list">
                    <!-- YouTube trending items will be populated here by JavaScript -->
                </div>
            </div>
        </div>

        <!-- Platform Windows -->
        <div class="platform-windows">
            <!-- Google Window -->
            <div class="platform-window" id="google-window">
                <div class="platform-label">Google</div>
                <div class="trending-list" id="google-list">
                    <!-- Google trending items will be populated here by JavaScript -->
                </div>
            </div>

            <!-- Twitter Window -->
            <div class="platform-window" id="twitter-window">
                <div class="platform-label">Twitter/X</div>
                <div class="trending-list" id="twitter-list">
                    <!-- Twitter trending items will be populated here by JavaScript -->
                </div>
            </div>

            <!-- Facebook Window -->
            <div class="platform-window" id="facebook-window">
                <div class="platform-label">Facebook</div>
                <div class="trending-list" id="facebook-list">
                    <!-- Facebook trending items will be populated here by JavaScript -->
                </div>
            </div>

            <!-- TikTok Window -->
            <div class="platform-window" id="tiktok-window">
                <div class="platform-label">TikTok</div>
                <div class="trending-list" id="tiktok-list">
                    <!-- TikTok trending items will be populated here by JavaScript -->
                </div>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <div class="modal" id="video-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-video">
                <iframe id="modal-iframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <div class="modal" id="content-modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body" id="modal-content">
                <!-- Content will be populated here by JavaScript -->
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="copyright">© 2025 Trending Hub. All rights reserved.</div>
        <div class="footer-links">
            <a href="about.html" class="footer-link">About</a>
            <a href="privacy.html" class="footer-link">Privacy</a>
            <a href="contact.html" class="footer-link">Contact</a>
        </div>
    </footer>

    <!-- JavaScript Files -->
    <script src="js/data.js"></script>
    <script src="js/api-config.js"></script>
    <script src="js/youtube-api.js"></script>
    <script src="js/twitter-api.js"></script>
    <script src="js/tiktok-api.js"></script>
    <script src="js/google-api.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

### ID-3: CSS Implementation
Key CSS components include:

```css
/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    color: #fff;
    background-color: #000;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

/* Video Background */
.video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

#globe-video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    position: relative;
    z-index: 10;
}

.logo {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
}

.logo a {
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
    transition: all 0.3s ease;
}

.logo a:hover {
    color: rgba(0, 255, 0, 0.8);
}

/* Filter Buttons */
.filter-btn {
    padding: 8px 15px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    border: 1px solid rgba(0, 255, 0, 0.3);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn:hover {
    background-color: rgba(0, 255, 0, 0.2);
    border-color: rgba(0, 255, 0, 0.6);
}

.filter-btn.active {
    background-color: rgba(0, 255, 0, 0.3);
    border-color: rgba(0, 255, 0, 0.8);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

/* YouTube Window */
.youtube-window {
    background-color: rgba(0, 100, 0, 0.3);
    border: 1px solid rgba(0, 255, 0, 0.3);
    border-radius: 15px;
    padding: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
    width: 50%;
    margin-left: 20px;
}

/* Platform Windows */
.platform-window {
    background-color: rgba(0, 100, 0, 0.3);
    border: 1px solid rgba(0, 255, 0, 0.3);
    border-radius: 15px;
    padding: 15px;
    height: 300px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
    width: 30%;
    margin: 0 auto;
}

/* Trending Items */
.trending-item {
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 255, 0, 0.2);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
}

.trending-item:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(0, 255, 0, 0.5);
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
}
```

### ID-4: JavaScript Implementation

#### Main.js
```javascript
// Main JavaScript file for Trending Hub

// Global variables
let currentRegion = 'global';
let currentPlatform = 'all';
let youtubePlayer;

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize YouTube player
    initYouTubePlayer();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load initial data
    loadAllPlatformData(currentRegion);
});

// Initialize YouTube player
function initYouTubePlayer() {
    // Create empty player initially
    youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = '';
}

// Set up event listeners for buttons and interactive elements
function setupEventListeners() {
    // Region filter buttons
    const regionButtons = document.querySelectorAll('.region-btn');
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            regionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current region
            currentRegion = this.dataset.region;
            
            // Reload data for all platforms with new region
            loadAllPlatformData(currentRegion);
        });
    });
    
    // Platform filter buttons
    const platformButtons = document.querySelectorAll('.platform-btn');
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            platformButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current platform
            currentPlatform = this.dataset.platform;
            
            // Show/hide platform windows based on selection
            togglePlatformVisibility(currentPlatform);
        });
    });
    
    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Close the parent modal
            this.closest('.modal').style.display = 'none';
            
            // Stop video if in video modal
            if (this.closest('#video-modal')) {
                document.getElementById('modal-iframe').src = '';
            }
        });
    });
}

// Load data for all platforms
async function loadAllPlatformData(region) {
    try {
        // Show loading state
        showLoadingState();
        
        // Load data for each platform
        const youtubePromise = YouTubeAPI.fetchTrending(region);
        const twitterPromise = TwitterAPI.fetchTrending(region);
        const tiktokPromise = TikTokAPI.fetchTrending(region);
        const googlePromise = GoogleAPI.fetchTrending(region);
        
        // Wait for all data to load
        const [youtubeData, twitterData, tiktokData, googleData] = await Promise.all([
            youtubePromise,
            twitterPromise,
            tiktokPromise,
            googlePromise
        ]);
        
        // Populate platform windows with data
        populateYouTubeWindow(youtubeData);
        populateTwitterWindow(twitterData);
        populateTikTokWindow(tiktokData);
        populateGoogleWindow(googleData);
        
        // Use sample data for Facebook (no API available)
        populateFacebookWindow(trendingData[region].facebook);
        
        // Hide loading state
        hideLoadingState();
        
        // Apply current platform filter
        togglePlatformVisibility(currentPlatform);
    } catch (error) {
        console.error('Error loading platform data:', error);
        // Fall back to sample data
        loadSampleData(region);
        hideLoadingState();
    }
}

// Show loading state
function showLoadingState() {
    // Add loading class to platform windows
    document.querySelectorAll('.platform-window, .youtube-window').forEach(window => {
        window.classList.add('loading');
    });
}

// Hide loading state
function hideLoadingState() {
    // Remove loading class from platform windows
    document.querySelectorAll('.platform-window, .youtube-window').forEach(window => {
        window.classList.remove('loading');
    });
}

// Toggle platform visibility based on filter
function togglePlatformVisibility(platform) {
    const youtubeWindow = document.querySelector('.youtube-window');
    const platformWindows = document.querySelectorAll('.platform-window');
    
    if (platform === 'all') {
        // Show all platforms
        youtubeWindow.style.display = 'block';
        platformWindows.forEach(window => {
            window.style.display = 'block';
        });
    } else {
        // Show only selected platform
        youtubeWindow.style.display = platform === 'youtube' ? 'block' : 'none';
        
        platformWindows.forEach(window => {
            const windowId = window.id;
            const platformName = windowId.split('-')[0];
            window.style.display = platformName === platform ? 'block' : 'none';
        });
    }
}

// Populate YouTube window with data
function populateYouTubeWindow(data) {
    const youtubeList = document.getElementById('youtube-list');
    youtubeList.innerHTML = '';
    
    data.forEach(video => {
        const item = createYouTubeItem(video);
        youtubeList.appendChild(item);
    });
    
    // Load first video in preview if available
    if (data.length > 0) {
        loadYouTubeVideo(data[0].id);
    }
}

// Create YouTube item element
function createYouTubeItem(video) {
    const item = document.createElement('div');
    item.className = 'trending-item youtube-item';
    item.dataset.videoId = video.id;
    
    item.innerHTML = `
        <div class="number">${video.id}</div>
        <div class="thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="content">
            <div class="title">${video.title}</div>
            <div class="meta">
                <div class="views"><i class="fas fa-eye"></i> ${video.views}</div>
                <div class="time">${video.time}</div>
            </div>
        </div>
    `;
    
    // Add click event to load video
    item.addEventListener('click', function() {
        loadYouTubeVideo(video.id);
    });
    
    return item;
}

// Load YouTube video in preview
function loadYouTubeVideo(videoId) {
    const player = document.getElementById('youtube-player');
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    
    // Highlight selected video
    document.querySelectorAll('.youtube-item').forEach(item => {
        if (item.dataset.videoId === videoId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Similar functions for other platforms...
```

#### API Config
```javascript
const apiConfig = {
    // YouTube API Configuration
    youtube: {
        apiKey: 'AIzaSyAJqRA9paFf5Te2sPyQ537lWujyTWPmeYw',
        maxResults: 10,
        regionCode: 'US', // Default region code
        // Region mapping for our application regions
        regionMapping: {
            global: 'US', // Default to US for global
            americas: 'US',
            europe: 'GB',
            asia: 'IN',
            africa: 'ZA',
            oceania: 'AU'
        }
    },
    
    // Twitter API Configuration
    twitter: {
        apiKey: 'b5thfqqRVtzr6BWd8cxkc9gZI',
        apiKeySecret: 'l8UU5qxx9EHMKblIuU4O9FD5GWmIvmjx3vIK05g4SueqrW6odT',
        bearerToken: 'AAAAAAAAAAAAAAAAAAAAAEhg3AAAAAAAWPFlPnBRCxQB5O04oDBhY2Uuuhk%3DuDsZuaTa9pLEWkl3IUZAlWaUPEG3voN3iZL7SeY9CWd6YmTctB',
        // Proxy URL for Twitter API requests (to avoid CORS issues)
        proxyUrl: 'https://your-proxy-server.com/twitter-api',
        // Region mapping for our application regions
        regionMapping: {
            global: 1, // WOEID for Worldwide
            americas: 23424977, // WOEID for United States
            europe: 23424975, // WOEID for United Kingdom
            asia: 23424848, // WOEID for India
            africa: 23424942, // WOEID for South Africa
            oceania: 23424748 // WOEID for Australia
        }
    },
    
    // TikTok API Configuration (unofficial)
    tiktok: {
        // Proxy URL for TikTok API requests
        proxyUrl: 'https://your-proxy-server.com/tiktok-api',
        // Region mapping for our application regions
        regionMapping: {
            global: 'global',
            americas: 'us',
            europe: 'uk',
            asia: 'in',
            africa: 'za',
            oceania: 'au'
        }
    },
    
    // Google Trends API Configuration (unofficial)
    google: {
        // Proxy URL for Google Trends API requests
        proxyUrl: 'https://your-proxy-server.com/google-trends-api',
        // Region mapping for our application regions
        regionMapping: {
            global: 'GLOBAL',
            americas: 'US',
            europe: 'GB',
            asia: 'IN',
            africa: 'ZA',
            oceania: 'AU'
        }
    }
};
```

### ID-5: Backend Implementation

#### Twitter Proxy (Node.js)
```javascript
// Twitter API Proxy Server
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/twitter-api', async (req, res) => {
  try {
    const woeid = req.query.woeid || 1;
    const response = await axios.get(
      `https://api.twitter.com/1.1/trends/place.json?id=${woeid}`,
      {
        headers: {
          'Authorization': `Bearer ${req.headers.authorization.split(' ')[1]}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Twitter API Proxy Server running on port ${PORT}`);
});
```

#### Google Trends Service (Python)
```python
# Google Trends API Service
from flask import Flask, jsonify, request
from flask_cors import CORS
from pytrends.request import TrendReq
import time

app = Flask(__name__)
CORS(app)

@app.route('/google-trends-api', methods=['GET'])
def get_trending_searches():
    try:
        # Get region from query parameters
        geo = request.args.get('geo', 'GLOBAL')
        
        # Initialize PyTrends
        pytrends = TrendReq(hl='en-US', tz=360)
        
        # Get trending searches for the specified region
        trending_searches = pytrends.trending_searches(pn=geo)
        
        # Format the response
        result = {
            'default': {
                'trendingSearchesDays': [
                    {
                        'date': time.strftime('%Y%m%d'),
                        'trendingSearches': [
                            {
                                'title': {'query': query},
                                'formattedTraffic': '100K'
                            } for query in trending_searches[0].tolist()[:10]
                        ]
                    }
                ]
            }
        }
        
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

#### TikTok Scraper Service (Python)
```python
# TikTok Trending Hashtags Scraper
from flask import Flask, jsonify, request
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json
import re

app = Flask(__name__)
CORS(app)

@app.route('/tiktok-api', methods=['GET'])
def get_trending_hashtags():
    try:
        # Get region from query parameters
        region = request.args.get('region', 'global')
        
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        
        # Initialize the driver
        driver = webdriver.Chrome(options=chrome_options)
        
        # Navigate to TikTok Discover page
        driver.get("https://www.tiktok.com/discover")
        
        # Wait for the page to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "[data-e2e='discover-item']"))
        )
        
        # Extract hashtags
        hashtag_elements = driver.find_elements(By.CSS_SELECTOR, "[data-e2e='discover-item']")
        
        hashtags = []
        for element in hashtag_elements:
            try:
                name = element.find_element(By.CSS_SELECTOR, "strong").text.replace('#', '')
                views_text = element.find_element(By.CSS_SELECTOR, "small").text
                views = int(re.sub(r'[^0-9]', '', views_text))
                
                hashtags.append({
                    "name": name,
                    "views": views
                })
            except Exception as e:
                print(f"Error extracting hashtag: {e}")
        
        # Close the driver
        driver.quit()
        
        return jsonify({"hashtags": hashtags})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
```

## Testing Requirements

### TR-1: Unit Testing
- Each JavaScript module must have unit tests
- API integration functions must be tested with mock responses
- Data transformation functions must be tested with sample data
- UI interaction functions must be tested for correct behavior

### TR-2: Integration Testing
- API integrations must be tested with actual API endpoints
- Backend services must be tested with the frontend
- Cross-platform compatibility must be verified

### TR-3: User Interface Testing
- All UI elements must be tested for proper rendering
- Responsive design must be tested on various screen sizes
- Animations and transitions must be tested for smoothness

### TR-4: Performance Testing
- Page load time must be measured and optimized
- API response times must be monitored
- Memory usage must be checked for leaks

### TR-5: Accessibility Testing
- WCAG 2.1 AA compliance must be verified
- Screen reader compatibility must be tested
- Keyboard navigation must be tested

## Deployment Requirements

### DR-1: Frontend Deployment
- The frontend must be deployable to GitHub Pages or similar static hosting
- All assets must be properly referenced with relative or absolute paths
- CSS and JavaScript files must be minified for production

### DR-2: Backend Deployment
- Twitter API proxy must be deployable to Heroku, Vercel, or similar Node.js hosting
- Google Trends service must be deployable to PythonAnywhere, Heroku, or similar Python hosting
- TikTok scraper service must be deployable to a server with Selenium support

### DR-3: Configuration Management
- API endpoints must be configurable for different environments
- API keys must be stored securely as environment variables
- Sample data must be included for development and testing

### DR-4: Monitoring and Maintenance
- Error logging must be implemented for backend services
- API status monitoring must be implemented
- Regular updates must be planned for API changes

## Appendices

### Appendix A: Mockup Images

![Trending Hub Mockup](trending_hub_mockup.png)

### Appendix B: API Response Examples

#### YouTube API Response Example
```json
{
  "kind": "youtube#videoListResponse",
  "etag": "...",
  "items": [
    {
      "kind": "youtube#video",
      "etag": "...",
      "id": "VIDEO_ID",
      "snippet": {
        "publishedAt": "2023-01-01T00:00:00Z",
        "channelId": "CHANNEL_ID",
        "title": "Video Title",
        "description": "Video Description",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VIDEO_ID/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VIDEO_ID/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Channel Title",
        "categoryId": "22",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Video Title",
          "description": "Video Description"
        }
      },
      "statistics": {
        "viewCount": "1000000",
        "likeCount": "50000",
        "favoriteCount": "0",
        "commentCount": "5000"
      }
    }
  ],
  "nextPageToken": "...",
  "pageInfo": {
    "totalResults": 200,
    "resultsPerPage": 5
  }
}
```

#### Twitter API Response Example
```json
[
  {
    "trends": [
      {
        "name": "#Trending1",
        "url": "http://twitter.com/search?q=%23Trending1",
        "promoted_content": null,
        "query": "%23Trending1",
        "tweet_volume": 100000
      },
      {
        "name": "#Trending2",
        "url": "http://twitter.com/search?q=%23Trending2",
        "promoted_content": null,
        "query": "%23Trending2",
        "tweet_volume": 90000
      }
    ],
    "as_of": "2023-01-01T00:00:00Z",
    "created_at": "2023-01-01T00:00:00Z",
    "locations": [
      {
        "name": "Worldwide",
        "woeid": 1
      }
    ]
  }
]
```

### Appendix C: Sample Data Structure
```javascript
const trendingData = {
  global: {
    youtube: [
      {
        id: 1,
        title: "Sample YouTube Video 1",
        thumbnail: "https://via.placeholder.com/120x68",
        views: "1.2M",
        time: "2 days ago",
        videoId: "dQw4w9WgXcQ"
      },
      // More items...
    ],
    twitter: [
      {
        id: 1,
        title: "#SampleTrend1",
        tweets: "500K",
        time: "Trending now",
        url: "https://twitter.com/search?q=%23SampleTrend1"
      },
      // More items...
    ],
    // Other platforms...
  },
  // Other regions...
};
```

### Appendix D: Browser Compatibility Matrix

| Feature | Chrome 90+ | Firefox 88+ | Safari 14+ | Edge 90+ |
|---------|------------|-------------|------------|----------|
| CSS Backdrop Filter | Yes | Yes | Yes | Yes |
| CSS Grid | Yes | Yes | Yes | Yes |
| Fetch API | Yes | Yes | Yes | Yes |
| ES6 Features | Yes | Yes | Yes | Yes |
| Video Playback | Yes | Yes | Yes | Yes |
| localStorage | Yes | Yes | Yes | Yes |

### Appendix E: Glossary

- **API**: Application Programming Interface
- **CORS**: Cross-Origin Resource Sharing
- **CSS**: Cascading Style Sheets
- **HTML**: HyperText Markup Language
- **JSON**: JavaScript Object Notation
- **REST**: Representational State Transfer
- **UI**: User Interface
- **UX**: User Experience
- **WCAG**: Web Content Accessibility Guidelines
- **WOEID**: Where On Earth IDentifier (used by Twitter for location identification)
