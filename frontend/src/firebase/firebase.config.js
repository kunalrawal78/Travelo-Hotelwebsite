// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhdMwnJoSahoZ8cFcNFsWFoE-LQX1bRQs",
  authDomain: "hotel-7db51.firebaseapp.com",
  projectId: "hotel-7db51",
  storageBucket: "hotel-7db51.appspot.com",
  messagingSenderId: "195074992210",
  appId: "1:195074992210:web:f4969263f64ba1e88d178b",
  measurementId: "G-0FNCFH4ZKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;