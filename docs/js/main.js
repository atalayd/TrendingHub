/**
 * Trending Hub - Main JavaScript
 * This file contains all the interactive functionality for the Trending Hub website
 */

// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

/**
 * Initialize the application with default settings
 */
function initApp() {
    // Set default region and platform
    let currentRegion = 'global';
    let currentPlatform = 'all';
    
    // Load initial content
    loadContent(currentRegion, currentPlatform);
    
    // Set up event listeners
    setupEventListeners();
}

/**
 * Set up all event listeners for interactive elements
 */
function setupEventListeners() {
    // Region filter buttons
    const regionButtons = document.querySelectorAll('.region-btn');
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button styling
            document.querySelector('.region-btn.active').classList.remove('active');
            this.classList.add('active');
            
            // Get selected region and update content
            const region = this.getAttribute('data-region');
            const platform = document.querySelector('.platform-btn.active').getAttribute('data-platform');
            loadContent(region, platform);
        });
    });
    
    // Platform filter buttons
    const platformButtons = document.querySelectorAll('.platform-btn');
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button styling
            document.querySelector('.platform-btn.active').classList.remove('active');
            this.classList.add('active');
            
            // Get selected platform and update content
            const platform = this.getAttribute('data-platform');
            const region = document.querySelector('.region-btn.active').getAttribute('data-region');
            loadContent(region, platform);
        });
    });
    
    // Country card click handlers
    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(card => {
        card.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            const videoData = countryVideos[region];
            
            if (videoData) {
                openVideoModal(videoData.videoId, videoData.title);
            }
        });
    });
    
    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Close the parent modal
            this.closest('.modal').style.display = 'none';
            
            // Stop video playback if it's the video modal
            if (this.closest('.modal').id === 'video-modal') {
                document.getElementById('modal-iframe').src = '';
            }
        });
    });
    
    // Close modals when clicking outside content
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
                
                // Stop video playback if it's the video modal
                if (modal.id === 'video-modal') {
                    document.getElementById('modal-iframe').src = '';
                }
            }
        });
    });
}

/**
 * Load content based on selected region and platform
 * @param {string} region - Selected region (global, americas, europe, asia, africa, oceania)
 * @param {string} platform - Selected platform (all, youtube, twitter, facebook, tiktok)
 */
function loadContent(region, platform) {
    // Get data for the selected region
    const regionData = trendingData[region];
    
    // Clear existing content
    clearContent();
    
    // Load content for each platform based on filter
    if (platform === 'all' || platform === 'youtube') {
        loadYouTubeContent(regionData.youtube);
    }
    
    if (platform === 'all' || platform === 'google') {
        loadPlatformContent('google', regionData.google);
    }
    
    if (platform === 'all' || platform === 'twitter') {
        loadPlatformContent('twitter', regionData.twitter);
    }
    
    if (platform === 'all' || platform === 'facebook') {
        loadPlatformContent('facebook', regionData.facebook);
    }
    
    if (platform === 'all' || platform === 'tiktok') {
        loadPlatformContent('tiktok', regionData.tiktok);
    }
    
    // Add click handlers for all trending items
    addTrendingItemClickHandlers();
}

/**
 * Clear all content from platform windows
 */
function clearContent() {
    document.getElementById('youtube-list').innerHTML = '';
    document.getElementById('google-list').innerHTML = '';
    document.getElementById('twitter-list').innerHTML = '';
    document.getElementById('facebook-list').innerHTML = '';
    document.getElementById('tiktok-list').innerHTML = '';
    
    // Reset YouTube player
    document.getElementById('youtube-player').src = '';
}

/**
 * Load YouTube content into the YouTube window
 * @param {Array} youtubeData - Array of YouTube trending items
 */
function loadYouTubeContent(youtubeData) {
    const youtubeList = document.getElementById('youtube-list');
    
    youtubeData.forEach(item => {
        const youtubeItem = document.createElement('div');
        youtubeItem.className = 'trending-item youtube-item';
        youtubeItem.setAttribute('data-video-id', item.videoId);
        
        youtubeItem.innerHTML = `
            <div class="number">${item.id}</div>
            <div class="thumbnail">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="content">
                <div class="title">${item.title}</div>
                <div class="meta">
                    <div class="views"><i class="fas fa-eye"></i> ${item.views}</div>
                    <div class="likes"><i class="fas fa-thumbs-up"></i> ${item.likes}</div>
                    <div class="time">${item.time}</div>
                </div>
            </div>
        `;
        
        youtubeList.appendChild(youtubeItem);
        
        // Add click event to play video in the preview area
        youtubeItem.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            playYouTubeVideo(videoId);
        });
    });
    
    // Play the first video by default if there are videos
    if (youtubeData.length > 0) {
        playYouTubeVideo(youtubeData[0].videoId);
    }
}

/**
 * Load content for other platforms (Google, Twitter, Facebook, TikTok)
 * @param {string} platform - Platform name
 * @param {Array} platformData - Array of trending items for the platform
 */
function loadPlatformContent(platform, platformData) {
    const platformList = document.getElementById(`${platform}-list`);
    
    platformData.forEach(item => {
        const trendingItem = document.createElement('div');
        trendingItem.className = 'trending-item';
        trendingItem.setAttribute('data-platform', platform);
        trendingItem.setAttribute('data-title', item.title);
        
        trendingItem.innerHTML = `
            <div class="number">${item.id}</div>
            <div class="title">${item.title}</div>
            <div class="meta">
                <div class="time">${item.time}</div>
            </div>
        `;
        
        platformList.appendChild(trendingItem);
    });
}

/**
 * Add click handlers to all trending items
 */
function addTrendingItemClickHandlers() {
    // Google trending items
    const googleItems = document.querySelectorAll('#google-list .trending-item');
    googleItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title)}`;
            openContentModal('Google Search', `<iframe src="${searchUrl}" width="100%" height="500px"></iframe>`);
        });
    });
    
    // Twitter trending items
    const twitterItems = document.querySelectorAll('#twitter-list .trending-item');
    twitterItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const searchUrl = `https://twitter.com/search?q=${encodeURIComponent(title)}`;
            openContentModal('Twitter Search', `<iframe src="${searchUrl}" width="100%" height="500px"></iframe>`);
        });
    });
    
    // Facebook trending items
    const facebookItems = document.querySelectorAll('#facebook-list .trending-item');
    facebookItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const searchUrl = `https://www.facebook.com/search/top/?q=${encodeURIComponent(title)}`;
            openContentModal('Facebook Search', `<iframe src="${searchUrl}" width="100%" height="500px"></iframe>`);
        });
    });
    
    // TikTok trending items
    const tiktokItems = document.querySelectorAll('#tiktok-list .trending-item');
    tiktokItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const searchUrl = `https://www.tiktok.com/tag/${encodeURIComponent(title.replace('#', ''))}`;
            openContentModal('TikTok Tag', `<iframe src="${searchUrl}" width="100%" height="500px"></iframe>`);
        });
    });
}

/**
 * Play a YouTube video in the preview area
 * @param {string} videoId - YouTube video ID
 */
function playYouTubeVideo(videoId) {
    const youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
}

/**
 * Open the video modal with a specific YouTube video
 * @param {string} videoId - YouTube video ID
 * @param {string} title - Video title
 */
function openVideoModal(videoId, title) {
    const modalIframe = document.getElementById('modal-iframe');
    modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
    
    const videoModal = document.getElementById('video-modal');
    videoModal.style.display = 'flex';
}

/**
 * Open the content modal with custom content
 * @param {string} title - Modal title
 * @param {string} content - HTML content for the modal
 */
function openContentModal(title, content) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<h2>${title}</h2>${content}`;
    
    const contentModal = document.getElementById('content-modal');
    contentModal.style.display = 'flex';
}
