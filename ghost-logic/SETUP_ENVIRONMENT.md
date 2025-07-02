# Environment Setup for Ghost Logic Payment System

## Required Environment Variables

Create a `.env` file in the `Ghost Logic` directory with the following variables:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Firebase Admin SDK Configuration (for webhook database updates)
FIREBASE_PRIVATE_KEY_ID=your_private_key_id_here
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----"
FIREBASE_CLIENT_EMAIL=your_client_email_here
FIREBASE_CLIENT_ID=your_client_id_here

# Server Configuration
PORT=3000
```

## How to Get These Values

### 1. Stripe Keys
- Go to your [Stripe Dashboard](https://dashboard.stripe.com/)
- Navigate to Developers > API keys
- Copy your **Secret key** (starts with `sk_live_`)
- For the webhook secret:
  - Go to Developers > Webhooks
  - Create or edit your webhook endpoint
  - Copy the **Signing secret** (starts with `whsec_`)

### 2. Firebase Service Account
- Go to [Firebase Console](https://console.firebase.google.com/)
- Select your project (`odysiq-90653`)
- Go to Project Settings > Service Accounts
- Click "Generate new private key"
- Download the JSON file
- Extract the following values from the JSON:
  - `private_key_id`
  - `private_key` (include the full key with newlines)
  - `client_email`
  - `client_id`

## Webhook Configuration

Your Stripe webhook should:
- Point to: `https://yourdomain.com/api/webhook`
- Listen for these events:
  - `checkout.session.completed`
  - `payment_intent.succeeded`

## Testing the Setup

1. Start the server: `npm start`
2. Check the console for:
   - ✅ Firebase Admin initialized successfully
   - 🚀 Ghost Logic server running on port 3000
3. Test a payment to verify database updates

## Security Notes

⚠️ **Important:**
- Never commit the `.env` file to version control
- Add `.env` to your `.gitignore` file
- Keep your Stripe keys secure and never expose them in client-side code
- The Firebase private key should be kept confidential

## Current Status

The system will work without environment variables using fallback values, but for production:
- Set all environment variables properly
- Configure your Stripe webhook endpoint
- Test the full payment flow

## Troubleshooting

If payments aren't updating the database:
1. Check server logs for Firebase connection errors
2. Verify Stripe webhook delivery in Stripe Dashboard
3. Ensure the webhook endpoint is accessible from the internet
4. Check that the user ID is being passed correctly in payment metadata 