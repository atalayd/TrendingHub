const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({origin: ["https://atalayd.github.io"]});

// Simple in-memory cache (30 min per region)
const cache = {};

exports.getYouTubeTrending = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const regionCode = req.query.regionCode || "US";
    const maxResults = req.query.maxResults || 10;
    const cacheKey = `${regionCode}_${maxResults}`;
    const now = Date.now();

    // Check if recent cached response exists
    if (cache[cacheKey] && now - cache[cacheKey].timestamp < 30 * 60 * 1000) {
      return res.json(cache[cacheKey].data);
    }

    const apiKey = process.env.YOUTUBE_API_KEY;
    console.log("YOUTUBE API KEY FROM CONFIG:", apiKey);
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      cache[cacheKey] = {
        timestamp: now,
        data: response.data,
      };
      res.json(response.data);
    } catch (error) {
      console.error("YouTube API Error:", error.message);
      res.status(500).json({error: "Failed to fetch trending videos"});
    }
  });
});
