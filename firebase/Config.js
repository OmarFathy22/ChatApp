import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2WCAz7SdljwO4QCuDPA_yNziO3zSh6f8",
  authDomain: "chatly-93751.firebaseapp.com",
  projectId: "chatly-93751",
  storageBucket: "chatly-93751.appspot.com",
  messagingSenderId: "260986905849",
  appId: "1:260986905849:web:732be3fd201eb1df19ae28",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
