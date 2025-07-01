# Firebase Setup Guide for Odysiq Interactive Stories

This comprehensive guide will help you set up Firebase/Firestore for user authentication and data storage for your interactive story application.

## 🚀 Quick Start

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "odysiq-stories")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

### 2. Enable Authentication

1. In your Firebase console, click **"Authentication"** in the left sidebar
2. Click **"Get started"**
3. Go to the **"Sign-in method"** tab
4. Enable **"Email/Password"** provider
5. Click **"Save"**

### 3. Set Up Firestore Database

1. In your Firebase console, click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. **IMPORTANT:** Choose **"Start in test mode"** for initial setup
4. Select a location for your database (choose closest to your users)
5. Click **"Done"**

### 4. Configure Security Rules (CRITICAL)

After creating your database, you MUST update the security rules:

1. Go to **"Firestore Database"** → **"Rules"** tab
2. Replace the default rules with these **production-ready rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read and write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow users to manage their own game saves and progress
    match /saves/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow users to read public story data (if you add this later)
    match /stories/{document=**} {
      allow read: if true;
      allow write: if request.auth != null && 
        resource.data.get('isAdmin', false) == true;
    }
  }
}
```

3. Click **"Publish"** to save the rules

> **⚠️ Important:** These rules ensure only authenticated users can access their own data, fixing the "insufficient permissions" error.

### 5. Get Your Firebase Configuration

1. In your Firebase console, click the **gear icon** next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** (`</>`) to add a web app
5. Enter an app nickname (e.g., "Odysiq Web App")
6. Check **"Also set up Firebase Hosting"** (optional but recommended)
7. Click **"Register app"**
8. Copy the `firebaseConfig` object

### 6. Update Your Application

Your Firebase configuration is already set up in the code! The current config should work perfectly:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyC_SVhI753WR_w-_75I1Zvfa7D5YvR4dIs",
    authDomain: "odysiq-90653.firebaseapp.com",
    projectId: "odysiq-90653",
    storageBucket: "odysiq-90653.firebasestorage.app",
    messagingSenderId: "249128085840",
    appId: "1:249128085840:web:6d75d2b17445997abf2455",
    measurementId: "G-DDR0NC2DC7"
};
```

## ✨ New Authentication Features

### Simplified Sign-Up Process
- **Email and password only** - no unnecessary form fields
- **Auto-generated display names** from email prefix (user@example.com → "user")
- **Streamlined user experience** with minimal friction
- **Admin privileges** set manually in Firebase console (not during signup)

### Enhanced Security & Data Management
- **Comprehensive user profiles** automatically created in Firestore
- **Cloud-based game saves** with automatic synchronization
- **Firestore security rules** that properly protect user data
- **Auth state persistence** across browser sessions and devices
- **Automatic token refresh** and session management

### Beautiful User Interface
- **Modern gradient design** with smooth animations
- **Loading states** and progress indicators
- **Proper success/error messaging** with emojis and clear feedback
- **Responsive design** for all devices
- **Keyboard shortcuts** (ESC to close modal)

### Data Tracking & Analytics
- **Story progress tracking** across all games
- **User engagement metrics** (play time, completion rates)
- **Preferences and settings** saved to the cloud
- **Cross-device continuity** for seamless gaming

## 🔧 Testing Your Setup

### 1. Start Your Development Server
```bash
cd "Ghost Logic"
python3 serve.py
```

### 2. Test Authentication Flow
1. Open `http://localhost:8002/index.html`
2. Click **"Sign Up"** to create a new account
3. Fill in a real email address and choose a secure password
4. Submit the form - you should see "Account created successfully! 🎉"
5. The display name will be auto-generated from your email prefix

### 3. Verify Firebase Integration
1. Check your **Firebase Authentication** console - you should see the new user
2. Check your **Firestore Database** - you should see a new document in `/users/{uid}`
3. Try signing out and signing back in

### 4. Set Admin Status (Optional)
To give a user admin privileges:
1. Go to your **Firebase Console** → **Firestore Database**
2. Navigate to **users** → **{user_uid}**
3. Edit the document and change `isAdmin` from `false` to `true`
4. Save the changes
5. User will have admin access on next sign-in

### 5. Test Error Handling
- Try signing up with an existing email (should show proper error)
- Try signing in with wrong password (should show helpful message)
- Test form validation (empty fields, short passwords, etc.)

## 🛠️ Troubleshooting

### "Missing or insufficient permissions" Error
- **Cause:** Default Firestore rules block all access
- **Solution:** Update your Firestore security rules (see Step 4 above)
- **Verify:** Go to Firestore Database → Rules and ensure you've published the new rules

### "Firebase not available" Error
- **Cause:** Network issues or incorrect configuration
- **Solution:** Check browser console for detailed errors
- **Verify:** Ensure your Firebase config matches your project

### User Creation but Permission Error
- **Cause:** User is created in Authentication but Firestore write fails
- **Solution:** This is exactly what the security rules fix
- **Note:** Update rules and try again with a new user

### Email Validation Issues
- **Cause:** Invalid email format
- **Solution:** Use real email addresses (gmail, etc.)
- **Note:** The app now requires proper email format

## 📊 Database Structure

Your Firestore database will have this comprehensive structure for tracking user data and game progress:

```
/users/{uid}
├── uid: "{user_id}"
├── email: "user@example.com"
├── displayName: "user"                    // Auto-generated from email prefix
├── isAdmin: false                         // Set manually in Firebase console for admin access
├── subscription: "free"                   // "free", "premium", "lifetime"
├── createdAt: Timestamp
├── lastSignIn: Timestamp
├── 
├── storiesPlayed: [                       // Array of story IDs user has played
│   "ghost-logic",
│   "another-story"
├── ]
├── 
├── storiesOwned: [                        // Array of story IDs user has purchased
│   "premium-story-1",
│   "premium-story-2"
├── ]
├── 
├── saveStates: {                          // Game save data for each story
│   "ghost-logic": {
│       currentPassageName: "scene_5",
│       gameState: { choice1: "agreed", reputation: 50 },
│       passageHistory: ["start", "scene_1", "scene_2"],
│       currentSpeedIndex: 1,
│       showAllMode: false,
│       timestamp: Timestamp,
│       storyId: "ghost-logic",
│       storyTitle: "Ghost Logic",
│       progress: 35
│   },
│   "another-story": { ... }
├── }
├── 
├── preferences: {                         // User preferences and settings
│   theme: "dark",                        // "dark", "light"
│   soundEnabled: true,
│   autoSave: true
├── }
├── 
└── stats: {                              // User statistics and analytics
    totalPlayTime: 145,                   // Total minutes played across all stories
    storiesCompleted: 2,                  // Number of stories completed
    decisionsMode: 0,                     // Number of decisions made
    lastActive: Timestamp                 // Last time user was active
  }
```

## 🎮 Game Save Features

### Automatic Cloud Synchronization
- **All game progress is automatically saved to Firestore** when users make choices or reach checkpoints
- **Cross-device synchronization** - users can continue their story on any device
- **Multiple story support** - each story maintains its own save state
- **Progress tracking** - automatic calculation of completion percentage

### Save Data includes:
- Current scene/passage location
- All game variables and choices made
- User preferences (reading speed, show all mode)
- Passage history for back-tracking
- Timestamps for save recovery

### Admin Features
- **Admin status** is set manually in Firebase console by changing `isAdmin` to `true`
- Admin users get access to developer tools and story debugging features
- Admin controls include scene jumping, variable editing, and progress inspection

## 🚀 Advanced Features

### Admin Users
- Check the "Admin Access" checkbox during signup
- Admin users can access special features in the story player
- Admin status is stored in Firestore and synced across devices

### User Profile Management
- Display names are shown in the header
- Email addresses are displayed for verification
- Admin badges are automatically shown for admin users

### Data Persistence
- All user data is stored in Firestore (cloud-based)
- Automatic syncing across devices and browsers
- Local storage fallback for development/offline use

## 🔒 Security Best Practices

### Production Deployment
1. Review and tighten Firestore security rules
2. Enable Firebase App Check for additional security
3. Set up proper CORS headers
4. Use HTTPS for all production traffic

### User Data Protection
- Never store passwords in Firestore (Firebase Auth handles this)
- Encrypt sensitive game data if needed
- Regularly audit user permissions
- Monitor unusual activity in Firebase console

## 📈 Analytics & Monitoring

Your app includes Firebase Analytics for:
- User engagement tracking
- Error monitoring
- Performance insights
- Usage patterns

Check the Firebase console → Analytics for detailed insights.

---

## 🎉 You're All Set!

Your authentication system now provides:
- ✅ **Secure cloud-based user accounts**
- ✅ **Beautiful, modern UI**
- ✅ **Proper error handling**
- ✅ **Admin functionality**
- ✅ **Cross-device synchronization**
- ✅ **Professional user experience**

Start creating amazing interactive stories! 🌟 