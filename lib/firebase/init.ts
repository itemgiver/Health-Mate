import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkCdeiL6fDWgz0e_MpSxEupV3VhP03-Uk",
  authDomain: "health-mate-a3b93.firebaseapp.com",
  projectId: "health-mate-a3b93",
  storageBucket: "health-mate-a3b93.appspot.com",
  messagingSenderId: "441087718708",
  appId: "1:441087718708:web:4b149d151a3acb19f4a161",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
