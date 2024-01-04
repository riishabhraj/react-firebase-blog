// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYcYXM1osWIBEWVC2HxwS8stm_HKgywqU",
  authDomain: "blog-d9e12.firebaseapp.com",
  projectId: "blog-d9e12",
  storageBucket: "blog-d9e12.appspot.com",
  messagingSenderId: "313186248248",
  appId: "1:313186248248:web:42943ce561bf127d8828cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
