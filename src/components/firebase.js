// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nG9KvOdkUQNT-WOcctdvdvv2fMz1EfA",
  authDomain: "vistaalvalle-margoti.firebaseapp.com",
  projectId: "vistaalvalle-margoti",
  storageBucket: "vistaalvalle-margoti.appspot.com",
  messagingSenderId: "732967369311",
  appId: "1:732967369311:web:b43e6b4b4a0054cb9e39ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // representa toda la BD
