# Trending Hub

![Trending Hub Screenshot](https://i.imgur.com/placeholder-image.jpg)

## Overview

Trending Hub is a modern, interactive website that aggregates trending content from various social media platforms (YouTube, Twitter/X, Facebook, TikTok, and Google) with a spinning globe visualization as its background. The website allows users to filter content by geographic region and platform through an intuitive interface with transparent UI elements.

## Features

- **Spinning Globe Background**: Full-screen spinning globe video that remains visible behind all content
- **Multi-Platform Integration**: Displays trending content from YouTube, Twitter/X, Facebook, TikTok, and Google
- **Region-Based Filtering**: Filter content by Global, Americas, Europe, Asia, Africa, and Oceania regions
- **Platform-Based Filtering**: Filter content by specific platforms or view all simultaneously
- **Interactive Video Cards**: Hover effects and clickable content with preview functionality
- **Country-Specific Content**: Small video cards positioned on major regions of the globe
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern aesthetic with transparent UI elements

## Demo

A live demo of the Trending Hub is available at: [Demo Link](http://placeholder-demo-link.com)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/trending-hub.git
   ```

2. Navigate to the project directory:

   ```
   cd trending-hub
   ```

3. Open `index.html` in your web browser to view the website locally.

## Project Structure

```
trending_hub/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── main.js             # Core functionality
│   └── data.js             # Sample trending data
├── assets/
│   └── header-video.mp4    # Spinning globe background video
├── images/                 # For additional images
├── fonts/                  # For custom fonts
└── vendor/                 # For third-party libraries
```

## Usage

### Region Filtering

Click on any region button (Global, Americas, Europe, Asia, Africa, Oceania) to filter content by geographic region.

### Platform Filtering

Click on any platform button (All, YouTube, Twitter/X, Facebook, TikTok) to filter content by platform.

### Content Interaction

- **YouTube Videos**: Click on a YouTube trending item to play the video in the preview area
- **Platform Content**: Click on trending items from other platforms to open content in popup windows
- **Country Cards**: Click on video cards positioned on the globe to view region-specific content

## Customization

### Changing the Video Background

1. Replace the video file in the `assets` folder
2. Update the source URL in `index.html`:
   ```html
   <video autoplay muted loop id="globe-video">
     <source src="assets/your-new-video.mp4" type="video/mp4" />
   </video>
   ```

### Updating Trending Content

Modify the sample trending data in `js/data.js` to update content for each platform and region.

### Customizing the Appearance

Edit `css/styles.css` to modify the visual style of the website. Key sections are clearly commented for easy navigation.

## API Integration

The current implementation uses sample data. To integrate with real APIs:

1. Create API service files in the `js` folder (e.g., `youtube-api.js`, `twitter-api.js`)
2. Implement functions to fetch data from each platform's API
3. Modify `main.js` to call these API functions instead of using the sample data

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [YouTube Embed API](https://developers.google.com/youtube/iframe_api_reference) for video embedding
- [GitHub](https://github.com/atalayd/TrendingHub) for hosting the website

## Contact

Atalay Durdu - [@LinkedIn](https://www.linkedin.com/in/atalay-durdu/) - atalaydurdu@gmail.com

Project Link: [TrendingHub](https://github.com/atalayd/TrendingHub)
