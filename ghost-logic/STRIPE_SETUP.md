# Stripe Configuration Setup

This guide explains how to securely configure Stripe payment processing for Ghost Logic.

## 🔑 Required Stripe Keys

You need two Stripe keys from your [Stripe Dashboard](https://dashboard.stripe.com/apikeys):

1. **Publishable Key** (starts with `pk_live_` or `pk_test_`)
2. **Secret Key** (starts with `sk_live_` or `sk_test_`)

## 🖥️ Frontend Configuration (Publishable Key)

### Option 1: Edit config.js (Recommended)
1. Open `config.js`
2. Replace `pk_live_YOUR_STRIPE_PUBLISHABLE_KEY_HERE` with your actual publishable key
3. Save the file

```javascript
window.STRIPE_PUBLISHABLE_KEY = 'pk_live_51RPsDDF1PKUfyTKZ...'; // Your actual key
```

### Option 2: Set via Script Tag
Add this script tag before the Stripe initialization:
```html
<script>
window.STRIPE_PUBLISHABLE_KEY = 'pk_live_51RPsDDF1PKUfyTKZ...';
</script>
```

## 🖥️ Server Configuration (Secret Key)

### For Local Development
Create a `.env` file in the Ghost Logic directory:
```
STRIPE_SECRET_KEY=sk_live_51RPsDDF1PKUfyTKZ...
```

### For Production Deployment
Set the environment variable on your hosting platform:
- **Vercel**: Dashboard → Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables  
- **Railway**: Variables tab
- **Heroku**: Settings → Config Vars

Variable name: `STRIPE_SECRET_KEY`
Variable value: `sk_live_51RPsDDF1PKUfyTKZ...` (your actual secret key)

## 🔒 Security Notes

✅ **Safe to include in frontend code:**
- Publishable keys (`pk_live_` or `pk_test_`)

❌ **NEVER include in frontend code:**
- Secret keys (`sk_live_` or `sk_test_`)
- Webhook secrets (`whsec_`)

## 🧪 Testing Setup

For testing, use Stripe's test keys:
- Test Publishable Key: `pk_test_...`
- Test Secret Key: `sk_test_...`

## 🚀 Production Deployment Checklist

- [ ] Publishable key added to `config.js`
- [ ] Secret key set as environment variable
- [ ] Test a payment flow
- [ ] Webhook endpoints configured (if using webhooks)
- [ ] Remove any test/development keys

## 🆘 Troubleshooting

### "No API key provided" Error
- Check that `config.js` is loading correctly
- Verify the publishable key is set in `window.STRIPE_PUBLISHABLE_KEY`

### "Invalid API key" Error
- Ensure you're using the correct key format (`pk_live_` for production)
- Check for extra spaces or characters in the key

### Server webhook errors
- Verify `STRIPE_SECRET_KEY` environment variable is set
- Check server logs for initialization messages 