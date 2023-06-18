`use client`

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD-xyKeD1v1ATXn66eW7rOdTxSgNZcJCA",
  authDomain: "rolatebuster.firebaseapp.com",
  projectId: "rolatebuster",
  storageBucket: "rolatebuster.appspot.com",
  messagingSenderId: "421548406876",
  appId: "1:421548406876:web:c7a1ff67d11f18d1074e99",
  measurementId: "G-VR7W03C6QJ"
};

export const app = initializeApp(firebaseConfig);

