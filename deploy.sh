#!/bin/bash

# Odysiq Deployment Script
# This script automates the deployment process to GitHub Pages

echo "🚀 Starting Odysiq deployment..."

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository. Please run 'git init' first."
    exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo "📝 Detected changes. Adding to git..."
    git add .
    
    # Get commit message from user or use default
    if [ -z "$1" ]; then
        COMMIT_MSG="Update Odysiq interactive stories - $(date '+%Y-%m-%d %H:%M')"
    else
        COMMIT_MSG="$1"
    fi
    
    echo "💾 Committing changes: $COMMIT_MSG"
    git commit -m "$COMMIT_MSG"
else
    echo "✅ No changes to commit"
fi

# Check if origin remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No origin remote found. Please set up your GitHub repository:"
    echo "   git remote add origin https://github.com/yourusername/odysiq.git"
    exit 1
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub!"
    echo "🌐 Your site will be available at:"
    echo "   https://yourusername.github.io/odysiq/"
    echo "   https://odysiq.com (once DNS is configured)"
    echo ""
    echo "📖 Next steps:"
    echo "   1. Enable GitHub Pages in repository settings"
    echo "   2. Configure custom domain (see DEPLOYMENT.md)"
    echo "   3. Wait for DNS propagation (up to 24 hours)"
else
    echo "❌ Deployment failed. Please check your git configuration."
    exit 1
fi 