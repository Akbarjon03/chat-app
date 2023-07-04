import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAeBKoEXunabAf5drrNUqTIylkzDT_XXpE",
  authDomain: "chat-app-8b468.firebaseapp.com",
  projectId: "chat-app-8b468",
  storageBucket: "chat-app-8b468.appspot.com",
  messagingSenderId: "1080372750171",
  appId: "1:1080372750171:web:effc11fc462a6efa951c7e"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);