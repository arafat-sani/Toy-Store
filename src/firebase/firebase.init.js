// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8oTE4y7SpiNPHARBEcsQXuvBpsank7n4",
  authDomain: "toy-store-e998e.firebaseapp.com",
  projectId: "toy-store-e998e",
  storageBucket: "toy-store-e998e.firebasestorage.app",
  messagingSenderId: "838748411111",
  appId: "1:838748411111:web:8fa16889780c50c06b3e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);