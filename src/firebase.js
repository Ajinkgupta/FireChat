import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "",
  authDomain: "messages-d79b8.firebaseapp.com",
  projectId: "messages-d79b8",
  storageBucket: "messages-d79b8.appspot.com",
  messagingSenderId: "574705765086",
  appId: "1:574705765086:web:f1cc9c91d661d92b19504f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()



