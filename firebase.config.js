//import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1-cLMir9pisDEOc2FW50cbUpNdVnUF9A",
  authDomain: "todo-react-firebase-4b779.firebaseapp.com",
  projectId: "todo-react-firebase-4b779",
  storageBucket: "todo-react-firebase-4b779.firebasestorage.app",
  messagingSenderId: "234666374198",
  appId: "1:234666374198:web:cc235489d189da79299497"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

