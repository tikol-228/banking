// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdAGAsqN0qVCMGSHYaaoYL_cYJbSeDre0",
  authDomain: "banking-ecc31.firebaseapp.com",
  projectId: "banking-ecc31",
  storageBucket: "banking-ecc31.firebasestorage.app",
  messagingSenderId: "804698101562",
  appId: "1:804698101562:web:75d7cc6254fde29ebc2203",
  measurementId: "G-J1C0CTW8FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth}