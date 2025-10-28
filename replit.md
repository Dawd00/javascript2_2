# API Fetch Demo Project

## Overview
A simple static website demonstrating how to fetch data from an external API using JavaScript. The project uses the JSONPlaceholder API to demonstrate GET and POST requests.

## Project Type
Static HTML/CSS/JavaScript website

## Current State
The project is fully functional and running on port 5000 with a Python HTTP server.

## Files
- `index.html` - Main HTML page with four buttons to trigger different API calls
- `script.js` - JavaScript code handling API requests with fetch()
- `style.css` - Basic styling for the page

## Features
The site includes four interactive buttons:
1. **example** - Fetches all posts and displays raw JSON
2. **cw1** - Fetches all posts and displays them as a formatted HTML list with loading indicator
3. **cw2** - Fetches a single post (ID: 1) and displays it with formatting
4. **cw3** - Creates a new post via POST request and displays the response

## API Used
JSONPlaceholder (https://jsonplaceholder.typicode.com/) - A free fake API for testing and prototyping

## Server Configuration
- Server Type: Python HTTP server
- Port: 5000
- Command: `python -m http.server 5000`

## Recent Changes
- October 28, 2025: Project imported into Replit environment
- Server successfully started and verified working

## User Preferences
None specified yet

## Project Architecture
Simple static website with no build process or dependencies. All functionality is implemented in vanilla JavaScript with no external libraries.
