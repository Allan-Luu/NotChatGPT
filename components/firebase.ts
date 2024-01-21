import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUF5eIJ_CvkX2r-uPzrd2lDtq0ZDX7rTk",
  authDomain: "chatgpt-messenger-5cb6c.firebaseapp.com",
  projectId: "chatgpt-messenger-5cb6c",
  storageBucket: "chatgpt-messenger-5cb6c.appspot.com",
  messagingSenderId: "31308871790",
  appId: "1:31308871790:web:3a1fb6a7a4ce6273e4ce7f",
  measurementId: "G-NEFMZGKJBY"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }