import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA175waPhgCGvVnzAi4l6KCneRxAhzIlZo",
    authDomain: "hall-booking-651a6.firebaseapp.com",
    projectId: "hall-booking-651a6",
    storageBucket: "hall-booking-651a6.appspot.com",
    messagingSenderId: "488827843880",
    appId: "1:488827843880:web:9a8494bb97a6de3d024c1d",
    measurementId: "G-ED3ZHG633T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };