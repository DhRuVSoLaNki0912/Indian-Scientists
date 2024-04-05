// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "scientists-ab862.firebaseapp.com",
  projectId: "scientists-ab862",
  storageBucket: "scientists-ab862.appspot.com",
  messagingSenderId: "815194009744",
  appId: "1:815194009744:web:fc8aea7a06ac0ed3402815"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);