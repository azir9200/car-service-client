
import { initializeApp } from "firebase/app";

const firebaseConfig = {

 
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID



  // apiKey: "AIzaSyBwX-wrMiA8oQg_Af_bY3DvSmKrxSyAZPk",
  // authDomain: "zurich-car-service.firebaseapp.com",
  // projectId: "zurich-car-service",
  // storageBucket: "zurich-car-service.appspot.com",
  // messagingSenderId: "480248021125",
  // appId: "1:480248021125:web:bc8e468df2e3721adde9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;