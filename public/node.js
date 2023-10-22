import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl40HFZTiWLF_iWY439tg9mOvJQeW48wU",
    authDomain: "technica2023-f3608.firebaseapp.com",
    projectId: "technica2023-f3608",
    storageBucket: "technica2023-f3608.appspot.com",
    messagingSenderId: "652717373216",
    appId: "1:652717373216:web:7c3e456cf8fa7cc0c08945",
    measurementId: "G-B9BTGDE7YE"
  };
  
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);