# Odysiq - Interactive Narrative Stories

Odysiq is a collection of immersive, choice-driven interactive stories that put you in control of critical decisions. Each story features real-time consequences, emotional tracking, and multiple branching narratives.

## Stories

### 🚨 Final Seconds
Guide a hostage negotiator through life-or-death decisions as Agent Emma Carter. Your choices impact:
- Negotiator's stress and trust levels
- Hostage safety and survival
- Story outcomes and emotional consequences

### 🏝️ Lost Horizons  
Navigate an uncharted island's mysteries as you search for a way back to civilization.

### 🌌 Quantum Paradox
Make choices that alter reality as you travel through parallel universes and temporal anomalies.

## Features

- **Real-time decision making** with timed choices
- **Emotional consequence tracking** that affects future scenarios  
- **Multiple story branches** leading to different outcomes
- **Immersive chat-style interface** 
- **Replayability** with different choices leading to varied endings

## Hosting Setup

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all files from the `website/` directory
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Custom Domain with GitHub Pages

1. Follow Option 1 steps above
2. Add a `CNAME` file to your repository with your domain name
3. In your domain registrar (Squarespace), configure DNS:
   - Add CNAME record: `www` pointing to `yourusername.github.io`
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153  
     - 185.199.110.153
     - 185.199.111.153

### Option 3: Netlify/Vercel

1. Connect your GitHub repository to Netlify or Vercel
2. Set build directory to `website/`
3. Configure custom domain in the platform dashboard
4. Update DNS settings in Squarespace to point to the platform

## Development

The stories are built with vanilla HTML, CSS, and JavaScript for maximum compatibility and fast loading times.

### Story Structure

Each story follows this pattern:
- Initial scenario setup
- Branching choice mechanics  
- Real-time metric tracking (stress, trust, etc.)
- Multiple ending scenarios
- Paywall integration for full story access

## License

© 2024 Odysiq. All rights reserved. 