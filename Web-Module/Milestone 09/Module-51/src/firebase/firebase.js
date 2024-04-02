// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsVCa47spqxq9rbfM-mB86zU4TQ-5N1TM",
  authDomain: "module-51-10a0f.firebaseapp.com",
  projectId: "module-51-10a0f",
  storageBucket: "module-51-10a0f.appspot.com",
  messagingSenderId: "321911235018",
  appId: "1:321911235018:web:b11e5d19b47cc2ebb42f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;