import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjks1l3XlV_DcgcMqpCYbbjY7NGQ5Zl5c",
  authDomain: "react-cc8f5.firebaseapp.com",
  projectId: "react-cc8f5",
  storageBucket: "react-cc8f5.appspot.com",
  messagingSenderId: "469858563369",
  appId: "1:469858563369:web:e73df19fb67f709a603338",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
