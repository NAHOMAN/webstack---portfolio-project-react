// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvdaynosEcO18OHFpe2wmybNkj0O2PIzE",
  authDomain: "nc-traders-hub.firebaseapp.com",
  projectId: "nc-traders-hub",
  storageBucket: "nc-traders-hub.appspot.com",
  messagingSenderId: "404963701947",
  appId: "1:404963701947:web:163bbce75ff88b719d659e",
  measurementId: "G-FW808KSCG0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
