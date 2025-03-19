// Note: Replace placeholder URLs and API keys with actual endpoints and keys.

// Global variables for current filters
let currentRegion = 'global';
let currentPlatform = 'all';

// DOM Elements
const regionButtons = document.querySelectorAll('.region-btn');
const platformButtons = document.querySelectorAll('.platform-btn');
const youtubeList = document.getElementById('youtube-list');
const youtubePlayer = document.getElementById('youtube-player');
const twitterWindow = document.getElementById('twitter-window');
const facebookWindow = document.getElementById('facebook-window');
const tiktokWindow = document.getElementById('tiktok-window');
const modal = document.getElementById('video-modal');
const modalIframe = document.getElementById('modal-iframe');
const closeModal = document.querySelector('.close-modal');

// Function to fetch trending data from YouTube Data API
async function fetchYouTubeTrending(region = 'global') {
  // Replace 'YOUR_YOUTUBE_API_KEY' with your actual key.
  const apiKey = 'YOUR_YOUTUBE_API_KEY';
  // Example URL for trending videos (region code may vary based on your filter)
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=${getRegionCode(region)}&maxResults=5&key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map((item, index) => ({
      id: index + 1,
      videoId: item.id,
      title: item.snippet.title,
      views: item.statistics.viewCount,
      likes: item.statistics.likeCount,
      time: new Date(item.snippet.publishedAt).toLocaleString()
    }));
  } catch (error) {
    console.error('Error fetching YouTube trending data:', error);
    return [];
  }
}

// Function to simulate fetching trending data from Twitter API
async function fetchTwitterTrending(region = 'global') {
  // Placeholder: Replace with actual Twitter API call
  // For demonstration, returning static sample data.
  return [
    { id: 1, title: "#TrendingTopic1", views: "4.5M tweets", time: "Trending now" },
    { id: 2, title: "#TrendingTopic2", views: "3.2M tweets", time: "Trending now" },
    { id: 3, title: "#TrendingTopic3", views: "2.8M tweets", time: "Trending now" },
    { id: 4, title: "#TrendingTopic4", views: "2.3M tweets", time: "Trending now" },
    { id: 5, title: "#TrendingTopic5", views: "1.9M tweets", time: "Trending now" }
  ];
}

// Function to simulate fetching trending data from Facebook API
async function fetchFacebookTrending(region = 'global') {
  // Placeholder: Replace with actual Facebook Graph API call.
  return [
    { id: 1, title: "Facebook Trend 1", views: "3.7M people talking", time: "Trending now" },
    { id: 2, title: "Facebook Trend 2", views: "2.9M people talking", time: "Trending now" },
    { id: 3, title: "Facebook Trend 3", views: "2.5M people talking", time: "Trending now" },
    { id: 4, title: "Facebook Trend 4", views: "2.1M people talking", time: "Trending now" },
    { id: 5, title: "Facebook Trend 5", views: "1.8M people talking", time: "Trending now" }
  ];
}

// Function to simulate fetching trending data from TikTok API
async function fetchTikTokTrending(region = 'global') {
  // Placeholder: Replace with an actual TikTok API call (possibly via RapidAPI or TokApi)
  return [
    { id: 1, title: "#TikTokTrend1", views: "8.3B views", time: "Trending now" },
    { id: 2, title: "#TikTokTrend2", views: "6.7B views", time: "Trending now" },
    { id: 3, title: "#TikTokTrend3", views: "5.9B views", time: "Trending now" },
    { id: 4, title: "#TikTokTrend4", views: "4.8B views", time: "Trending now" },
    { id: 5, title: "#TikTokTrend5", views: "4.2B views", time: "Trending now" }
  ];
}

// Utility: Map region to country code (for YouTube API)
function getRegionCode(region) {
  const mapping = {
    global: 'US', // default to US or another popular region
    americas: 'US',
    europe: 'GB',
    asia: 'JP',
    africa: 'ZA',
    oceania: 'AU'
  };
  return mapping[region] || 'US';
}

// Function to update content in all windows
async function updateContent(region, platform) {
  // Clear existing content
  youtubeList.innerHTML = '';
  twitterWindow.innerHTML = '<div class="platform-label">Twitter/X</div>';
  facebookWindow.innerHTML = '<div class="platform-label">Facebook</div>';
  tiktokWindow.innerHTML = '<div class="platform-label">TikTok</div>';

  // Fetch and display YouTube trending items
  const ytData = await fetchYouTubeTrending(region);
  ytData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'trending-item';
    div.innerHTML = `
      <div class="number">${item.id}</div>
      <div class="title">${item.title}</div>
      <div class="metadata">
        <span>${item.views} views</span>
        <span>${item.likes} likes</span>
        <span>${item.time}</span>
      </div>
    `;
    div.addEventListener('click', () => {
      youtubePlayer.src = `https://www.youtube.com/embed/${item.videoId}`;
    });
    youtubeList.appendChild(div);
  });

  // Fetch and display Twitter trending items
  const twData = await fetchTwitterTrending(region);
  twData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'trending-item';
    div.innerHTML = `
      <div class="number">${item.id}</div>
      <div class="title">${item.title}</div>
      <div class="metadata">
        <span>${item.views}</span>
        <span>${item.time}</span>
      </div>
    `;
    twitterWindow.appendChild(div);
  });

  // Fetch and display Facebook trending items
  const fbData = await fetchFacebookTrending(region);
  fbData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'trending-item';
    div.innerHTML = `
      <div class="number">${item.id}</div>
      <div class="title">${item.title}</div>
      <div class="metadata">
        <span>${item.views}</span>
        <span>${item.time}</span>
      </div>
    `;
    facebookWindow.appendChild(div);
  });

  // Fetch and display TikTok trending items
  const ttData = await fetchTikTokTrending(region);
  ttData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'trending-item';
    div.innerHTML = `
      <div class="number">${item.id}</div>
      <div class="title">${item.title}</div>
      <div class="metadata">
        <span>${item.views}</span>
        <span>${item.time}</span>
      </div>
    `;
    tiktokWindow.appendChild(div);
  });

  // Apply platform filter (if not 'all')
  if (platform !== 'all') {
    // Hide non-selected platform windows
    document.querySelectorAll('.window').forEach(win => {
      if (!win.classList.contains(platform)) {
        win.style.display = 'none';
      } else {
        win.style.display = 'block';
      }
    });
    // For YouTube specifically:
    document.querySelector('.youtube-window').style.display = (platform === 'youtube') ? 'grid' : 'none';
  } else {
    // Show all windows
    document.querySelectorAll('.window').forEach(win => win.style.display = 'block');
  }
}

// Event Listeners for Region Filters
regionButtons.forEach(button => {
  button.addEventListener('click', () => {
    regionButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentRegion = button.dataset.region;
    updateContent(currentRegion, currentPlatform);
  });
});

// Event Listeners for Platform Filters
platformButtons.forEach(button => {
  button.addEventListener('click', () => {
    platformButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentPlatform = button.dataset.platform;
    updateContent(currentRegion, currentPlatform);
  });
});

// Modal functionality (for potential video popups)
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalIframe.src = '';
});
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    modalIframe.src = '';
  }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateContent(currentRegion, currentPlatform);
});
