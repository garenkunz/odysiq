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

## Hosting Setup - Split Architecture

This project uses a **split hosting architecture** for optimal performance and cost efficiency:

- **Root Domain** (`odysiq.com`, `www.odysiq.com`) → GitHub Pages (static files)
- **API Subdomain** (`api.odysiq.com`) → Vercel (serverless functions)
- **Testing Domain** (`odysiq.vercel.app`) → Vercel (for development/testing)

### Production Environment Variables

Configure these in your Vercel Dashboard:

```bash
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
NODE_ENV=production
```

### Stripe Webhook Configuration

Set up a webhook in your Stripe Dashboard pointing to:
```
https://api.odysiq.com/api/webhook
```

Required events:
- `payment_intent.succeeded`
- `checkout.session.completed`

### DNS Configuration

In your domain registrar (Squarespace), set up:

**For GitHub Pages (static files):**
- `A` records for root domain pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

**For Vercel (API):**
- `CNAME` record: `api` pointing to `cname.vercel-dns.com`

### Deployment Process

1. **Static Files**: Push to GitHub, automatically deployed to GitHub Pages
2. **API Functions**: Deploy to Vercel, available at `api.odysiq.com`
3. **CORS**: Configured to allow both domains to communicate securely

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