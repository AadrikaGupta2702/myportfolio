import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK96MEX37D9pMI-6D8vO1fbQ46vknSikw",
  authDomain: "myportfolio-q9.firebaseapp.com",
  projectId: "myportfolio-q9",
  storageBucket: "myportfolio-q9.firebasestorage.app",
  messagingSenderId: "128961410653",
  appId: "1:128961410653:web:c7fda775cbf915d825ffb4",
  measurementId: "G-BFNSX8B29V"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
