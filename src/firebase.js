// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMC5PGjO4YdVULuDfEJLlw5Zl_8CjvxO8",
  authDomain: "cemids.firebaseapp.com",
  projectId: "cemids",
  storageBucket: "cemids.appspot.com",
  messagingSenderId: "1072439508301",
  appId: "1:1072439508301:web:0fe19c209fa96e4f730b04",
  measurementId: "G-Z6CCDH6EEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
