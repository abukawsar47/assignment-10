// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjOR6-2wlwiX7UiLn-XfQk3KLgFsn5Lgw",
  authDomain: "assignment-10-ak47.firebaseapp.com",
  projectId: "assignment-10-ak47",
  storageBucket: "assignment-10-ak47.appspot.com",
  messagingSenderId: "872476042133",
  appId: "1:872476042133:web:90045ad46894efd8028c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
