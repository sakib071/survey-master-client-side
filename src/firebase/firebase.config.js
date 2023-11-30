// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBan2sa-bHT6J4zViFSvE81eXR1IMeIIzI",
    // authDomain: "survey-master-fe443.firebaseapp.com",
    // projectId: "survey-master-fe443",
    // storageBucket: "survey-master-fe443.appspot.com",
    // messagingSenderId: "513016665507",
    // appId: "1:513016665507:web:b9e8421b81583a1b15f616"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);