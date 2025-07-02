const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_live_YOUR_SECRET_KEY_HERE'); // Replace with your actual secret key
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
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

        // Retrieve the coupon from Stripe
        const coupon = await stripe.coupons.retrieve(promoCode.toLowerCase());
        
        if (!coupon || !coupon.valid) {
            return res.status(400).json({ 
                valid: false, 
                error: 'Invalid or expired promo code' 
            });
        }

        // Calculate discount
        let discount = '';
        let finalPrice = '$4.99';
        
        if (coupon.percent_off) {
            discount = `${coupon.percent_off}% off`;
            const discountedAmount = 499 * (1 - coupon.percent_off / 100);
            finalPrice = `$${(discountedAmount / 100).toFixed(2)}`;
        } else if (coupon.amount_off) {
            discount = `$${(coupon.amount_off / 100).toFixed(2)} off`;
            const discountedAmount = 499 - coupon.amount_off;
            finalPrice = discountedAmount <= 0 ? 'FREE' : `$${(discountedAmount / 100).toFixed(2)}`;
        }

        res.json({
            valid: true,
            discount: discount,
            finalPrice: finalPrice,
            couponId: coupon.id
        });

    } catch (error) {
        console.error('Error validating promo code:', error);
        if (error.code === 'resource_missing') {
            res.status(400).json({ 
                valid: false, 
                error: 'Promo code not found' 
            });
        } else {
            res.status(500).json({ 
                valid: false, 
                error: 'Error validating promo code' 
            });
        }
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
                        product_data: {
                            name: 'Ghost Logic - Full Story',
                            description: 'Unlock the complete cyber-noir adventure and discover Ash\'s mystery.',
                            images: ['https://your-domain.com/ghost-logic-cover.jpg'], // Optional: Add cover image
                        },
                        unit_amount: 499, // $4.99 in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: successUrl || `${req.headers.origin}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl || `${req.headers.origin}?payment=cancelled`,
            customer_email: userEmail,
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

        // Add coupon if promo code is provided
        if (promoCode) {
            try {
                // Validate the coupon exists and is valid
                const coupon = await stripe.coupons.retrieve(promoCode.toLowerCase());
                if (coupon && coupon.valid) {
                    sessionConfig.discounts = [{
                        coupon: coupon.id
                    }];
                    // Add promo code to metadata
                    sessionConfig.metadata.promoCode = promoCode;
                }
            } catch (couponError) {
                console.error('Error applying coupon:', couponError);
                return res.status(400).json({ 
                    error: 'Invalid promo code' 
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
app.post('/api/webhook', express.raw({type: 'application/json'}), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = 'whsec_your_webhook_secret_here'; // Replace with your webhook secret

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Payment successful for session:', session.id);
            
            // Here you would update your database to mark the user as paid
            // For this demo, we'll just log it
            console.log('User should be marked as paid:', session.metadata.userId);
            break;
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('Payment intent succeeded:', paymentIntent.id);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
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