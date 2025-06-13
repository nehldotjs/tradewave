import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuldbxLWSywxOsElPY1ohp-bXFPWEO0m4",
  authDomain: "trade-wave-229ca.firebaseapp.com",
  projectId: "trade-wave-229ca",
  storageBucket: "trade-wave-229ca.firebasestorage.app",
  messagingSenderId: "554900618375",
  appId: "1:554900618375:web:ab179b00457b14708d8c22",
  measurementId: "G-3WY589NWEJ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const GOOGLE_PROVIDER = new GoogleAuthProvider();
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
