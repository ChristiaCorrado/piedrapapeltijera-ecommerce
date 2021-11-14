import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // REEMPLACEN POR SU CONFIG
  apiKey: "AIzaSyC7PzkQqlds55_rn0jztLH1jJvr_bTFjiA",
    authDomain: "piedrapapelytijera-ecommerce.firebaseapp.com",
    projectId: "piedrapapelytijera-ecommerce",
    storageBucket: "piedrapapelytijera-ecommerce.appspot.com",
    messagingSenderId: "806273530421",
    appId: "1:806273530421:web:64aa8e37aed188f9228f7c"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
