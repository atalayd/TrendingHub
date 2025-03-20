/**
 * Trending Hub - Sample Data
 * This file contains sample trending data for all platforms and regions
 * Used as fallback when API keys are not configured or API calls fail
 */

// Sample trending data for all regions and platforms
const trendingData = {
    // Global region
    global: {
        youtube: [
            { id: 1, title: "SpaceX Starship Launch Highlights", videoId: "gA6ppby3JC8", thumbnail: "https://i.ytimg.com/vi/gA6ppby3JC8/mqdefault.jpg", views: "12.5M", likes: "1.2M", time: "2 days ago" },
            { id: 2, title: "World Cup 2026 Official Trailer", videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", views: "8.7M", likes: "950K", time: "3 days ago" },
            { id: 3, title: "New AI Breakthrough Explained", videoId: "jHdTve3ZpS0", thumbnail: "https://i.ytimg.com/vi/jHdTve3ZpS0/mqdefault.jpg", views: "5.3M", likes: "620K", time: "1 day ago" },
            { id: 4, title: "The Future of Renewable Energy", videoId: "7KXGZAEWzn0", thumbnail: "https://i.ytimg.com/vi/7KXGZAEWzn0/mqdefault.jpg", views: "3.8M", likes: "410K", time: "4 days ago" },
            { id: 5, title: "Global Music Festival 2025 - Live", videoId: "21X5lGlDOfg", thumbnail: "https://i.ytimg.com/vi/21X5lGlDOfg/mqdefault.jpg", views: "2.9M", likes: "380K", time: "12 hours ago" }
        ],
        twitter: [
            { id: 1, title: "#WorldPeaceDay", tweets: "1.2M", time: "Trending now" },
            { id: 2, title: "#ClimateAction", tweets: "890K", time: "Trending now" },
            { id: 3, title: "#TechInnovation", tweets: "750K", time: "Trending now" },
            { id: 4, title: "#GlobalEconomy", tweets: "620K", time: "Trending now" },
            { id: 5, title: "#DigitalTransformation", tweets: "580K", time: "Trending now" }
        ],
        facebook: [
            { id: 1, title: "International Space Station Live Tour", time: "Trending now" },
            { id: 2, title: "Global Health Initiative Launch", time: "Trending now" },
            { id: 3, title: "Virtual Reality Education Summit", time: "Trending now" },
            { id: 4, title: "Worldwide Cultural Exchange Program", time: "Trending now" },
            { id: 5, title: "International Cooking Championship", time: "Trending now" }
        ],
        tiktok: [
            { id: 1, title: "#GlobalDanceChallenge", views: "2.3B views", time: "Trending now" },
            { id: 2, title: "#WorldwideRecipes", views: "1.8B views", time: "Trending now" },
            { id: 3, title: "#InternationalFashion", views: "1.5B views", time: "Trending now" },
            { id: 4, title: "#GlobalTravelTips", views: "1.2B views", time: "Trending now" },
            { id: 5, title: "#MulticulturalArt", views: "980M views", time: "Trending now" }
        ],
        google: [
            { id: 1, title: "Global economic summit", searches: "5M+ searches", time: "Trending now" },
            { id: 2, title: "International space mission", searches: "3.8M+ searches", time: "Trending now" },
            { id: 3, title: "World health organization report", searches: "2.5M+ searches", time: "Trending now" },
            { id: 4, title: "Global technology conference", searches: "2.1M+ searches", time: "Trending now" },
            { id: 5, title: "International peace treaty", searches: "1.9M+ searches", time: "Trending now" }
        ]
    },
    
    // Americas region
    americas: {
        youtube: [
            { id: 1, title: "Super Bowl Highlights 2025", videoId: "gA6ppby3JC8", thumbnail: "https://i.ytimg.com/vi/gA6ppby3JC8/mqdefault.jpg", views: "15.2M", likes: "1.8M", time: "2 days ago" },
            { id: 2, title: "Latin Grammy Awards 2025", videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", views: "9.5M", likes: "1.1M", time: "3 days ago" },
            { id: 3, title: "Amazon Rainforest Conservation", videoId: "jHdTve3ZpS0", thumbnail: "https://i.ytimg.com/vi/jHdTve3ZpS0/mqdefault.jpg", views: "6.8M", likes: "780K", time: "1 day ago" },
            { id: 4, title: "North American Economic Summit", videoId: "7KXGZAEWzn0", thumbnail: "https://i.ytimg.com/vi/7KXGZAEWzn0/mqdefault.jpg", views: "4.2M", likes: "520K", time: "4 days ago" },
            { id: 5, title: "Pan-American Games Highlights", videoId: "21X5lGlDOfg", thumbnail: "https://i.ytimg.com/vi/21X5lGlDOfg/mqdefault.jpg", views: "3.7M", likes: "450K", time: "12 hours ago" }
        ],
        twitter: [
            { id: 1, title: "#AmericaUnited", tweets: "950K", time: "Trending now" },
            { id: 2, title: "#LatinMusic", tweets: "820K", time: "Trending now" },
            { id: 3, title: "#NorthAmericanTrade", tweets: "680K", time: "Trending now" },
            { id: 4, title: "#SouthAmericanCuisine", tweets: "590K", time: "Trending now" },
            { id: 5, title: "#PanamericanCulture", tweets: "510K", time: "Trending now" }
        ],
        facebook: [
            { id: 1, title: "American Innovation Summit", time: "Trending now" },
            { id: 2, title: "Latin American Film Festival", time: "Trending now" },
            { id: 3, title: "North American Wildlife Conservation", time: "Trending now" },
            { id: 4, title: "South American Tourism Expo", time: "Trending now" },
            { id: 5, title: "Caribbean Cultural Celebration", time: "Trending now" }
        ],
        tiktok: [
            { id: 1, title: "#AmericanDanceChallenge", views: "1.9B views", time: "Trending now" },
            { id: 2, title: "#LatinCooking", views: "1.6B views", time: "Trending now" },
            { id: 3, title: "#NorthAmericanRoadTrip", views: "1.3B views", time: "Trending now" },
            { id: 4, title: "#SouthAmericanFashion", views: "1.1B views", time: "Trending now" },
            { id: 5, title: "#CaribbeanVibes", views: "950M views", time: "Trending now" }
        ],
        google: [
            { id: 1, title: "North American trade agreement", searches: "4.5M+ searches", time: "Trending now" },
            { id: 2, title: "Latin American economic growth", searches: "3.2M+ searches", time: "Trending now" },
            { id: 3, title: "South American tourism destinations", searches: "2.8M+ searches", time: "Trending now" },
            { id: 4, title: "Caribbean vacation packages", searches: "2.3M+ searches", time: "Trending now" },
            { id: 5, title: "American technology innovation", searches: "1.9M+ searches", time: "Trending now" }
        ]
    },
    
    // Europe region
    europe: {
        youtube: [
            { id: 1, title: "UEFA Champions League Final", videoId: "gA6ppby3JC8", thumbnail: "https://i.ytimg.com/vi/gA6ppby3JC8/mqdefault.jpg", views: "18.5M", likes: "2.1M", time: "2 days ago" },
            { id: 2, title: "European Union Summit 2025", videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", views: "7.8M", likes: "890K", time: "3 days ago" },
            { id: 3, title: "Alpine Skiing World Championship", videoId: "jHdTve3ZpS0", thumbnail: "https://i.ytimg.com/vi/jHdTve3ZpS0/mqdefault.jpg", views: "6.2M", likes: "720K", time: "1 day ago" },
            { id: 4, title: "European Green Deal Explained", videoId: "7KXGZAEWzn0", thumbnail: "https://i.ytimg.com/vi/7KXGZAEWzn0/mqdefault.jpg", views: "4.9M", likes: "580K", time: "4 days ago" },
            { id: 5, title: "Eurovision Song Contest 2025", videoId: "21X5lGlDOfg", thumbnail: "https://i.ytimg.com/vi/21X5lGlDOfg/mqdefault.jpg", views: "4.1M", likes: "520K", time: "12 hours ago" }
        ],
        twitter: [
            { id: 1, title: "#EuropeanUnity", tweets: "880K", time: "Trending now" },
            { id: 2, title: "#EurovisionFinal", tweets: "820K", time: "Trending now" },
            { id: 3, title: "#EuropeanCuisine", tweets: "710K", time: "Trending now" },
            { id: 4, title: "#EUPolitics", tweets: "650K", time: "Trending now" },
            { id: 5, title: "#EuropeanTravel", tweets: "580K", time: "Trending now" }
        ],
        facebook: [
            { id: 1, title: "European Cultural Heritage Festival", time: "Trending now" },
            { id: 2, title: "Mediterranean Cuisine Expo", time: "Trending now" },
            { id: 3, title: "Northern European Design Summit", time: "Trending now" },
            { id: 4, title: "Eastern European Film Festival", time: "Trending now" },
            { id: 5, title: "Western European Tech Conference", time: "Trending now" }
        ],
        tiktok: [
            { id: 1, title: "#EuropeanFashionWeek", views: "1.7B views", time: "Trending now" },
            { id: 2, title: "#MediterraneanDiet", views: "1.5B views", time: "Trending now" },
            { id: 3, title: "#EuropeanArchitecture", views: "1.2B views", time: "Trending now" },
            { id: 4, title: "#EUTravelGuide", views: "1.0B views", time: "Trending now" },
            { id: 5, title: "#EuropeanStreetStyle", views: "920M views", time: "Trending now" }
        ],
        google: [
            { id: 1, title: "European Union policy changes", searches: "3.8M+ searches", time: "Trending now" },
            { id: 2, title: "European travel destinations", searches: "3.5M+ searches", time: "Trending now" },
            { id: 3, title: "European football championship", searches: "3.1M+ searches", time: "Trending now" },
            { id: 4, title: "European economic forecast", searches: "2.6M+ searches", time: "Trending now" },
            { id: 5, title: "European cultural festivals", searches: "2.2M+ searches", time: "Trending now" }
        ]
    },
    
    // Asia region
    asia: {
        youtube: [
            { id: 1, title: "Asian Games 2025 Opening Ceremony", videoId: "gA6ppby3JC8", thumbnail: "https://i.ytimg.com/vi/gA6ppby3JC8/mqdefault.jpg", views: "22.7M", likes: "2.5M", time: "2 days ago" },
            { id: 2, title: "K-Pop World Tour 2025", videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", views: "19.3M", likes: "2.2M", time: "3 days ago" },
            { id: 3, title: "Asian Economic Forum Highlights", videoId: "jHdTve3ZpS0", thumbnail: "https://i.ytimg.com/vi/jHdTve3ZpS0/mqdefault.jpg", views: "8.5M", likes: "950K", time: "1 day ago" },
            { id: 4, title: "Bollywood Awards 2025", videoId: "7KXGZAEWzn0", thumbnail: "https://i.ytimg.com/vi/7KXGZAEWzn0/mqdefault.jpg", views: "7.2M", likes: "880K", time: "4 days ago" },
            { id: 5, title: "Asian Street Food Documentary", videoId: "21X5lGlDOfg", thumbnail: "https://i.ytimg.com/vi/21X5lGlDOfg/mqdefault.jpg", views: "5.8M", likes: "720K", time: "12 hours ago" }
        ],
        twitter: [
            { id: 1, title: "#KPopStans", tweets: "1.5M", time: "Trending now" },
            { id: 2, title: "#AsianCuisine", tweets: "980K", time: "Trending now" },
            { id: 3, title: "#BollywoodNews", tweets: "850K", time: "Trending now" },
            { id: 4, title: "#AsianTech", tweets: "780K", time: "Trending now" },
            { id: 5, title: "#AsianGames2025", tweets: "720K", time: "Trending now" }
        ],
        facebook: [
            { id: 1, title: "Asian Cultural Festival", time: "Trending now" },
            { id: 2, title: "East Asian Business Summit", time: "Trending now" },
            { id: 3, title: "South Asian Film Awards", time: "Trending now" },
            { id: 4, title: "Southeast Asian Cuisine Expo", time: "Trending now" },
            { id: 5, title: "Central Asian Tourism Fair", time: "Trending now" }
        ],
        tiktok: [
            { id: 1, title: "#AsianFoodChallenge", views: "2.8B views", time: "Trending now" },
            { id: 2, title: "#KPopDanceChallenge", views: "2.5B views", time: "Trending now" },
            { id: 3, title: "#AsianFashionTrends", views: "1.9B views", time: "Trending now" },
            { id: 4, title: "#BollywoodDance", views: "1.7B views", time: "Trending now" },
            { id: 5, title: "#AsianBeautySecrets", views: "1.5B views", time: "Trending now" }
        ],
        google: [
            { id: 1, title: "Asian economic growth forecast", searches: "5.2M+ searches", time: "Trending now" },
            { id: 2, title: "K-pop concert tickets", searches: "4.8M+ searches", time: "Trending now" },
            { id: 3, title: "Asian technology innovations", searches: "3.9M+ searches", time: "Trending now" },
            { id: 4, title: "Bollywood movie releases", searches: "3.5M+ searches", time: "Trending now" },
            { id: 5, title: "Asian travel destinations", searches: "3.2M+ searches", time: "Trending now" }
        ]
    },
    
    // Africa region
    africa: {
        youtube: [
            { id: 1, title: "African Cup of Nations 2025", videoId: "gA6ppby3JC8", thumbnail: "https://i.ytimg.com/vi/gA6ppby3JC8/mqdefault.jpg", views: "12.8M", likes: "1.5M", time: "2 days ago" },
            { id: 2, title: "African Union Summit 2025", videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", views: "7.5M", likes: "890K", time: "3 days ago" },
            { id: 3, title: "African Innovation Awards", videoId: "jHdTve3ZpS0", thumbnail: "https://i.ytimg.com/vi/jHdTve3ZpS0/mqdefault.jpg", views: "5.9M", likes: "720K", time: "1 day ago" },
            { id: 4, title: "African Wildlife Documentary", videoId: "7KXGZAEWzn0", thumbnail: "https://i.ytimg.com/vi/7KXGZAEWzn0/mqdefault.jpg", views: "4.8M", likes: "650K", time: "4 days ago" },
            { id: 5, title: "African Music Festival 2025", videoId: "21X5lGlDOfg", thumbnail: "https://i.ytimg.com/vi/21X5lGlDOfg/mqdefault.jpg", views: "4.2M", likes: "580K", time: "12 hours ago" }
        ],
        twitter: [
            { id: 1, title: "#AfricanUnity", tweets: "780K", time: "Trending now" },
            { id: 2, title: "#AfroBeats", tweets: "720K", time: "Trending now" },
            { id: 3, title: "#AfricanInnovation", tweets: "650K", time: "Trending now" },
            { id: 4, title: "#AfricanCuisine", tweets: "580K", time: "Trending now" },
            { id: 5, title: "#AfricanWildlife", tweets: "520K", time: "Trending now" }
        ],
        facebook: [
            { id: 1, title: "Pan-African Cultural Festival", time: "Trending now" },
            { id: 2, title: "North African Business Forum", time: "Trending now" },
            { id: 3, title: "West African Music Awards", time: "Trending now" },
            { id: 4, title: "East African Tourism Expo", time: "Trending now" },
            { id: 5, title: "Southern African Tech Summit", time: "Trending now" }
        ],
        tiktok: [
            { id: 1, title: "#AfricanDanceChallenge", views: "1.5B views", time: "Trending now" },
            { id: 2, title: "#AfricanFashion", views: "1.3B views", time: "Trending now" },
            { id: 3, title: "#AfricanCooking", views: "1.1B views", time: "Trending now" },
            { id: 4, title: "#AfricanArt", views: "950M views", time: "Trending now" },
            { id: 5, title: "#AfricanTravel", views: "820M views", time: "Trending now" }
        ],
        google: [
            { id: 1, title: "African economic development", searches: "3.2M+ searches", time: "Trending now" },
            { id: 2, title: "African music festivals", searches: "2.8M+ searches", time: "Trending now" },
            { id: 3, title: "African wildlife safaris", searches: "2.5M+ searches", time: "Trending now" },
            { id: 4, title: "African technology startups", searches: "2.1M+ searches", time: "Trending now" },
            { id: 5, title: "African cultural heritage", searches: "1.9M+ searches", time: "Trending now" }
        ]
    },
    
    // Oceania region
    oceania: {
        youtube: [
            { id: 1, title: "Australian Open 2025 Highlights", videoId: "gA6ppby3JC8", thumbnail: "https://i.ytimg.com/vi/gA6ppby3JC8/mqdefault.jpg", views: "9.5M", likes: "1.1M", time: "2 days ago" },
            { id: 2, title: "Pacific Islands Forum 2025", videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", views: "5.8M", likes: "720K", time: "3 days ago" },
            { id: 3, title: "Great Barrier Reef Documentary", videoId: "jHdTve3ZpS0", thumbnail: "https://i.ytimg.com/vi/jHdTve3ZpS0/mqdefault.jpg", views: "4.9M", likes: "650K", time: "1 day ago" },
            { id: 4, title: "New Zealand Tourism Campaign", videoId: "7KXGZAEWzn0", thumbnail: "https://i.ytimg.com/vi/7KXGZAEWzn0/mqdefault.jpg", views: "4.2M", likes: "580K", time: "4 days ago" },
            { id: 5, title: "Oceania Music Awards 2025", videoId: "21X5lGlDOfg", thumbnail: "https://i.ytimg.com/vi/21X5lGlDOfg/mqdefault.jpg", views: "3.8M", likes: "520K", time: "12 hours ago" }
        ],
        twitter: [
            { id: 1, title: "#AustralianOpen", tweets: "680K", time: "Trending now" },
            { id: 2, title: "#PacificIslands", tweets: "580K", time: "Trending now" },
            { id: 3, title: "#AussieLife", tweets: "520K", time: "Trending now" },
            { id: 4, title: "#KiwiPride", tweets: "480K", time: "Trending now" },
            { id: 5, title: "#OceaniaUnited", tweets: "420K", time: "Trending now" }
        ],
        facebook: [
            { id: 1, title: "Australian Cultural Festival", time: "Trending now" },
            { id: 2, title: "New Zealand Film Awards", time: "Trending now" },
            { id: 3, title: "Pacific Islands Tourism Expo", time: "Trending now" },
            { id: 4, title: "Oceania Business Summit", time: "Trending now" },
            { id: 5, title: "Australian Wildlife Conservation", time: "Trending now" }
        ],
        tiktok: [
            { id: 1, title: "#AussieTikTok", views: "1.2B views", time: "Trending now" },
            { id: 2, title: "#KiwiLife", views: "980M views", time: "Trending now" },
            { id: 3, title: "#PacificIslandDance", views: "850M views", time: "Trending now" },
            { id: 4, title: "#AustralianOutback", views: "780M views", time: "Trending now" },
            { id: 5, title: "#OceaniaTravel", views: "720M views", time: "Trending now" }
        ],
        google: [
            { id: 1, title: "Australian Open tennis", searches: "2.8M+ searches", time: "Trending now" },
            { id: 2, title: "New Zealand travel destinations", searches: "2.5M+ searches", time: "Trending now" },
            { id: 3, title: "Great Barrier Reef conservation", searches: "2.1M+ searches", time: "Trending now" },
            { id: 4, title: "Pacific Islands climate action", searches: "1.8M+ searches", time: "Trending now" },
            { id: 5, title: "Australian wildlife protection", searches: "1.5M+ searches", time: "Trending now" }
        ]
    }
};
