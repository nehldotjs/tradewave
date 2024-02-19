import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGk_PABYf693JhzXKMaEb4FYAT7aZU7rM",
  authDomain: "tradewave-81881.firebaseapp.com",
  projectId: "tradewave-81881",
  storageBucket: "tradewave-81881.appspot.com",
  messagingSenderId: "644287470247",
  appId: "1:644287470247:web:e318656e680690753c9982",
  measurementId: "G-T7LD2CJTER"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const GOOGLE_PROVIDER = new GoogleAuthProvider();
export const db = getFirestore(FIREBASE_APP);
