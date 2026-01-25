
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqml-U9tf20LNDSN7xBkOAzAiuqfYkwNA",
  authDomain: "myportfolio-dfedf.firebaseapp.com",
  projectId: "myportfolio-dfedf",
  storageBucket: "myportfolio-dfedf.firebasestorage.app",
  messagingSenderId: "541806520831",
  appId: "1:541806520831:web:ed25fc2fec4ac4c46cdfca",
  measurementId: "G-8CDJTJQWEL"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;