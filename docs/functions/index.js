const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const axios = require("axios");
const cors = require("cors")({origin: true});

// 🔐 Define the secret (must match what you set earlier)
const YOUTUBE_API_KEY = defineSecret("YOUTUBE_API_KEY");

const cache = {};

// 🔁 Correct function definition for Firebase v2 with secret attached
exports.getYouTubeTrending = onRequest(
    {secrets: [YOUTUBE_API_KEY]},
    async (req, res) => {
      cors(req, res, async () => {
        const regionCode = req.query.regionCode || "US";
        const maxResults = req.query.maxResults || 10;
        const cacheKey = `${regionCode}_${maxResults}`;
        const now = Date.now();

        if (
          cache[cacheKey] &&
        now - cache[cacheKey].timestamp < 30 * 60 * 1000
        ) {
          return res.json(cache[cacheKey].data);
        }

        // ✅ Correctly reference the attached secret
        const apiKey = YOUTUBE_API_KEY.value();
        console.log("YOUTUBE API KEY FROM SECRET:", apiKey);

        const apiUrl =
        "https://www.googleapis.com/youtube/v3/videos" +
        `?part=snippet,statistics&chart=mostPopular` +
        `&regionCode=${regionCode}&maxResults=${maxResults}` +
        `&key=${apiKey}`;

        try {
          const response = await axios.get(apiUrl);
          cache[cacheKey] = {
            timestamp: now,
            data: response.data,
          };
          res.json(response.data);
        } catch (error) {
          console.error("YouTube API Error:", error.message);
          res.status(500).json({
            error: "Failed to fetch trending videos",
          });
        }
      });
    },
);
