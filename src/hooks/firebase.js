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
    databaseURL: "https://quizness-2f9b9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quizness-2f9b9",
    storageBucket: "quizness-2f9b9.firebasestorage.app",
    messagingSenderId: "262313680925",
    appId: "1:262313680925:web:79fcc8285345421014a6f4",
    measurementId: "G-PDHFVJ1WM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);
export const db = getFirestore(app);