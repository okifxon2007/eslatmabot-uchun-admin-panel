// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqjQ2SosKX_OFRRiybn0y5AXOc02Bq2Gg",
  authDomain: "xabar-bot-abba1.firebaseapp.com",
  databaseURL: "https://xabar-bot-abba1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xabar-bot-abba1",
  storageBucket: "xabar-bot-abba1.firebasestorage.app",
  messagingSenderId: "183488885435",
  appId: "1:183488885435:web:c1d5e922ca9a7c4bc2af9e",
  measurementId: "G-17Y303378H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);