// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwiA9Vw_NwWWht9TpJPsQWuodismuwYmo",
  authDomain: "bus-travel-cc3c4.firebaseapp.com",
  projectId: "bus-travel-cc3c4",
  storageBucket: "bus-travel-cc3c4.appspot.com",
  messagingSenderId: "540794387292",
  appId: "1:540794387292:web:935904ac8fd9bd72d25f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db= getFirestore(app);