import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDxuGmiq_djeMuGIgYs8JiaOVf7CJo_kik",
  authDomain: "react-movies-labs.firebaseapp.com",
  projectId: "react-movies-labs",
  storageBucket: "react-movies-labs.appspot.com",
  messagingSenderId: "440391859474",
  appId: "1:440391859474:web:a767ed7281cc73e68147cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }