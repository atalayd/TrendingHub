/**
 * Trending Hub - Sample Data
 * This file contains sample trending data for all platforms and regions
 */

// Sample data structure for trending content
const trendingData = {
    // Data organized by region
    global: {
        youtube: [
            {
                id: 1,
                title: "Amazing New Technology Breakthrough",
                views: "5.2M",
                likes: "420K",
                time: "2 days ago",
                videoId: "dQw4w9WgXcQ", // Technology demo video
                thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
            },
            {
                id: 2,
                title: "World's Most Spectacular Natural Wonders",
                views: "3.8M",
                likes: "310K",
                time: "3 days ago",
                videoId: "QwZT7T-TXT0", // Nature documentary clip
                thumbnail: "https://i.ytimg.com/vi/QwZT7T-TXT0/hqdefault.jpg"
            },
            {
                id: 3,
                title: "The Future of Renewable Energy Explained",
                views: "2.5M",
                likes: "195K",
                time: "1 week ago",
                videoId: "RnvCbKjIMeI", // Renewable energy video
                thumbnail: "https://i.ytimg.com/vi/RnvCbKjIMeI/hqdefault.jpg"
            },
            {
                id: 4,
                title: "How Artificial Intelligence is Changing Everything",
                views: "4.1M",
                likes: "350K",
                time: "5 days ago",
                videoId: "Pls_q2aQzHg", // AI documentary
                thumbnail: "https://i.ytimg.com/vi/Pls_q2aQzHg/hqdefault.jpg"
            },
            {
                id: 5,
                title: "The Most Beautiful Places on Earth 2025",
                views: "1.9M",
                likes: "180K",
                time: "2 weeks ago",
                videoId: "74qGcpQVzUs", // Travel destinations
                thumbnail: "https://i.ytimg.com/vi/74qGcpQVzUs/hqdefault.jpg"
            }
        ],
        google: [
            { id: 1, title: "Global Climate Summit 2025", time: "Trending today" },
            { id: 2, title: "Cryptocurrency market surge", time: "500K+ searches" },
            { id: 3, title: "New smartphone release date", time: "200K+ searches" },
            { id: 4, title: "International Space Station discoveries", time: "150K+ searches" },
            { id: 5, title: "World Cup qualifiers results", time: "1M+ searches" }
        ],
        twitter: [
            { id: 1, title: "#GlobalWarming", time: "250K tweets" },
            { id: 2, title: "#TechInnovation", time: "180K tweets" },
            { id: 3, title: "#CryptoCurrency", time: "320K tweets" },
            { id: 4, title: "#SpaceExploration", time: "95K tweets" },
            { id: 5, title: "#WorldCup2026", time: "450K tweets" }
        ],
        facebook: [
            { id: 1, title: "Virtual Reality Gaming Revolution", time: "Trending worldwide" },
            { id: 2, title: "Sustainable Living Tips", time: "50K shares today" },
            { id: 3, title: "Remote Work Culture", time: "30K discussions" },
            { id: 4, title: "Digital Nomad Lifestyle", time: "25K shares today" },
            { id: 5, title: "Global Music Festival Highlights", time: "100K talking about this" }
        ],
        tiktok: [
            { id: 1, title: "#DanceChallenge2025", time: "2B views" },
            { id: 2, title: "#EcoHacks", time: "500M views" },
            { id: 3, title: "#FutureTech", time: "750M views" },
            { id: 4, title: "#GlobalCooking", time: "1.2B views" },
            { id: 5, title: "#SpaceVideos", time: "300M views" }
        ]
    },
    
    // Americas region data
    americas: {
        youtube: [
            {
                id: 1,
                title: "North American Wildlife Documentary",
                views: "2.3M",
                likes: "190K",
                time: "4 days ago",
                videoId: "bhJNL9JUsnY", // Wildlife documentary
                thumbnail: "https://i.ytimg.com/vi/bhJNL9JUsnY/hqdefault.jpg"
            },
            {
                id: 2,
                title: "South American Cuisine Masterclass",
                views: "1.7M",
                likes: "145K",
                time: "1 week ago",
                videoId: "5m53vUOA7lI", // Cooking video
                thumbnail: "https://i.ytimg.com/vi/5m53vUOA7lI/hqdefault.jpg"
            },
            {
                id: 3,
                title: "The Grand Canyon: America's Natural Wonder",
                views: "3.1M",
                likes: "280K",
                time: "3 days ago",
                videoId: "SsYqX5fZZ_c", // Grand Canyon video
                thumbnail: "https://i.ytimg.com/vi/SsYqX5fZZ_c/hqdefault.jpg"
            },
            {
                id: 4,
                title: "Amazon Rainforest Exploration",
                views: "1.5M",
                likes: "120K",
                time: "2 weeks ago",
                videoId: "JEqDkGyUF-o", // Amazon rainforest
                thumbnail: "https://i.ytimg.com/vi/JEqDkGyUF-o/hqdefault.jpg"
            },
            {
                id: 5,
                title: "North vs South American Football Styles",
                views: "4.2M",
                likes: "350K",
                time: "5 days ago",
                videoId: "9Qtn8xTMYBE", // Football/soccer video
                thumbnail: "https://i.ytimg.com/vi/9Qtn8xTMYBE/hqdefault.jpg"
            }
        ],
        google: [
            { id: 1, title: "Major League Baseball standings", time: "300K+ searches" },
            { id: 2, title: "Latin American music festival", time: "150K+ searches" },
            { id: 3, title: "Canadian national parks", time: "80K+ searches" },
            { id: 4, title: "South American travel destinations", time: "120K+ searches" },
            { id: 5, title: "American election polls", time: "500K+ searches" }
        ],
        twitter: [
            { id: 1, title: "#AmericanPolitics", time: "180K tweets" },
            { id: 2, title: "#LatinMusic", time: "150K tweets" },
            { id: 3, title: "#NorthAmericanWildlife", time: "60K tweets" },
            { id: 4, title: "#AmazonRainforest", time: "95K tweets" },
            { id: 5, title: "#PanamericanGames", time: "120K tweets" }
        ],
        facebook: [
            { id: 1, title: "American Road Trip Adventures", time: "40K shares today" },
            { id: 2, title: "South American Cultural Heritage", time: "25K discussions" },
            { id: 3, title: "North American Indigenous Art", time: "15K shares today" },
            { id: 4, title: "Central American Cuisine", time: "30K talking about this" },
            { id: 5, title: "Canadian Wilderness Photography", time: "20K shares today" }
        ],
        tiktok: [
            { id: 1, title: "#AmericanDance", time: "800M views" },
            { id: 2, title: "#LatinCooking", time: "350M views" },
            { id: 3, title: "#NorthAmericanTravel", time: "500M views" },
            { id: 4, title: "#SouthAmericanFashion", time: "250M views" },
            { id: 5, title: "#CanadianOutdoors", time: "300M views" }
        ]
    },
    
    // Europe region data
    europe: {
        youtube: [
            {
                id: 1,
                title: "European Architectural Masterpieces",
                views: "1.9M",
                likes: "160K",
                time: "1 week ago",
                videoId: "LdJkLyw4yzg", // European architecture
                thumbnail: "https://i.ytimg.com/vi/LdJkLyw4yzg/hqdefault.jpg"
            },
            {
                id: 2,
                title: "Mediterranean Cuisine Secrets",
                views: "2.2M",
                likes: "185K",
                time: "5 days ago",
                videoId: "5m53vUOA7lI", // Mediterranean cooking
                thumbnail: "https://i.ytimg.com/vi/5m53vUOA7lI/hqdefault.jpg"
            },
            {
                id: 3,
                title: "The Alps: Europe's Majestic Mountains",
                views: "1.5M",
                likes: "130K",
                time: "2 weeks ago",
                videoId: "UwVNF99th3U", // Alps video
                thumbnail: "https://i.ytimg.com/vi/UwVNF99th3U/hqdefault.jpg"
            },
            {
                id: 4,
                title: "European Union Economic Forecast 2025",
                views: "1.2M",
                likes: "95K",
                time: "3 days ago",
                videoId: "9Auq9mYxFEE", // EU economics
                thumbnail: "https://i.ytimg.com/vi/9Auq9mYxFEE/hqdefault.jpg"
            },
            {
                id: 5,
                title: "Hidden Gems of Eastern Europe",
                views: "1.8M",
                likes: "150K",
                time: "1 week ago",
                videoId: "Hhj_XgMZSAE", // Eastern Europe travel
                thumbnail: "https://i.ytimg.com/vi/Hhj_XgMZSAE/hqdefault.jpg"
            }
        ],
        google: [
            { id: 1, title: "European football league results", time: "400K+ searches" },
            { id: 2, title: "Mediterranean vacation packages", time: "200K+ searches" },
            { id: 3, title: "Northern Lights forecast", time: "150K+ searches" },
            { id: 4, title: "European Union policy changes", time: "100K+ searches" },
            { id: 5, title: "European music festivals 2025", time: "250K+ searches" }
        ],
        twitter: [
            { id: 1, title: "#EuropeanUnion", time: "120K tweets" },
            { id: 2, title: "#EuroLeague", time: "200K tweets" },
            { id: 3, title: "#MediterraneanDiet", time: "80K tweets" },
            { id: 4, title: "#EuropeanTravel", time: "150K tweets" },
            { id: 5, title: "#NordicLifestyle", time: "60K tweets" }
        ],
        facebook: [
            { id: 1, title: "European Heritage Sites", time: "35K shares today" },
            { id: 2, title: "Mediterranean Cruise Experiences", time: "20K discussions" },
            { id: 3, title: "European Sustainable Cities", time: "25K shares today" },
            { id: 4, title: "Eastern European Traditions", time: "15K talking about this" },
            { id: 5, title: "European Culinary Tour", time: "30K shares today" }
        ],
        tiktok: [
            { id: 1, title: "#EuropeanFashion", time: "600M views" },
            { id: 2, title: "#MediterraneanLife", time: "450M views" },
            { id: 3, title: "#EuropeanCities", time: "700M views" },
            { id: 4, title: "#NordicDesign", time: "300M views" },
            { id: 5, title: "#EasternEuropeanCuisine", time: "250M views" }
        ]
    },
    
    // Asia region data
    asia: {
        youtube: [
            {
                id: 1,
                title: "Asian Street Food Journey",
                views: "3.5M",
                likes: "290K",
                time: "3 days ago",
                videoId: "5m53vUOA7lI", // Asian street food
                thumbnail: "https://i.ytimg.com/vi/5m53vUOA7lI/hqdefault.jpg"
            },
            {
                id: 2,
                title: "Mount Everest: The Ultimate Challenge",
                views: "2.8M",
                likes: "240K",
                time: "1 week ago",
                videoId: "NhBzhi9jPFs", // Everest documentary
                thumbnail: "https://i.ytimg.com/vi/NhBzhi9jPFs/hqdefault.jpg"
            },
            {
                id: 3,
                title: "Asian Technology Innovation Leaders",
                views: "2.1M",
                likes: "175K",
                time: "5 days ago",
                videoId: "SGP6Y0Pnhe4", // Asian tech
                thumbnail: "https://i.ytimg.com/vi/SGP6Y0Pnhe4/hqdefault.jpg"
            },
            {
                id: 4,
                title: "Traditional Asian Medicine Practices",
                views: "1.6M",
                likes: "130K",
                time: "2 weeks ago",
                videoId: "JEqDkGyUF-o", // Traditional medicine
                thumbnail: "https://i.ytimg.com/vi/JEqDkGyUF-o/hqdefault.jpg"
            },
            {
                id: 5,
                title: "Southeast Asian Island Paradise Tour",
                views: "2.4M",
                likes: "200K",
                time: "4 days ago",
                videoId: "LdJkLyw4yzg", // Island tour
                thumbnail: "https://i.ytimg.com/vi/LdJkLyw4yzg/hqdefault.jpg"
            }
        ],
        google: [
            { id: 1, title: "Asian economic summit", time: "250K+ searches" },
            { id: 2, title: "K-pop new album releases", time: "500K+ searches" },
            { id: 3, title: "Southeast Asian travel restrictions", time: "180K+ searches" },
            { id: 4, title: "Asian cuisine cooking techniques", time: "120K+ searches" },
            { id: 5, title: "East Asian technology innovations", time: "200K+ searches" }
        ],
        twitter: [
            { id: 1, title: "#KPopStars", time: "350K tweets" },
            { id: 2, title: "#AsianCuisine", time: "120K tweets" },
            { id: 3, title: "#SoutheastAsianTravel", time: "90K tweets" },
            { id: 4, title: "#AsianTechInnovation", time: "150K tweets" },
            { id: 5, title: "#HimalayaAdventures", time: "70K tweets" }
        ],
        facebook: [
            { id: 1, title: "Asian Cultural Festivals", time: "45K shares today" },
            { id: 2, title: "Southeast Asian Beaches", time: "30K discussions" },
            { id: 3, title: "East Asian Architecture", time: "25K shares today" },
            { id: 4, title: "Asian Fusion Cuisine", time: "35K talking about this" },
            { id: 5, title: "Central Asian Nomadic Traditions", time: "15K shares today" }
        ],
        tiktok: [
            { id: 1, title: "#AsianStreetFood", time: "900M views" },
            { id: 2, title: "#KPopDance", time: "1.5B views" },
            { id: 3, title: "#AsianFashionTrends", time: "700M views" },
            { id: 4, title: "#SoutheastAsianTravel", time: "500M views" },
            { id: 5, title: "#AsianBeautySecrets", time: "800M views" }
        ]
    },
    
    // Africa region data
    africa: {
        youtube: [
            {
                id: 1,
                title: "African Wildlife Safari Experience",
                views: "2.7M",
                likes: "230K",
                time: "1 week ago",
                videoId: "bhJNL9JUsnY", // African wildlife
                thumbnail: "https://i.ytimg.com/vi/bhJNL9JUsnY/hqdefault.jpg"
            },
            {
                id: 2,
                title: "Traditional African Music and Dance",
                views: "1.9M",
                likes: "160K",
                time: "2 weeks ago",
                videoId: "9Auq9mYxFEE", // African music
                thumbnail: "https://i.ytimg.com/vi/9Auq9mYxFEE/hqdefault.jpg"
            },
            {
                id: 3,
                title: "North African Cuisine Masterclass",
                views: "1.5M",
                likes: "125K",
                time: "5 days ago",
                videoId: "5m53vUOA7lI", // North African cooking
                thumbnail: "https://i.ytimg.com/vi/5m53vUOA7lI/hqdefault.jpg"
            },
            {
                id: 4,
                title: "The Great Migration: Nature's Spectacle",
                views: "3.2M",
                likes: "270K",
                time: "3 days ago",
                videoId: "JEqDkGyUF-o", // Great Migration
                thumbnail: "https://i.ytimg.com/vi/JEqDkGyUF-o/hqdefault.jpg"
            },
            {
                id: 5,
                title: "African Innovation and Technology Growth",
                views: "1.3M",
                likes: "110K",
                time: "1 week ago",
                videoId: "SGP6Y0Pnhe4", // African tech
                thumbnail: "https://i.ytimg.com/vi/SGP6Y0Pnhe4/hqdefault.jpg"
            }
        ],
        google: [
            { id: 1, title: "African Cup of Nations results", time: "300K+ searches" },
            { id: 2, title: "Safari tour packages", time: "150K+ searches" },
            { id: 3, title: "African sustainable development", time: "100K+ searches" },
            { id: 4, title: "West African music festival", time: "120K+ searches" },
            { id: 5, title: "North African historical sites", time: "80K+ searches" }
        ],
        twitter: [
            { id: 1, title: "#AfricanWildlife", time: "100K tweets" },
            { id: 2, title: "#AfricanCuisine", time: "70K tweets" },
            { id: 3, title: "#AfricanInnovation", time: "90K tweets" },
            { id: 4, title: "#SafariAdventures", time: "120K tweets" },
            { id: 5, title: "#AfricanArtists", time: "150K tweets" }
        ],
        facebook: [
            { id: 1, title: "African Cultural Heritage", time: "30K shares today" },
            { id: 2, title: "East African Safari Experiences", time: "25K discussions" },
            { id: 3, title: "North African Architecture", time: "15K shares today" },
            { id: 4, title: "West African Cuisine", time: "20K talking about this" },
            { id: 5, title: "Southern African Wildlife Photography", time: "35K shares today" }
        ],
        tiktok: [
            { id: 1, title: "#AfricanDance", time: "700M views" },
            { id: 2, title: "#SafariAdventures", time: "400M views" },
            { id: 3, title: "#AfricanFashion", time: "600M views" },
            { id: 4, title: "#AfricanCooking", time: "350M views" },
            { id: 5, title: "#AfricanWildlife", time: "500M views" }
        ]
    },
    
    // Oceania region data
    oceania: {
        youtube: [
            {
                id: 1,
                title: "Great Barrier Reef: Underwater Paradise",
                views: "2.5M",
                likes: "210K",
                time: "4 days ago",
                videoId: "LdJkLyw4yzg", // Great Barrier Reef
                thumbnail: "https://i.ytimg.com/vi/LdJkLyw4yzg/hqdefault.jpg"
            },
            {
                id: 2,
                title: "New Zealand's Breathtaking Landscapes",
                views: "2.2M",
                likes: "180K",
                time: "1 week ago",
                videoId: "UwVNF99th3U", // New Zealand landscapes
                thumbnail: "https://i.ytimg.com/vi/UwVNF99th3U/hqdefault.jpg"
            },
            {
                id: 3,
                title: "Australian Outback Adventure",
                views: "1.8M",
                likes: "150K",
                time: "2 weeks ago",
                videoId: "bhJNL9JUsnY", // Australian outback
                thumbnail: "https://i.ytimg.com/vi/bhJNL9JUsnY/hqdefault.jpg"
            },
            {
                id: 4,
                title: "Pacific Island Cultural Traditions",
                views: "1.4M",
                likes: "120K",
                time: "5 days ago",
                videoId: "9Auq9mYxFEE", // Pacific traditions
                thumbnail: "https://i.ytimg.com/vi/9Auq9mYxFEE/hqdefault.jpg"
            },
            {
                id: 5,
                title: "Surfing the Legendary Waves of Oceania",
                views: "2.0M",
                likes: "170K",
                time: "3 days ago",
                videoId: "JEqDkGyUF-o", // Surfing video
                thumbnail: "https://i.ytimg.com/vi/JEqDkGyUF-o/hqdefault.jpg"
            }
        ],
        google: [
            { id: 1, title: "Great Barrier Reef conservation", time: "150K+ searches" },
            { id: 2, title: "New Zealand travel packages", time: "200K+ searches" },
            { id: 3, title: "Australian Open tennis results", time: "250K+ searches" },
            { id: 4, title: "Pacific Island vacation deals", time: "100K+ searches" },
            { id: 5, title: "Surfing competitions Oceania", time: "80K+ searches" }
        ],
        twitter: [
            { id: 1, title: "#AustralianWildlife", time: "110K tweets" },
            { id: 2, title: "#NewZealandScenery", time: "90K tweets" },
            { id: 3, title: "#GreatBarrierReef", time: "130K tweets" },
            { id: 4, title: "#PacificIslandLife", time: "70K tweets" },
            { id: 5, title: "#OceaniaSurfing", time: "100K tweets" }
        ],
        facebook: [
            { id: 1, title: "Australian Outback Photography", time: "25K shares today" },
            { id: 2, title: "New Zealand Adventure Tours", time: "30K discussions" },
            { id: 3, title: "Pacific Island Cultural Festivals", time: "15K shares today" },
            { id: 4, title: "Great Barrier Reef Conservation", time: "20K talking about this" },
            { id: 5, title: "Oceania Marine Life", time: "35K shares today" }
        ],
        tiktok: [
            { id: 1, title: "#AussieLife", time: "600M views" },
            { id: 2, title: "#KiwiAdventures", time: "400M views" },
            { id: 3, title: "#PacificIslandDance", time: "300M views" },
            { id: 4, title: "#AustralianBeaches", time: "500M views" },
            { id: 5, title: "#OceaniaNature", time: "450M views" }
        ]
    }
};

// Country-specific video data for the globe markers
const countryVideos = {
    americas: {
        title: "Americas Highlights",
        videoId: "9Qtn8xTMYBE" // Americas video
    },
    europe: {
        title: "European Wonders",
        videoId: "LdJkLyw4yzg" // Europe video
    },
    asia: {
        title: "Asian Discoveries",
        videoId: "5m53vUOA7lI" // Asia video
    },
    africa: {
        title: "African Adventures",
        videoId: "bhJNL9JUsnY" // Africa video
    }
};
