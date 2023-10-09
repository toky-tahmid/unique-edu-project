// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwwBxG0gO9Kq7Kef3_lK47Avb1VMSw5c",
  authDomain: "unique-edu-project.firebaseapp.com",
  projectId: "unique-edu-project",
  storageBucket: "unique-edu-project.appspot.com",
  messagingSenderId: "615804102562",
  appId: "1:615804102562:web:2da0f3c72859b8eba674fb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;