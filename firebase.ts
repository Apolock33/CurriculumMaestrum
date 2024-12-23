// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence, initializeAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4WQhFr8HFF_06EUuf6PJIk7WtwyuqPHI",
  authDomain: "curriculum-maestrum.firebaseapp.com",
  projectId: "curriculum-maestrum",
  storageBucket: "curriculum-maestrum.firebasestorage.app",
  messagingSenderId: "158879155330",
  appId: "1:158879155330:web:4faa772132cb9aa98f209b",
  measurementId: "G-C2PR4HTYQH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

