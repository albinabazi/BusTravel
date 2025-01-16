// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getMessaging, getToken} from "firebase/messaging";

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
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if(permission === "granted"){
    const token = await getToken(messaging, {
      vapidKey:"BMNRJFjdEzDO7sNgT2DO28CcOIWQcibvL86fOHRK2uKsI606O7COmJytnv_a0bsK3XQODQoOL7H1IJYnhmmfiDY",
    });
    console.log(token);
  }
};