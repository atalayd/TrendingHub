# Trending Hub API and Backend Implementation Guide

This guide provides detailed instructions for implementing the API integrations and backend services for the Trending Hub website.

## API Keys and Configuration

The API keys have been integrated into the `api-config.js` file. Here's what's been configured:

### YouTube API
- API Key: `AIzaSyAJqRA9paFf5Te2sPyQ537lWujyTWPmeYw`
- Implementation: Direct API calls to YouTube Data API v3
- No backend proxy required

### Twitter API
- API Key: `b5thfqqRVtzr6BWd8cxkc9gZI`
- API Key Secret: `l8UU5qxx9EHMKblIuU4O9FD5GWmIvmjx3vIK05g4SueqrW6odT`
- Bearer Token: `AAAAAAAAAAAAAAAAAAAAAEhg3AAAAAAAWPFlPnBRCxQB5O04oDBhY2Uuuhk%3DuDsZuaTa9pLEWkl3IUZAlWaUPEG3voN3iZL7SeY9CWd6YmTctB`
- Implementation: Requires a backend proxy (see Backend Services section)

## Backend Services Implementation

### 1. Twitter API Proxy

Due to CORS restrictions, you need to create a backend proxy for Twitter API requests:

```javascript
// Node.js Express Server
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/twitter-api', async (req, res) => {
  try {
    const woeid = req.query.woeid || 1;
    const response = await axios.get(
      `https://api.twitter.com/1.1/trends/place.json?id=${woeid}`,
      {
        headers: {
          'Authorization': `Bearer ${req.headers.authorization.split(' ')[1]}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Deployment Steps:
1. Create a new directory for your Twitter proxy server
2. Create a file named `server.js` with the code above
3. Initialize a new Node.js project: `npm init -y`
4. Install dependencies: `npm install express cors axios`
5. Deploy to a hosting service like Heroku, Vercel, or Netlify
6. Update the `proxyUrl` in `api-config.js` with your deployed server URL

### 2. Google Trends API (PyTrends)

For Google Trends data, you'll need a Python backend using PyTrends:

```python
# Python Flask Server
from flask import Flask, jsonify, request
from flask_cors import CORS
from pytrends.request import TrendReq
import time

app = Flask(__name__)
CORS(app)

@app.route('/google-trends-api', methods=['GET'])
def get_trending_searches():
    try:
        # Get region from query parameters
        geo = request.args.get('geo', 'GLOBAL')
        
        # Initialize PyTrends
        pytrends = TrendReq(hl='en-US', tz=360)
        
        # Get trending searches for the specified region
        trending_searches = pytrends.trending_searches(pn=geo)
        
        # Format the response
        result = {
            'default': {
                'trendingSearchesDays': [
                    {
                        'date': time.strftime('%Y%m%d'),
                        'trendingSearches': [
                            {
                                'title': {'query': query},
                                'formattedTraffic': '100K'
                            } for query in trending_searches[0].tolist()[:10]
                        ]
                    }
                ]
            }
        }
        
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

#### Deployment Steps:
1. Create a new directory for your Google Trends API server
2. Create a file named `app.py` with the code above
3. Create a requirements.txt file with:
   ```
   flask
   flask-cors
   pytrends
   ```
4. Deploy to a Python-friendly hosting service like Heroku, PythonAnywhere, or Google Cloud
5. Update the `proxyUrl` in `api-config.js` with your deployed server URL

### 3. TikTok Trending Hashtags Scraper

For TikTok trending hashtags, you'll need a web scraper:

```python
# Python Flask Server with Selenium
from flask import Flask, jsonify, request
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json
import re

app = Flask(__name__)
CORS(app)

@app.route('/tiktok-api', methods=['GET'])
def get_trending_hashtags():
    try:
        # Get region from query parameters
        region = request.args.get('region', 'global')
        
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        
        # Initialize the driver
        driver = webdriver.Chrome(options=chrome_options)
        
        # Navigate to TikTok Discover page
        driver.get("https://www.tiktok.com/discover")
        
        # Wait for the page to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "[data-e2e='discover-item']"))
        )
        
        # Extract hashtags
        hashtag_elements = driver.find_elements(By.CSS_SELECTOR, "[data-e2e='discover-item']")
        
        hashtags = []
        for element in hashtag_elements:
            try:
                name = element.find_element(By.CSS_SELECTOR, "strong").text.replace('#', '')
                views_text = element.find_element(By.CSS_SELECTOR, "small").text
                views = int(re.sub(r'[^0-9]', '', views_text))
                
                hashtags.append({
                    "name": name,
                    "views": views
                })
            except Exception as e:
                print(f"Error extracting hashtag: {e}")
        
        # Close the driver
        driver.quit()
        
        return jsonify({"hashtags": hashtags})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
```

#### Deployment Steps:
1. Create a new directory for your TikTok scraper server
2. Create a file named `app.py` with the code above
3. Create a requirements.txt file with:
   ```
   flask
   flask-cors
   selenium
   webdriver-manager
   ```
4. Deploy to a hosting service that supports Selenium (like DigitalOcean, AWS, or a VPS)
5. Update the `proxyUrl` in `api-config.js` with your deployed server URL

## Updating API Configuration

After deploying your backend services, update the `api-config.js` file with your server URLs:

```javascript
// Update these URLs with your deployed server endpoints
twitter: {
    // ...other config...
    proxyUrl: 'https://your-twitter-proxy-server.com/twitter-api',
},
tiktok: {
    // ...other config...
    proxyUrl: 'https://your-tiktok-scraper-server.com/tiktok-api',
},
google: {
    // ...other config...
    proxyUrl: 'https://your-google-trends-server.com/google-trends-api',
}
```

## Container Sizing and Positioning

The containers have been resized according to your specifications:

- YouTube container: 50% of original size, positioned on the left side of the page
- Other platform containers (Google, Twitter, Facebook, TikTok): 30% of original size (70% smaller)

To adjust container sizes and positions, modify these CSS properties:

```css
/* To adjust YouTube container size and position */
.youtube-window {
    width: 50%; /* Change this percentage to resize */
    margin-left: 20px; /* Adjust this value to reposition */
}

/* To adjust platform containers size */
.platform-window {
    width: 30%; /* Change this percentage to resize */
    margin: 0 auto; /* Centers the container */
}
```

## Notes on Facebook API

Facebook discontinued its Trending Topics feature and API access. The current implementation uses sample data for Facebook trending content. If you want to implement a real Facebook data source in the future, you would need to:

1. Use Facebook's Graph API to analyze popular content
2. Create a backend service similar to the other platforms
3. Update the `proxyUrl` in the Facebook section of `api-config.js`

## Troubleshooting

If you encounter issues with the API integrations:

1. Check browser console for errors
2. Verify that your backend services are running and accessible
3. Confirm that the API keys are correctly configured in `api-config.js`
4. Ensure your backend services have proper CORS headers enabled

The website will fall back to sample data if API calls fail, so it will always display content even if the APIs are not working.
