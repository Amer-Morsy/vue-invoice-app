import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5O7AJud6u4h9HRp4cc1M9dKyg5nW5-o4",
  authDomain: "invoice-1-a11d0.firebaseapp.com",
  projectId: "invoice-1-a11d0",
  storageBucket: "invoice-1-a11d0.appspot.com",
  messagingSenderId: "11946911352",
  appId: "1:11946911352:web:05172612c3b9eba8136f8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
