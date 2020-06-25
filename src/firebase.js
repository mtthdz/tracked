// firebase.js
import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/database';

// initialize firebase
// config object
var firebaseConfig = {
  apiKey: "AIzaSyAOYShPCmJls_nddDt39UBjTHRhJFMyjjo",
  authDomain: "tracked-70405.firebaseapp.com",
  databaseURL: "https://tracked-70405.firebaseio.com",
  projectId: "tracked-70405",
  storageBucket: "tracked-70405.appspot.com",
  messagingSenderId: "998621565378",
  appId: "1:998621565378:web:85e7f57765cec8de40065b"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// exports the configured version of firebase
export default firebase;
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();