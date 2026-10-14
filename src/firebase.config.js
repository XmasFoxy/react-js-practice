import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-IcE9P2xXqFJsJXDNtLm9YMLMR4jDDGc",
  authDomain: "react-js-practice-93fe3.firebaseapp.com",
  projectId: "react-js-practice-93fe3",
  storageBucket: "react-js-practice-93fe3.firebasestorage.app",
  messagingSenderId: "816522191478",
  appId: "1:816522191478:web:451e401063c350502f3557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };