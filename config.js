// Configuration for Ghost Logic Story
// Replace these values with your actual Stripe keys

window.STRIPE_PUBLISHABLE_KEY = 'pk_live_51RPsDDF1PKUfyTKZ4hwMRPHzeW9Y8f3tBZ9dOv9P3wl1YoVh46Gahqxr1RdVpg85A65sJuYC6s28qdiEDsrdzZ1C00T7m6652p';

// Server configuration for split hosting
// Root domain (odysiq.com) serves static files via GitHub Pages
// API subdomain (api.odysiq.com) serves serverless functions via Vercel
window.API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000'  // Development
    : 'https://api.odysiq.com'; // Production API subdomain

console.log('🌐 API Base URL (Split Hosting):', window.API_BASE_URL);

// Note: For production deployment:
// 1. Root domain (odysiq.com) uses GitHub Pages for static files
// 2. API subdomain (api.odysiq.com) uses Vercel for serverless functions
// 3. This publishable key is safe to include in frontend code
// 4. CORS is configured to allow both odysiq.com and www.odysiq.com

console.log('🔑 Stripe configuration loaded'); 