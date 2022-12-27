import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0WM9Tf4vz8DmwLWe4z8nEJkIxN9UjLXs",
    authDomain: "sistema-chamados-733a6.firebaseapp.com",
    projectId: "sistema-chamados-733a6",
    storageBucket: "sistema-chamados-733a6.appspot.com",
    messagingSenderId: "465914873916",
    appId: "1:465914873916:web:8264348eb2c5b821f79b39",
    measurementId: "G-5KKY55Y7C5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);