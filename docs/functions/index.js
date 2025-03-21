const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const axios = require("axios");
const cors = require("cors")({origin: true});

const YOUTUBE_API_KEY = defineSecret("YOUTUBE_API_KEY");
const cache = {};

exports.getYouTubeTrending = onRequest(
    {secrets: [YOUTUBE_API_KEY]},
    async (req, res) => {
      cors(req, res, async () => {
        const regionCode = req.query.regionCode || "US";
        const maxResults = req.query.maxResults || 10;
        const cacheKey = `${regionCode}_${maxResults}`;
        const now = Date.now();

        // 🧠 Check cache (30 min expiry)
        if (
          cache[cacheKey] &&
        now - cache[cacheKey].timestamp < 30 * 60 * 1000
        ) {
          console.log("✅ Serving from cache:", cacheKey);
          return res.json(cache[cacheKey].data);
        }

        const apiKey = YOUTUBE_API_KEY.value();
        console.log("🔐 Using API Key:", apiKey ? "Exists ✅" : "Missing ❌");

        const apiUrl =
        "https://www.googleapis.com/youtube/v3/videos" +
        `?part=snippet,statistics&chart=mostPopular` +
        `&regionCode=${regionCode}&maxResults=${maxResults}` +
        `&key=${apiKey}`;

        console.log("📡 Final YouTube API URL:", apiUrl);

        try {
          const response = await axios.get(apiUrl);
          cache[cacheKey] = {
            timestamp: now,
            data: response.data,
          };
          console.log("✅ YouTube API success. Returning data.");
          res.json(response.data);
        } catch (error) {
          console.error("❌ YouTube API Error:", error.message);
          if (error.response && error.response.data) {
            console.error("📄 Error Response:", error.response.data);
          }
          res.status(500).json({error: "Failed to fetch trending videos"});
        }
      });
    },
);
