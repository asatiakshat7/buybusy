// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaFynS9EW856Zm39ytUi5zH3HZsf2XubE",
  authDomain: "buybusy-f474a.firebaseapp.com",
  projectId: "buybusy-f474a",
  storageBucket: "buybusy-f474a.appspot.com",
  messagingSenderId: "267179491737",
  appId: "1:267179491737:web:0f95801dd4f73fa1e8d308",
  measurementId: "G-W5CB7PE8XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);