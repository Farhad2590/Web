// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain ,
//   projectId: import.meta.env.VITE_projectId ,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBRg6FkAuMuSEyD-UX1zcwK_gUAkdbPz-M",
  authDomain: "cars-doctor-63a26.firebaseapp.com",
  projectId: "cars-doctor-63a26",
  storageBucket: "cars-doctor-63a26.appspot.com",
  messagingSenderId: "793412778934",
  appId: "1:793412778934:web:e50b6b9b62817fdb575f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 