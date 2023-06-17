// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmWjwLXBMTaB70iMP8Nr89qeKd_h2Vp20",
  authDomain: "expense-tracker-79ccb.firebaseapp.com",
  projectId: "expense-tracker-79ccb",
  storageBucket: "expense-tracker-79ccb.appspot.com",
  messagingSenderId: "1093887233323",
  appId: "1:1093887233323:web:2a22165585525ace33496e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
