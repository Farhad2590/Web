// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD82Sc9YOZIgBYDEXO2pV_kOkdVF5tWgg",
  authDomain: "session-01-dc1fd.firebaseapp.com",
  projectId: "session-01-dc1fd",
  storageBucket: "session-01-dc1fd.appspot.com",
  messagingSenderId: "852918983881",
  appId: "1:852918983881:web:df071bbdb1f00c8897c118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
