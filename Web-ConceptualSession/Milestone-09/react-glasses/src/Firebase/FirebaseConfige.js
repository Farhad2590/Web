import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCTJ0qh6Jkq_xlWYfFi0EbvDZk-j_RVjg",
  authDomain: "react-glasses-b769c.firebaseapp.com",
  projectId: "react-glasses-b769c",
  storageBucket: "react-glasses-b769c.appspot.com",
  messagingSenderId: "298280494393",
  appId: "1:298280494393:web:32618ad5426ab8d64874e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;