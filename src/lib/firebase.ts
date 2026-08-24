import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { type Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analyticsPromise: Promise<Analytics | null> = Promise.resolve(null);

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);

    if (typeof window !== "undefined") {
      analyticsPromise = isSupported()
        .then((supported) => (supported && app ? getAnalytics(app) : null))
        .catch(() => null);
    }
  } catch {
    // Graceful fallback if config is invalid
  }
}

export { app, db, analyticsPromise, firebaseConfig, isFirebaseConfigured };


