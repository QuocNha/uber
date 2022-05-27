// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5RDxQMb32xFubacONaEPJrh5FwNfa1Jw",
  authDomain: "uber-next-clone-live-8b351.firebaseapp.com",
  projectId: "uber-next-clone-live-8b351",
  storageBucket: "uber-next-clone-live-8b351.appspot.com",
  messagingSenderId: "1004751669022",
  appId: "1:1004751669022:web:08b0be5163ca18f233eb0f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth =  getAuth();
export {app,auth,provider};