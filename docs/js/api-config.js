/**
 * Trending Hub - API Configuration
 * 
 * This file defines centralized configuration settings for all supported APIs.
 * 🔒 NOTE: YouTube API key is now secured in Firebase Functions. No need to keep it exposed here.
 */

const API_CONFIG = {
    // YouTube Data API (Backend Only)
    // 🔐 The API key is stored securely in Firebase Functions.
    // Frontend will call Firebase Cloud Function instead.
    youtube: {
        maxResults: 5,                  // Number of trending videos to fetch (passed to Firebase)
        regionCode: 'US'                // Default fallback region code
    },

    // Twitter/X API
    // 🛠 These will be used later in Firebase when we secure Twitter calls too.
    twitter: {
        apiKey: 'YOUR_TWITTER_API_KEY',             // Replace with your Twitter API key (used only in backend)
        apiKeySecret: 'YOUR_TWITTER_API_SECRET',    // Replace with your Twitter API secret
        bearerToken: 'YOUR_TWITTER_BEARER_TOKEN',   // Replace with your Twitter bearer token
        maxResults: 5                               // Number of trending topics to fetch
    },

    // TikTok API (Unofficial)
    tiktok: {
        useUnofficial: true,    // If true, uses unofficial open APIs
        maxResults: 5           // Number of trending hashtags to fetch
    },

    // Google Trends API (Unofficial)
    googleTrends: {
        useUnofficial: true,    // Uses pytrends (no official Google Trends API exists)
        maxResults: 5           // Number of trending search terms to fetch
    },

    // 🌍 Regional Mapping for APIs
    // Maps internal region names to platform-specific region codes
    regions: {
        global: {
            youtube: 'US',      // YouTube doesn't support 'global', fallback to US
            twitter: 1,         // Twitter WOEID for Worldwide
            tiktok: 'global',
            googleTrends: 'GLOBAL'
        },
        americas: {
            youtube: 'US',
            twitter: 23424977,  // WOEID for United States
            tiktok: 'US',
            googleTrends: 'US'
        },
        europe: {
            youtube: 'GB',
            twitter: 23424975,  // United Kingdom
            tiktok: 'GB',
            googleTrends: 'GB'
        },
        asia: {
            youtube: 'JP',
            twitter: 23424856,  // Japan
            tiktok: 'JP',
            googleTrends: 'JP'
        },
        africa: {
            youtube: 'ZA',
            twitter: 23424942,  // South Africa
            tiktok: 'ZA',
            googleTrends: 'ZA'
        },
        oceania: {
            youtube: 'AU',
            twitter: 23424748,  // Australia
            tiktok: 'AU',
            googleTrends: 'AU'
        }
    }
};
