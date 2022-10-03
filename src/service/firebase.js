// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp58WDEcIISDfSCPvwmJJpb-nJYKN0n3U",
  authDomain: "human-resource-managemen-ffb61.firebaseapp.com",
  projectId: "human-resource-managemen-ffb61",
  storageBucket: "human-resource-managemen-ffb61.appspot.com",
  messagingSenderId: "368495074470",
  appId: "1:368495074470:web:b353e03960029e2cf82867",
  measurementId: "G-4D4CR8MF1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };