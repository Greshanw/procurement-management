// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNhuwNs5V8eez4CYGtnI2Lmhj_7HqZyGY",
  authDomain: "fir-authentication-a7231.firebaseapp.com",
  projectId: "fir-authentication-a7231",
  storageBucket: "fir-authentication-a7231.appspot.com",
  messagingSenderId: "370993424076",
  appId: "1:370993424076:web:e1a543e2281bbd0da74469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};