// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLz6bshrttacLSvg0Vi835hZDvW6KvpNQ",
  authDomain: "fir-8034e.firebaseapp.com",
  databaseURL: "https://fir-8034e-default-rtdb.firebaseio.com",
  projectId: "fir-8034e",
  storageBucket: "fir-8034e.firebasestorage.app",
  messagingSenderId: "758948440635",
  appId: "1:758948440635:web:21d8d0ee8b56e1b9e64a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)