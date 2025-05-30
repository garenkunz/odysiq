# StoryPaths - User Guide

## Introduction

Welcome to StoryPaths! This guide will help you manage and edit your choose-your-own-adventure stories, even if you don't have a technical background. We've created a simple system that allows you to modify existing stories and add new ones without needing to edit HTML code directly.

## What's Included

1. **Website Files** - The complete website with all HTML files
2. **Story Data** - A JSON file containing all story content
3. **Visual Editor** - A simple tool to edit stories without coding
4. **Instructions** - This guide to help you manage everything

## Getting Started

### Option 1: Using GitHub (Recommended)

GitHub is a platform that makes it easy to store, manage, and update your website files. Here's how to get started:

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com) and sign up for a free account
   - This will be where you store and manage your website files

2. **Create a New Repository**
   - Click the "+" icon in the top right and select "New repository"
   - Name it "storypaths" or something similar
   - Make it public (or private if you prefer)
   - Click "Create repository"

3. **Upload Your Files**
   - In your new repository, click "Add file" > "Upload files"
   - Drag and drop all the files from the ZIP package
   - Add a commit message like "Initial upload"
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to your repository settings (click "Settings" tab)
   - Scroll down to "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - GitHub will provide you with a URL where your site is published

### Option 2: Using Your Computer

If you prefer to work locally on your computer:

1. **Extract the ZIP File**
   - Save the ZIP file to your computer
   - Extract all files to a folder named "storypaths"

2. **Edit Stories**
   - Open the `cms/editor.html` file in your web browser
   - Use the visual editor to modify stories (instructions below)

3. **Update Your Website**
   - After editing, you'll need to upload the updated files to your web hosting

## Using the Visual Editor

The visual editor makes it easy to modify stories without editing code:

1. **Open the Editor**
   - Navigate to the `cms/editor.html` file in your web browser
   - You'll see the editor interface with your stories listed

2. **Select a Story**
   - Click on one of the story buttons at the top (Final Seconds, Lost Horizons, etc.)
   - The editor will load that story's content

3. **Edit Story Nodes**
   - Each story is made up of "nodes" (scenes or decision points)
   - Select a node from the list to edit it
   - Or click "Add New Node" to create a new scene

4. **Edit Messages**
   - Each node contains messages (text that appears in the story)
   - You can add, edit, or delete messages
   - Select a message type (System, Agent, etc.) and enter your text

5. **Edit Choices**
   - Each node (except paywall nodes) has two choices
   - Edit the text for each choice
   - Set which node should come next when that choice is selected

6. **Save Your Changes**
   - Click "Save Node" to save your changes to that node
   - Continue editing other nodes as needed

7. **Export the JSON**
   - When you're finished editing, click "Export JSON"
   - Copy the JSON code or save it to a file
   - Replace the content in `cms/stories.json` with your updated JSON

## Updating Your Website

After editing your stories, you'll need to update your website:

### If Using GitHub:

1. Go to your GitHub repository
2. Navigate to the `cms/stories.json` file
3. Click the pencil icon to edit
4. Replace the content with your new JSON
5. Add a commit message like "Updated stories"
6. Click "Commit changes"
7. Your website will automatically update

### If Using Your Computer:

1. Replace the `cms/stories.json` file with your updated version
2. Upload the updated file to your web hosting

## Adding New Stories

To add a completely new story:

1. In the editor, create a new story structure in the JSON
2. Follow the same format as the existing stories
3. Give it a unique ID, title, and theme
4. Create at least a "start" node and a "paywall" node
5. Update the `cms/stories.json` file with your new story
6. Update the website files to include your new story

## Getting Help

If you need assistance:

1. Review this guide for step-by-step instructions
2. Check the comments in the JSON file for formatting examples
3. Look at the existing stories as templates for your own

## Backing Up Your Work

Always keep backups of your stories:

1. Save copies of your `stories.json` file regularly
2. If using GitHub, your changes are automatically saved in the commit history
3. Consider downloading a full copy of your website files periodically

## Advanced: Customizing Fonts and Colors

If you want to change the fonts or colors:

1. Each story has a "theme" property in the JSON
2. The theme controls the fonts and accent colors
3. To change these, you would need to edit the CSS in the HTML files
4. Consider hiring a web developer for more complex customizations

---

Remember, this system is designed to be simple for non-technical users. Focus on creating great story content, and the system will handle the technical aspects for you!
