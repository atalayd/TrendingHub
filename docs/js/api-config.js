/**
 * Trending Hub - API Configuration
 * 
 * This file contains configuration settings for all API integrations.
 * Replace the placeholder API keys with your actual keys from each service.
 */

const API_CONFIG = {
    // YouTube Data API
    // Get your API key from: https://console.cloud.google.com/apis/dashboard
    youtube: {
        apiKey: 'AIzaSyAJqRA9paFf5Te2sPyQ537lWujyTWPmeYw', // Replace with your actual YouTube API key
        maxResults: 5,                  // Number of trending videos to fetch
        regionCode: 'US'                // Default region code
    },
    
    // Twitter/X API
    // Get your API keys from: https://developer.twitter.com/en/portal/dashboard
    twitter: {
        apiKey: 'YOUR_TWITTER_API_KEY',             // Replace with your Twitter API key
        apiKeySecret: 'YOUR_TWITTER_API_SECRET',    // Replace with your Twitter API secret
        bearerToken: 'YOUR_TWITTER_BEARER_TOKEN',   // Replace with your Twitter bearer token
        maxResults: 5                               // Number of trending topics to fetch
    },
    
    // TikTok API (using unofficial API)
    // No API key required for the unofficial API
    tiktok: {
        useUnofficial: true,    // Set to false if using official TikTok API
        maxResults: 5           // Number of trending hashtags to fetch
    },
    
    // Google Trends (using unofficial pytrends library)
    // No API key required for the unofficial library
    googleTrends: {
        useUnofficial: true,    // Always true as there's no official API
        maxResults: 5           // Number of trending searches to fetch
    },
    
    // Region mappings for API requests
    regions: {
        global: {
            youtube: 'US',      // YouTube doesn't have a global option, using US as default
            twitter: 1,         // Twitter WOEID for Worldwide
            tiktok: 'global',
            googleTrends: 'GLOBAL'
        },
        americas: {
            youtube: 'US',      // Using US for Americas
            twitter: 23424977,  // Twitter WOEID for United States
            tiktok: 'US',
            googleTrends: 'US'
        },
        europe: {
            youtube: 'GB',      // Using UK for Europe
            twitter: 23424975,  // Twitter WOEID for United Kingdom
            tiktok: 'GB',
            googleTrends: 'GB'
        },
        asia: {
            youtube: 'JP',      // Using Japan for Asia
            twitter: 23424856,  // Twitter WOEID for Japan
            tiktok: 'JP',
            googleTrends: 'JP'
        },
        africa: {
            youtube: 'ZA',      // Using South Africa for Africa
            twitter: 23424942,  // Twitter WOEID for South Africa
            tiktok: 'ZA',
            googleTrends: 'ZA'
        },
        oceania: {
            youtube: 'AU',      // Using Australia for Oceania
            twitter: 23424748,  // Twitter WOEID for Australia
            tiktok: 'AU',
            googleTrends: 'AU'
        }
    }
};
