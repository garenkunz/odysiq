// Configuration for Ghost Logic Story
// Replace these values with your actual Stripe keys

window.STRIPE_PUBLISHABLE_KEY = 'pk_live_51RPsDDF1PKUfyTKZ4hwMRPHzeW9Y8f3tBZ9dOv9P3wl1YoVh46Gahqxr1RdVpg85A65sJuYC6s28qdiEDsrdzZ1C00T7m6652p';

// Server configuration
window.API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000'  // Development
    : window.location.origin;  // Production (current domain)

// Note: For production deployment:
// 1. Replace pk_live_YOUR_STRIPE_PUBLISHABLE_KEY_HERE with your actual Stripe publishable key
// 2. Set STRIPE_SECRET_KEY environment variable on your server
// 3. This publishable key is safe to include in frontend code
// 4. API_BASE_URL will automatically use localhost for development and same domain for production

console.log('🔑 Stripe configuration loaded');
console.log('🌐 API Base URL:', window.API_BASE_URL); 