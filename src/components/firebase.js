import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBquKgvw5vkeYOSImssuWUtfogO0gO9xTE",
  authDomain: "vistaalvalle2-fe90b.firebaseapp.com",
  projectId: "vistaalvalle2-fe90b",
  storageBucket: "vistaalvalle2-fe90b.appspot.com",
  messagingSenderId: "502393747965",
  appId: "1:502393747965:web:43bfe8e46ba1883e698194"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
