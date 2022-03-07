// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBquYUPb5nwxqH_N5z6tvACezwN1RTMn_w",
  authDomain: "poomreact.firebaseapp.com",
  projectId: "poomreact",
  storageBucket: "poomreact.appspot.com",
  messagingSenderId: "624490317628",
  appId: "1:624490317628:web:1444a92cb988e3f38e4039"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
export { auth, firebase };

const db = firebase.firestore();

export { db };