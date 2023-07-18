
import firebase from 'firebase/compat/app' ;
import 'firebase/compat/auth' ;
import 'firebase/compat/firestore' ;

const firebaseConfig = {
    apiKey: "AIzaSyBHMIo7TadcXiuJzwNZJyO0TqlrDeFwD6U",
    authDomain: "typing-speed-test-aj.firebaseapp.com",
    projectId: "typing-speed-test-aj",
    storageBucket: "typing-speed-test-aj.appspot.com",
    messagingSenderId: "560079954258",
    appId: "1:560079954258:web:bb6ad24be07079a9fe9a8b",
    measurementId: "G-YNYMFNJP7D"
  };

  // initialize firebase application and connect firebase to react application

  firebase.initializeApp(firebaseConfig) ; 

  //  objects
const auth  = firebase.auth();  // for authentication of app
const db = firebase.firestore(); // for storing data


export {auth, db} 


