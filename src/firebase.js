// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getFireStore } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzfI9YozEPXgxJ3f0mENoSjR1AZqDZlf0",
  authDomain: "realtor-clone-react-b31c7.firebaseapp.com",
  projectId: "realtor-clone-react-b31c7",
  storageBucket: "realtor-clone-react-b31c7.appspot.com",
  messagingSenderId: "873746891155",
  appId: "1:873746891155:web:10359235b5a20f5210e866"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db  = getFirestore();