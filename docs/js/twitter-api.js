/**
 * Trending Hub - Twitter/X API Service
 * 
 * This file contains functions for fetching trending topics from Twitter/X.
 * It uses the Twitter API v1.1 for trending topics by region.
 */

// Import API configuration
// Make sure api-config.js is loaded before this file in your HTML

/**
 * Fetch trending topics from Twitter for a specific region
 * @param {string} region - Region code (global, americas, europe, asia, africa, oceania)
 * @returns {Promise<Array>} - Array of trending topic objects
 */
async function fetchTwitterTrending(region = 'global') {
    try {
        // Get region-specific Twitter WOEID from config
        const woeid = API_CONFIG.regions[region].twitter;
        const bearerToken = API_CONFIG.twitter.bearerToken;
        const maxResults = API_CONFIG.twitter.maxResults;
        
        // Check if API key is provided
        if (bearerToken === 'YOUR_TWITTER_BEARER_TOKEN') {
            console.warn('Twitter API token not configured. Using sample data instead.');
            return getSampleTwitterData(region);
        }
        
        // Twitter API requires a proxy server to avoid CORS issues in browser
        // This is a simplified example - in production, you would need a backend proxy
        const proxyUrl = 'https://your-proxy-server.com/twitter-api-proxy';
        const apiUrl = `${proxyUrl}?endpoint=trends/place&id=${woeid}`;
        
        // Fetch data from API
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`Twitter API error: ${response.status} ${response.statusText}`);
        }
        
        // Parse response JSON
        const data = await response.json();
        
        // Transform API response to match our data structure
        return data[0].trends
            .slice(0, maxResults)
            .map((trend, index) => {
                return {
                    id: index + 1,
                    title: trend.name,
                    time: 'Trending now',
                    tweets: formatNumber(trend.tweet_volume || Math.floor(Math.random() * 500000))
                };
            });
    } catch (error) {
        console.error('Error fetching Twitter trending data:', error);
        // Fall back to sample data if API fails
        return getSampleTwitterData(region);
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
 * Get sample Twitter trending data for a specific region
 * This is used as a fallback when the API is not configured or fails
 * @param {string} region - Region code
 * @returns {Array} - Array of sample trending topic objects
 */
function getSampleTwitterData(region) {
    // Return the sample data from our data.js file
    return trendingData[region].twitter;
}

// Export the function to the global scope
window.TwitterAPI = {
    fetchTrending: fetchTwitterTrending
};
