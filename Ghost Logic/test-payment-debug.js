// Debug script to test payment verification
require('dotenv').config();
const admin = require('firebase-admin');

async function testPaymentVerification() {
    console.log('🧪 Testing Payment Verification System...\n');
    
    // Test environment variables
    console.log('📋 Environment Variables:');
    console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? '✅ Set' : '❌ Missing');
    console.log('STRIPE_WEBHOOK_SECRET:', process.env.STRIPE_WEBHOOK_SECRET ? '✅ Set' : '❌ Missing');
    console.log('FIREBASE_CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL ? '✅ Set' : '❌ Missing');
    console.log('FIREBASE_PRIVATE_KEY:', process.env.FIREBASE_PRIVATE_KEY ? '✅ Set' : '❌ Missing');
    console.log();
    
    // Test Firebase connection
    try {
        if (admin.apps.length === 0) {
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
                credential: admin.credential.cert(serviceAccount)
            });
        }
        
        const db = admin.firestore();
        console.log('🔥 Firebase Connection: ✅ Success');
        
        // Test Firestore access
        const testDoc = await db.collection('test').doc('connection-test').get();
        console.log('📊 Firestore Access: ✅ Success');
        
    } catch (error) {
        console.log('🔥 Firebase Connection: ❌ Failed');
        console.log('Error:', error.message);
        return;
    }
    
    // Test Stripe connection
    try {
        const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
        const balance = await stripe.balance.retrieve();
        console.log('💳 Stripe Connection: ✅ Success');
    } catch (error) {
        console.log('💳 Stripe Connection: ❌ Failed');
        console.log('Error:', error.message);
        return;
    }
    
    console.log('\n🎉 All connections successful!');
    console.log('\n📝 Next Steps:');
    console.log('1. Make sure your webhook endpoint URL is correct in Stripe Dashboard');
    console.log('2. Test a payment to verify the webhook fires correctly');
    console.log('3. Check server logs during payment for any errors');
}

// Function to manually add ghost-logic to a user (for testing)
async function addStoryToUser(userEmail) {
    try {
        const db = admin.firestore();
        
        // Find user by email
        const usersQuery = await db.collection('users').where('email', '==', userEmail).get();
        
        if (usersQuery.empty) {
            console.log('❌ User not found with email:', userEmail);
            return;
        }
        
        const userDoc = usersQuery.docs[0];
        const userData = userDoc.data();
        const currentStoriesOwned = userData.storiesOwned || [];
        
        if (currentStoriesOwned.includes('ghost-logic')) {
            console.log('✅ User already owns Ghost Logic');
            return;
        }
        
        // Add ghost-logic to storiesOwned
        await userDoc.ref.update({
            storiesOwned: admin.firestore.FieldValue.arrayUnion('ghost-logic'),
            paid: true,
            subscription: 'premium',
            manuallyGranted: true,
            grantedAt: new Date()
        });
        
        console.log('✅ Successfully added Ghost Logic to user:', userEmail);
        console.log('📚 Updated storiesOwned:', [...currentStoriesOwned, 'ghost-logic']);
        
    } catch (error) {
        console.error('❌ Error adding story to user:', error);
    }
}

// Run the test
if (require.main === module) {
    const command = process.argv[2];
    
    if (command === 'add-story') {
        const userEmail = process.argv[3];
        if (!userEmail) {
            console.log('Usage: node test-payment-debug.js add-story user@example.com');
            process.exit(1);
        }
        testPaymentVerification().then(() => addStoryToUser(userEmail));
    } else {
        testPaymentVerification();
    }
}

module.exports = { testPaymentVerification, addStoryToUser }; 