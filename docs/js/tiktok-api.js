/**
 * Trending Hub - TikTok API Service
 * 
 * This file contains functions for fetching trending hashtags from TikTok.
 * It uses an unofficial approach since TikTok doesn't provide a public API for trending data.
 */

// Import API configuration
// Make sure api-config.js is loaded before this file in your HTML

/**
 * Fetch trending hashtags from TikTok for a specific region
 * @param {string} region - Region code (global, americas, europe, asia, africa, oceania)
 * @returns {Promise<Array>} - Array of trending hashtag objects
 */
async function fetchTikTokTrending(region = 'global') {
    try {
        // Get region-specific TikTok code from config
        const regionCode = API_CONFIG.regions[region].tiktok;
        const maxResults = API_CONFIG.tiktok.maxResults;
        
        // Since TikTok doesn't have an official API for trending hashtags,
        // we would typically use a third-party service or unofficial API
        
        // For a production implementation, you could use:
        // 1. A proxy server that scrapes TikTok trending data
        // 2. A third-party API service like Apify's TikTok Trending Hashtags Scraper
        // 3. The unofficial TikTok-Api library with a Node.js backend
        
        // This is a simplified example - in production, you would need a backend service
        const proxyUrl = 'https://your-proxy-server.com/tiktok-trending-proxy';
        const apiUrl = `${proxyUrl}?region=${regionCode}`;
        
        // Check if we're using the unofficial approach
        if (!API_CONFIG.tiktok.useUnofficial) {
            console.warn('TikTok API not configured. Using sample data instead.');
            return getSampleTikTokData(region);
        }
        
        // In a real implementation, you would fetch data from your proxy server
        // For now, we'll use sample data since we can't directly access TikTok trending data
        console.warn('Using sample TikTok data. In production, implement a proxy server or use a third-party API service.');
        return getSampleTikTokData(region);
        
        /* Commented out as this would require a backend proxy
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`TikTok API error: ${response.status} ${response.statusText}`);
        }
        
        // Parse response JSON
        const data = await response.json();
        
        // Transform API response to match our data structure
        return data.hashtags
            .slice(0, maxResults)
            .map((hashtag, index) => {
                return {
                    id: index + 1,
                    title: hashtag.name,
                    time: 'Trending now',
                    views: formatNumber(hashtag.viewCount)
                };
            });
        */
    } catch (error) {
        console.error('Error fetching TikTok trending data:', error);
        // Fall back to sample data if API fails
        return getSampleTikTokData(region);
    }
}

/**
 * Format a number with K, M, B suffixes
 * @param {number|string} num - Number to format
 * @returns {string} - Formatted number string
 */
function formatNumber(num) {
    num = parseInt(num, 10);
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

/**
 * Get sample TikTok trending data for a specific region
 * This is used as a fallback when the API is not configured or fails
 * @param {string} region - Region code
 * @returns {Array} - Array of sample trending hashtag objects
 */
function getSampleTikTokData(region) {
    // Return the sample data from our data.js file
    return trendingData[region].tiktok;
}

// Export the function to the global scope
window.TikTokAPI = {
    fetchTrending: fetchTikTokTrending
};
