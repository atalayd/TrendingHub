# Trending Hub - User Documentation

## Overview
Trending Hub is a modern, interactive website that displays trending content from various social media platforms (YouTube, Twitter/X, Facebook, TikTok, and Google) with a spinning globe visualization as its background. This documentation provides instructions on how to use, modify, and customize the website.

## Website Features

### Spinning Globe Background
The website features a full-screen spinning globe video as its background, which remains visible behind all content windows. This creates an immersive, global experience for users exploring trending content.

### Region Filtering
Users can filter content by geographic region using the buttons at the top of the page:
- **Global**: Worldwide trending content
- **Americas**: Trending in North and South America
- **Europe**: Trending in European countries
- **Asia**: Trending in Asian countries
- **Africa**: Trending in African countries
- **Oceania**: Trending in Australia and Pacific islands

### Platform Filtering
Users can filter content by platform using the buttons below the header:
- **All**: Show content from all platforms
- **YouTube**: Show only YouTube trending videos
- **Twitter/X**: Show only Twitter trending topics
- **Facebook**: Show only Facebook trending content
- **TikTok**: Show only TikTok trending content

### Content Windows
The website displays content in transparent windows:
- **YouTube Window**: Larger window at the top with video preview capability
- **Platform Windows**: Four equal-sized windows below for Google, Twitter/X, Facebook, and TikTok

### Interactive Features
- **Hover Effects**: Content items enlarge on hover for better viewing
- **YouTube Preview**: Clicking on YouTube items plays the video in the preview area
- **Popup Content**: Clicking on platform items opens content in popup windows
- **Country Cards**: Small video cards positioned on major regions of the globe that open videos when clicked

## Local Installation and Modification

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic knowledge of HTML, CSS, and JavaScript for modifications

### Installation
1. Download and extract the Trending Hub zip file to your local machine
2. Ensure all files maintain their relative folder structure:
   ```
   trending_hub/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── main.js
   │   └── data.js
   ├── assets/
   │   └── header-video.mp4
   ├── images/
   ├── fonts/
   └── vendor/
   ```
3. Open the `index.html` file in a web browser to view the website locally

### Modifying Content

#### Changing the Video Background
To replace the spinning globe video:
1. Place your new video file in the `assets` folder
2. Open `index.html` and locate the video element (around line 20)
3. Update the source URL to point to your new video file:
   ```html
   <video autoplay muted loop id="globe-video">
       <source src="assets/your-new-video.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>
   ```

#### Updating Trending Content
To modify the sample trending data:
1. Open `js/data.js`
2. Locate the `trendingData` object which contains all content organized by region and platform
3. Update the items in each section with your own content
4. For YouTube videos, make sure to update both the `videoId` and `thumbnail` properties

Example of updating a YouTube item:
```javascript
{
    id: 1,
    title: "Your New Video Title",
    views: "1.2M",
    likes: "100K",
    time: "1 day ago",
    videoId: "abcdef12345", // YouTube video ID
    thumbnail: "https://i.ytimg.com/vi/abcdef12345/hqdefault.jpg"
}
```

#### Customizing the Appearance
To modify the visual style:
1. Open `css/styles.css`
2. Key sections are clearly commented for easy navigation:
   - `/* ===== GLOBAL STYLES ===== */` for overall appearance
   - `/* ===== VIDEO BACKGROUND ===== */` for background video settings
   - `/* ===== CONTENT CONTAINER ===== */` for content layout
   - `/* ===== PLATFORM WINDOWS ===== */` for individual platform windows
   - `/* ===== TRENDING ITEMS ===== */` for content items styling

Example of changing the platform window color:
```css
.platform-window {
    background-color: rgba(0, 100, 0, 0.3); /* Change this to adjust transparency and color */
    border: 1px solid rgba(0, 255, 0, 0.3); /* Change this to adjust border color */
    /* Other properties... */
}
```

### Adding Real API Integration

The current implementation uses sample data. To integrate with real APIs:

1. Create API service files in the `js` folder (e.g., `youtube-api.js`, `twitter-api.js`)
2. Implement functions to fetch data from each platform's API
3. Modify `main.js` to call these API functions instead of using the sample data

Example structure for an API service file:
```javascript
// youtube-api.js
async function fetchYouTubeTrending(region = 'global', maxResults = 5) {
    // API implementation here
    // Return data in the same format as in data.js
}

// Export the function
window.YouTubeAPI = {
    fetchTrending: fetchYouTubeTrending
};
```

Then update `main.js` to use this API:
```javascript
// Replace sample data loading with API call
async function loadContent(region, platform) {
    // Clear existing content
    clearContent();
    
    if (platform === 'all' || platform === 'youtube') {
        const youtubeData = await window.YouTubeAPI.fetchTrending(region);
        loadYouTubeContent(youtubeData);
    }
    
    // Similar for other platforms...
}
```

## Troubleshooting

### Video Not Playing
- Ensure the video file exists in the correct location
- Check that your browser supports the video format
- Try converting the video to a different format (MP4 is widely supported)

### Content Not Displaying
- Check the browser console for JavaScript errors
- Verify that the data structure in `data.js` matches what the code expects
- Ensure all files are properly linked in the HTML

### Styling Issues
- Use browser developer tools to inspect elements and debug CSS
- Check for CSS conflicts or specificity issues
- Verify that all CSS files are properly linked

### API Integration Problems
- Check for CORS issues when making API requests
- Verify API keys and authentication
- Implement proper error handling for API failures

## Browser Compatibility
The website is designed to work on modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, you may need to add polyfills or fallbacks for certain features.

## Performance Optimization
If you experience performance issues:
- Compress and optimize the background video
- Implement lazy loading for content
- Consider reducing animations on lower-powered devices
- Use a CDN for serving static assets in production
