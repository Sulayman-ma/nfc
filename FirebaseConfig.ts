/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { initializeApp, getApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBmpueb168sazI-8y9m378S-OU8TSJ8h_8',
  authDomain: 'subscription-21360.firebaseapp.com',
  projectId: 'subscription-21360',
  storageBucket: 'subscription-21360.appspot.com',
  messagingSenderId: '26218228719',
  appId: '1:26218228719:web:e38d7670f038feef19a41a',
  measurementId: 'G-B1BDWKKVFK',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
