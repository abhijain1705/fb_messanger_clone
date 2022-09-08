import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYjgn7X52sAuCi0JiqwaLm3tF3wWsmu8s",
    authDomain: "messanger-32b1b.firebaseapp.com",
    projectId: "messanger-32b1b",
    storageBucket: "messanger-32b1b.appspot.com",
    messagingSenderId: "159029795621",
    appId: "1:159029795621:web:45d05ecfb07222ccd558cc",
    measurementId: "G-54NQ5Y8MDP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;


