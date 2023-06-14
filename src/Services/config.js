import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "la-llama-loca.firebaseapp.com",
    projectId: "la-llama-loca",
    storageBucket: "la-llama-loca.appspot.com",
    messagingSenderId: "266887522179",
    appId: "1:266887522179:web:62bdf597c0d847229cb8b6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)