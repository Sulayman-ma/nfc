// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBmpueb168sazI-8y9m378S-OU8TSJ8h_8",
  authDomain: "subscription-21360.firebaseapp.com",
  projectId: "subscription-21360",
  storageBucket: "subscription-21360.appspot.com",
  messagingSenderId: "26218228719",
  appId: "1:26218228719:web:e38d7670f038feef19a41a",
  measurementId: "G-B1BDWKKVFK"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
