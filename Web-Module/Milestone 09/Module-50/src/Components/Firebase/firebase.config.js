// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtbbEarxeintoIdV2GEfgd1vbYWEINOoI",
  authDomain: "module-50-ed68a.firebaseapp.com",
  projectId: "module-50-ed68a",
  storageBucket: "module-50-ed68a.appspot.com",
  messagingSenderId: "478593222604",
  appId: "1:478593222604:web:5a2a3273479d0941453f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
