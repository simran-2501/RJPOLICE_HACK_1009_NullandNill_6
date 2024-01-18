// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyBze_bF98yznonUIpm3b2uMJwCMs4_JVXk",
  authDomain: "safelens-d12fa.firebaseapp.com",
  databaseURL: "https://safelens-d12fa-default-rtdb.firebaseio.com",
  projectId: "safelens-d12fa",
  storageBucket: "safelens-d12fa.appspot.com",
  messagingSenderId: "223895901785",
  appId: "1:223895901785:web:d17030466baa8f2c508348"
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };