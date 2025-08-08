// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-0PzsTGuGv1gMEZj48s_HgUHDXaMQCSQ",
  authDomain: "arcos2025-e0434.firebaseapp.com",
  databaseURL: "https://arcos2025-e0434-default-rtdb.firebaseio.com",
  projectId: "arcos2025-e0434",
  storageBucket: "arcos2025-e0434.firebasestorage.app",
  messagingSenderId: "13557205426",
  appId: "1:13557205426:web:1c83786e2760328062fcab",
  measurementId: "G-GPF5GQ37JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const analytics = getAnalytics(app);