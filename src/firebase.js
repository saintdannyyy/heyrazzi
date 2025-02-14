// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO4uWIxK30T8nRDw9JdhSWJ90pdBloRug",
  authDomain: "heyrazzi.firebaseapp.com",
  projectId: "heyrazzi",
  storageBucket: "heyrazzi.firebasestorage.app",
  messagingSenderId: "734703995361",
  appId: "1:734703995361:web:6125c1c9a4a3c859ffeaa0",
  measurementId: "G-L85H4YM85F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);