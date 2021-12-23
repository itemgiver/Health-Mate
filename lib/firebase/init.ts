import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9he7JPxbUTBkkEhORjnBNdrSbnFSnfdo",
  authDomain: "health-mate-237fe.firebaseapp.com",
  projectId: "health-mate-237fe",
  storageBucket: "health-mate-237fe.appspot.com",
  messagingSenderId: "632751913909",
  appId: "1:632751913909:web:e36560341748ed5c1df7fc",
  measurementId: "G-M4WFD3W9KF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
