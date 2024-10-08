// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7EnGk1Rt57-VJGSlsbunIBjjRqbRwXYo",
  authDomain: "connectbook-4d882.firebaseapp.com",
  projectId: "connectbook-4d882",
  storageBucket: "connectbook-4d882.appspot.com",
  messagingSenderId: "660629583294",
  appId: "1:660629583294:web:741f039aba7ba73933b5ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;