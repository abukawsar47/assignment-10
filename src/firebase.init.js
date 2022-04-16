// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6x_bO24ZhaIHiTnlWkD_AHMIZqseVjnM",
  authDomain: "assignment-10-cc7f0.firebaseapp.com",
  projectId: "assignment-10-cc7f0",
  storageBucket: "assignment-10-cc7f0.appspot.com",
  messagingSenderId: "135376111847",
  appId: "1:135376111847:web:640cc08e9d817f5a2d7a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
