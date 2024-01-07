// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZD9fM3C8H6XgVFd72x_vf9-TrDTPusf0",
  authDomain: "netflix-gpt-24750.firebaseapp.com",
  projectId: "netflix-gpt-24750",
  storageBucket: "netflix-gpt-24750.appspot.com",
  messagingSenderId: "255823443674",
  appId: "1:255823443674:web:d12ed9a8287db60b2e97e3",
  measurementId: "G-KPC63XNHL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();