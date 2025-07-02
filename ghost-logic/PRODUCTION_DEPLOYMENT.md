# Ghost Logic Production Deployment Guide

## 🚀 Complete Deployment Process

Your Ghost Logic story with paywall system has **two components** that need to be deployed:

1. **Client-side** (HTML/CSS/JS) → GitHub Pages
2. **Server-side** (Node.js API) → Vercel/Railway/Render

## Step 1: Deploy Server to Vercel

### 1.1 Setup Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Install Vercel CLI: `npm i -g vercel`

### 1.2 Deploy the Server
1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Add production deployment configuration"
   git push origin main
   ```

2. Create new Vercel project:
   - Go to Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Select the `ghost-logic` folder as root directory
   - Deploy!

### 1.3 Configure Environment Variables
In your Vercel dashboard, go to Settings → Environment Variables and add:

```
STRIPE_SECRET_KEY=sk_live_YOUR_STRIPE_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_PRODUCTION_WEBHOOK_SECRET
FIREBASE_PRIVATE_KEY_ID=your_firebase_private_key_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_CLIENT_ID=your_firebase_client_id
FIREBASE_PROJECT_ID=odysiq-90653
```

### 1.4 Setup Production Webhooks
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
2. Create new webhook endpoint
3. Set URL to: `https://your-vercel-app.vercel.app/api/webhook`
4. Select events: `checkout.session.completed`
5. Copy webhook secret to Vercel environment variables

## Step 2: Deploy Client to GitHub Pages

### 2.1 Commit Changes
```bash
cd ghost-logic
git add .
git commit -m "Add paywall system with production deployment"
git push origin main
```

### 2.2 Enable GitHub Pages
1. Go to your GitHub repository
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main`
5. Folder: `/ (root)`

## Step 3: Alternative Server Deployment Options

### Option B: Railway
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Deploy from `Ghost Logic` folder
4. Add same environment variables
5. Configure custom domain if needed

### Option C: Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set root directory to `Ghost Logic`
5. Build command: `npm install`
6. Start command: `node server.js`
7. Add environment variables

## Step 4: Configure Custom Domain (Optional)

### For Vercel Deployment
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain (e.g., `api.odysiq.com`)
3. Configure DNS records as instructed

### For Main Site (GitHub Pages)
Keep your existing domain configuration for the main site.

## Step 5: Test Production Deployment

### Test Server
Visit your Vercel URL: `https://your-app.vercel.app`
- Should show your Ghost Logic story
- Payment system should work
- Webhooks should update Firebase

### Test Client
Visit your GitHub Pages URL: `https://yourusername.github.io/your-repo/Ghost%20Logic/story-player.html`
- Should connect to production server
- Payments should process correctly

## 🔧 Configuration Details

### Environment Detection
The system automatically detects if you're on localhost or production:

```javascript
// Development: uses http://localhost:3000
// Production: uses same domain (relative URLs)
window.API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000'  
    : '';  
```

### File Structure
```
ghost-logic/
├── server.js              # Node.js server (Vercel)
├── story-player.html      # Main story file (GitHub Pages)
├── config.js              # Configuration
├── vercel.json            # Vercel deployment config
├── package.json           # Node.js dependencies
└── .env.example           # Environment template (don't commit .env)
```

## 🚨 Security Checklist

- [ ] Never commit `.env` files to git
- [ ] Use environment variables for all secrets
- [ ] Configure CORS if needed
- [ ] Test webhook signatures
- [ ] Verify Firebase security rules
- [ ] Test payment flow end-to-end

## 🐛 Troubleshooting

### Common Issues:

**"Server not responding"**
- Check Vercel deployment logs
- Verify environment variables are set
- Test API endpoints directly

**"Payment failed"**
- Check Stripe webhook configuration
- Verify webhook secret matches
- Check Stripe dashboard for events

**"Firebase permission denied"**
- Verify Firebase credentials in Vercel
- Check Firestore security rules
- Test Firebase connection

### Debug Commands:
```bash
# Test server health
curl https://your-app.vercel.app/api/health

# Check webhook endpoint
curl -X POST https://your-app.vercel.app/api/webhook
```

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Stripe: [stripe.com/docs](https://stripe.com/docs)
- Firebase: [firebase.google.com/docs](https://firebase.google.com/docs) 