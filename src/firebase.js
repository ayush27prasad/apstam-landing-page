import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAm-fqvP9qxmRphBMW3CP3Q6uqO4IZVs6c",
  authDomain: "apstamcontacts.firebaseapp.com",
  projectId: "apstamcontacts",
  storageBucket: "apstamcontacts.appspot.com",
  messagingSenderId: "106458946248",
  appId: "1:106458946248:web:2c44d86a7396392a9223fd",
  measurementId: "G-R8CBHKWWT2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDb =  getFirestore(firebaseApp);
export {firebaseApp, firestoreDb};