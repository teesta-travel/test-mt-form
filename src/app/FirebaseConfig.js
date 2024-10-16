// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHDjddJIVX9djJItb9VilAc1PhT30Bh8",
  authDomain: "teesta-4c798.firebaseapp.com",
  databaseURL:
    "https://teesta-4c798-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teesta-4c798",
  storageBucket: "teesta-4c798.appspot.com",
  messagingSenderId: "982568787762",
  appId: "1:982568787762:web:c945868b3184b2869f812b",
  measurementId: "G-ZX0MM1BD7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
// const analytics = getAnalytics(app);
