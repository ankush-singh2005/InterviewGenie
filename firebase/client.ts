// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdjUkuXzYp70fgzdPMHc1XkYOIkJ57LcE",
  authDomain: "interviewgenie-4348f.firebaseapp.com",
  projectId: "interviewgenie-4348f",
  storageBucket: "interviewgenie-4348f.firebasestorage.app",
  messagingSenderId: "1084292236379",
  appId: "1:1084292236379:web:0985597beb76a2463aab7e",
  measurementId: "G-3KMGNRYQ1B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);