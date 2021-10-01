import * as  firebase from "firebase/app";
import "firebase/storage";
import "firebase/firebase-database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIGS

export const app = firebase.initializeApp(firebaseConfig);

