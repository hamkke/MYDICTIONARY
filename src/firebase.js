// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdesChvJzTFuVgAFx6VwDK9FMgRdXOUU0",
  authDomain: "mydictionary-c2017.firebaseapp.com",
  projectId: "mydictionary-c2017",
  storageBucket: "mydictionary-c2017.appspot.com",
  messagingSenderId: "1039484241430",
  appId: "1:1039484241430:web:7af40ee5a6646f772a9737",
  measurementId: "G-43NSYCRJP8"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// App에서도 사용할 수 있게 export
export const db = getFirestore();