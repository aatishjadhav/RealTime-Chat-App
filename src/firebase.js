// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0VQEbf4S_a1Rk2jkNd8sdatEym_gcZLY",
  authDomain: "chat-app-3677b.firebaseapp.com",
  projectId: "chat-app-3677b",
  storageBucket: "chat-app-3677b.appspot.com",
  messagingSenderId: "195571689426",
  appId: "1:195571689426:web:9af36693e7d1c166128a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



















































// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// import {getFirestore} from 'firebase/firestore'


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: YOUR_STORAGE_BUCKET,
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   appId: YOUR_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db = getFirestore(app)