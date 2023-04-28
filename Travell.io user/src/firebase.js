import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyCuvn8I5533SiwSGWcnStnuD-RK2l6Awoo",
  authDomain: "travel-e7ae0.firebaseapp.com",
  projectId: "travel-e7ae0",
  storageBucket: "travel-e7ae0.appspot.com",
  messagingSenderId: "636657618364",
  appId: "1:636657618364:web:bcdee3b956ba9b37b12fb9",
  measurementId: "G-4RWKBMRZK9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
