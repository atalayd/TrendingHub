/**
 * Trending Hub - YouTube API Service (via Firebase)
 *
 * This version fetches trending videos using a secure Firebase Cloud Function,
 * removing direct exposure of the YouTube API key from the frontend.
 */

// Firebase Cloud Function URL
const YOUTUBE_FUNCTION_URL = "https://getyoutubetrending-xz5ij6nbea-uc.a.run.app";

/**
 * Fetch trending videos from YouTube for a specific region via Firebase Function
 * @param {string} region - Region code (global, americas, europe, asia, africa, oceania)
 * @returns {Promise<Array>} - Array of trending video objects
 */
async function fetchYouTubeTrending(region = "global") {
    try {
        // Get region-specific YouTube code from config
        const regionCode = API_CONFIG.regions[region].youtube;
        const maxResults = API_CONFIG.youtube.maxResults;

        // Construct Firebase function URL
        const apiUrl = `${YOUTUBE_FUNCTION_URL}?regionCode=${regionCode}&maxResults=${maxResults}`;

        // Fetch data from Firebase Function
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok || !data.items) {
            throw new Error(data.error || "No trending data received.");
        }

        // Transform API response to match our data structure
        return data.items.map((item, index) => {
            return {
                id: index + 1,
                title: item.snippet.title,
                views: formatNumber(item.statistics.viewCount),
                likes: formatNumber(item.statistics.likeCount),
                time: formatTimeAgo(item.snippet.publishedAt),
                videoId: item.id,
                thumbnail: item.snippet.thumbnails.high.url,
            };
        });
    } catch (error) {
        console.error("Error fetching YouTube trending data:", error);
        // Fall back to sample data if API fails
        return getSampleYouTubeData(region);
    }
}

/**
 * Format a number with K, M, B suffixes
 * @param {number|string} num - Number to format
 * @returns {string} - Formatted number string
 */
function formatNumber(num) {
    num = parseInt(num, 10);
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
}

/**
 * Format a date string to a relative time ago string
 * @param {string} dateString - ISO date string
 * @returns {string} - Relative time string (e.g., "2 days ago")
 */
function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffDays > 30) {
        const diffMonths = Math.floor(diffDays / 30);
        return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    }
    if (diffDays > 0) {
        return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }
    if (diffHours > 0) {
        return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    }
    if (diffMinutes > 0) {
        return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    }
    return "Just now";
}

/**
 * Get sample YouTube trending data for a specific region
 * This is used as a fallback when the API is not configured or fails
 * @param {string} region - Region code
 * @returns {Array} - Array of sample trending video objects
 */
function getSampleYouTubeData(region) {
    return trendingData[region].youtube;
}

// Export to global scope
window.YouTubeAPI = {
    fetchTrending: fetchYouTubeTrending
};
