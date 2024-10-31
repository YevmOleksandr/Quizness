// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { auth , db as database } from '../firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwNV5s6abEszR_X2g-aoP7tf5zPQrkk4Y",
    authDomain: "quizness-2f9b9.firebaseapp.com",
    projectId: "quizness-2f9b9",
    storageBucket: "quizness-2f9b9.appspot.com",
    messagingSenderId: "262313680925",
    appId: "1:262313680925:web:53b1ee596afed78614a6f4",
    measurementId: "G-L10SX7VNWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);