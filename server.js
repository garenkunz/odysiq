const express = require('express');
const cors = require('cors');
const path = require('path');

// Load environment variables
require('dotenv').config();

// Firebase Admin SDK
const admin = require('firebase-admin');
let db = null;

// Initialize Firebase Admin SDK
function initializeFirebaseAdmin() {
    try {
        if (admin.apps.length > 0) {
            console.log('🔥 Firebase Admin already initialized');
            return admin.firestore();
        }

        // Check if we have the required environment variables
        const requiredEnvVars = [
            'FIREBASE_PRIVATE_KEY_ID',
            'FIREBASE_PRIVATE_KEY', 
            'FIREBASE_CLIENT_EMAIL',
            'FIREBASE_CLIENT_ID'
        ];

        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
        
        if (missingVars.length > 0) {
            console.log('⚠️ Firebase Admin not initialized - missing environment variables:', missingVars);
            console.log('💡 The server will run without webhook database updates');
            console.log('📝 See SETUP_ENVIRONMENT.md for configuration instructions');
            return null;
        }

        // For local development, use the service account key
        const serviceAccount = {
            "type": "service_account",
            "project_id": "odysiq-90653",
            "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
            "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            "client_email": process.env.FIREBASE_CLIENT_EMAIL,
            "client_id": process.env.FIREBASE_CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs"
        };

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://odysiq-90653-default-rtdb.firebaseapp.com"
        });

        console.log('🔥 Firebase Admin initialized successfully');
        return admin.firestore();
        
    } catch (error) {
        console.error('❌ Firebase Admin initialization failed:', error);
        console.log('💡 The server will continue without webhook database updates');
        console.log('📝 See SETUP_ENVIRONMENT.md for configuration instructions');
        return null;
    }
}

// Try to initialize Firebase
db = initializeFirebaseAdmin();

// Use environment variable for Stripe secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Enhanced CORS configuration for Firebase
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'https://odysiq-90653.firebaseapp.com',
        'https://odysiq-90653.web.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'stripe-signature']
};

// Middleware
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

app.use('/api/webhook', express.raw({type: 'application/json'})); // Raw for webhook
app.use(express.json());
app.use(express.static('.'));

// Serve the story player
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'story-player.html'));
});

// Validate promo code
app.post('/api/validate-promo-code', async (req, res) => {
    try {
        const { promoCode, userId } = req.body;

        console.log('🎫 Validating promo code:', promoCode);

        // First, find the promotion code in Stripe
        const promotionCodes = await stripe.promotionCodes.list({
            code: promoCode.toUpperCase(), // Promotion codes are typically uppercase
            limit: 1
        });

        if (promotionCodes.data.length === 0) {
            console.log('❌ Promotion code not found:', promoCode);
            return res.status(400).json({ 
                valid: false, 
                error: 'Promo code not found' 
            });
        }

        const promotionCodeObj = promotionCodes.data[0];
        
        // Check if the promotion code is active
        if (!promotionCodeObj.active) {
            console.log('❌ Promotion code is inactive:', promoCode);
            return res.status(400).json({ 
                valid: false, 
                error: 'Promo code is no longer active' 
            });
        }

        // Get the associated coupon
        const coupon = promotionCodeObj.coupon;
        
        if (!coupon.valid) {
            console.log('❌ Associated coupon is invalid:', coupon.id);
            return res.status(400).json({ 
                valid: false, 
                error: 'Promo code is invalid or expired' 
            });
        }

        console.log('✅ Valid promotion code found:', {
            code: promoCode,
            couponId: coupon.id,
            discount: coupon.percent_off ? `${coupon.percent_off}%` : `$${coupon.amount_off / 100}`
        });

        // Calculate discount
        let discount = '';
        let finalPrice = '$2.99';
        
        if (coupon.percent_off) {
            discount = `${coupon.percent_off}% off`;
            const discountedAmount = 299 * (1 - coupon.percent_off / 100);
            finalPrice = `$${(discountedAmount / 100).toFixed(2)}`;
        } else if (coupon.amount_off) {
            discount = `$${(coupon.amount_off / 100).toFixed(2)} off`;
            const discountedAmount = 299 - coupon.amount_off;
            finalPrice = discountedAmount <= 0 ? 'FREE' : `$${(discountedAmount / 100).toFixed(2)}`;
        }

        res.json({
            valid: true,
            discount: discount,
            finalPrice: finalPrice,
            couponId: coupon.id,
            promotionCodeId: promotionCodeObj.id
        });

    } catch (error) {
        console.error('❌ Error validating promo code:', error);
        res.status(500).json({ 
            valid: false, 
            error: 'Error validating promo code. Please try again.' 
        });
    }
});

// Create Stripe checkout session
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { userId, userEmail, promoCode, successUrl, cancelUrl } = req.body;

        const sessionConfig = {
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product: 'prod_SbQXFQS9WsAXl3', // Use your existing product with uploaded image
                        unit_amount: 299, // $2.99 in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: successUrl || `${req.headers.origin}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl || `${req.headers.origin}?payment=cancelled`,
            customer_email: userEmail,
            automatic_tax: {
                enabled: true
            },
            metadata: {
                userId: userId,
                product: 'ghost_logic_full_story'
            },
            // Automatically fulfill the order when payment succeeds
            payment_intent_data: {
                metadata: {
                    userId: userId,
                    product: 'ghost_logic_full_story'
                }
            }
        };

        // Add promotion code if provided
        if (promoCode) {
            try {
                console.log('🎫 Applying promo code to checkout session:', promoCode);
                
                // Find the promotion code in Stripe
                const promotionCodes = await stripe.promotionCodes.list({
                    code: promoCode.toUpperCase(),
                    limit: 1
                });
                
                if (promotionCodes.data.length === 0) {
                    console.log('❌ Promotion code not found for checkout:', promoCode);
                    return res.status(400).json({ 
                        error: 'Invalid promo code' 
                    });
                }
                
                const promotionCodeObj = promotionCodes.data[0];
                
                if (!promotionCodeObj.active) {
                    console.log('❌ Promotion code inactive for checkout:', promoCode);
                    return res.status(400).json({ 
                        error: 'Promo code is no longer active' 
                    });
                }
                
                // Apply the promotion code to the checkout session
                sessionConfig.discounts = [{
                    promotion_code: promotionCodeObj.id
                }];
                
                // Add promo code to metadata
                sessionConfig.metadata.promoCode = promoCode;
                sessionConfig.metadata.promotionCodeId = promotionCodeObj.id;
                
                console.log('✅ Promotion code applied to checkout session');
                
            } catch (promoError) {
                console.error('❌ Error applying promotion code:', promoError);
                return res.status(400).json({ 
                    error: 'Error applying promo code' 
                });
            }
        }

        const session = await stripe.checkout.sessions.create(sessionConfig);

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

// Webhook to handle successful payments
app.post('/api/webhook', async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_your_webhook_secret_here'; // Set your webhook secret

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('❌ Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('💳 Payment successful for session:', session.id);
            
            try {
                const userId = session.metadata.userId;
                const userEmail = session.customer_email;
                
                if (!userId) {
                    console.error('❌ No userId in session metadata');
                    return res.status(400).send('Missing userId in metadata');
                }

                // Update user's payment status in Firestore (if Firebase Admin is available)
                if (db) {
                    await db.collection('users').doc(userId).update({
                        paid: true,
                        subscription: 'premium',
                        paidAt: admin.firestore.FieldValue.serverTimestamp(),
                        storiesOwned: admin.firestore.FieldValue.arrayUnion('ghost-logic'),
                        stripeCustomerId: session.customer,
                        lastPaymentSessionId: session.id
                    });

                    console.log('✅ User payment status updated in Firebase:', userId);
                } else {
                    console.log('⚠️ Firebase Admin not available - database not updated');
                    console.log('💡 Payment successful but user status must be updated manually');
                    console.log('👤 User ID:', userId);
                    console.log('📧 User email:', userEmail);
                }
                
            } catch (error) {
                console.error('❌ Error updating user payment status:', error);
                if (db) {
                    return res.status(500).send('Error updating database');
                } else {
                    console.log('💡 Payment successful but database update failed - user should contact support');
                }
            }
            
            break;
            
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('💰 Payment intent succeeded:', paymentIntent.id);
            break;
            
        default:
            console.log(`⚡ Unhandled event type: ${event.type}`);
    }

    res.json({received: true});
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Ghost Logic server running on port ${PORT}`);
    console.log(`📖 Story available at http://localhost:${PORT}`);
    console.log(`💳 Payment processing enabled`);
});

module.exports = app;