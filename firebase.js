import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig ={
    apiKey: "AIzaSyBXhn7ZzfaDmL-k8uGHvTBrmDG7Scx3AFI",
    authDomain: "apprefeicaohaniel-9e72a.firebaseapp.com",
    projectId: "apprefeicaohaniel-9e72a",
    storageBucket: "apprefeicaohaniel-9e72a.appspot.com",
    messagingSenderId: "10605517839",
    appId: "1:10605517839:web:18008a306471bf24cfd77a"
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);