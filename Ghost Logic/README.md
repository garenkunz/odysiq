# Ghost Logic - Interactive Story

This directory contains the Ghost Logic interactive story files.

## Files
- `story-player.html` - The main story interface
- `Ghost-Logic.JSON` - The story data in JSON format
- `serve.py` - Python server script to run the story locally

## How to Run

### Option 1: Using Python Server (Recommended)
1. Open Terminal/Command Prompt
2. Navigate to the `Ghost Logic` directory:
   ```bash
   cd "Ghost Logic"
   ```
3. Run the Python server:
   ```bash
   python3 serve.py
   ```
4. Open your browser and go to: `http://localhost:8000/story-player.html`

### Option 2: Direct File Access
If you're getting CORS errors when opening `story-player.html` directly, use the Python server method above.

## Troubleshooting

### "Failed to load story" Error
This usually happens due to CORS restrictions when opening HTML files directly. Use the Python server method to resolve this.

### Console Debugging
Open your browser's Developer Tools (F12) and check the Console tab for detailed error messages.

## Story Format
The story is exported from Twine in JSON format and contains interactive passages with choices that lead to different story paths. 