import * as  firebase from "firebase/app";
import "firebase/storage";
import "firebase/firebase-database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARuiSwVM9zIxDFozL5bILtQJOzUP-SbLk",
  authDomain: "campgrounds-daabb.firebaseapp.com",
  databaseURL: "https://campgrounds-daabb-default-rtdb.firebaseio.com",
  projectId: "campgrounds-daabb",
  storageBucket: "campgrounds-daabb.appspot.com",
  messagingSenderId: "939628795347",
  appId: "1:939628795347:web:643c09cd414dfe13b2cb26",
  measurementId: "G-4KSK6ZMC4Y",
};

export const app = firebase.initializeApp(firebaseConfig);

