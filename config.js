import firebase from "firebase";
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiJPsKunWy84QXg_rLrmtogQcr8UtDRYk",
  authDomain: "wireleibrary-e2eb6.firebaseapp.com",
  projectId: "wireleibrary-e2eb6",
  storageBucket: "wireleibrary-e2eb6.appspot.com",
  messagingSenderId: "135324235239",
  appId: "1:135324235239:web:168288c48d6986504bf942",
  measurementId: "G-W3SX2GPVZC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
