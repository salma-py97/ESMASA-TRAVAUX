// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDihWcu1MMVIhIqfa2XUxOpb1ucTPY1qlE",
  authDomain: "esmasa-travaux-7e94e.firebaseapp.com",
  projectId: "esmasa-travaux-7e94e",
  storageBucket: "esmasa-travaux-7e94e.appspot.com",
  messagingSenderId: "209804033348",
  appId: "1:209804033348:web:1a109194f26a1ac8c0eb11",
  measurementId: "G-N2Y48TMTDH"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app =  initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage()

export {app, db, storage}
