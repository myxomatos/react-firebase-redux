// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrues4N8AGikDgWXBFHAKAlBwnE55imcE",
  authDomain: "react-her.firebaseapp.com",
  projectId: "react-her",
  storageBucket: "react-her.firebasestorage.app",
  messagingSenderId: "755109525210",
  appId: "1:755109525210:web:60db0ce1eab4a8c1f597e3"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );