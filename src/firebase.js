import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

let isFirebaseInitialized = false;

const FirebaseApp = {
  apiKey: "AIzaSyCJQCOflJO2oGuQ5jVqcCbOiHY8P7fc5sw",
  authDomain: "glaj-news.firebaseapp.com",
  projectId: "glaj-news",
  storageBucket: "glaj-news.appspot.com",
  messagingSenderId: "542419673072",
  appId: "1:542419673072:web:446ab2d065b0aae2bc0735"
};

let database;
let auth;


const initializeFirebase = () => {
  if (!isFirebaseInitialized) {
    const store = initializeApp(FirebaseApp);
    database = getFirestore(store);
    auth = getAuth(store);
    isFirebaseInitialized = true;
  }
};


initializeFirebase();

export { auth, database };
