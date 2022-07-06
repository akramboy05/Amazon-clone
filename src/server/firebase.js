import * as firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA7CPiaBQYnDbfjrVJbuMtEpnNUTXTkt7g",
    authDomain: "fir-f6eef.firebaseapp.com",
    projectId: "fir-f6eef",
    storageBucket: "fir-f6eef.appspot.com",
    messagingSenderId: "854427057943",
    appId: "1:854427057943:web:ce379f27de8cb9eebc0152",
    measurementId: "G-5L2YWX4ED0"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth =app.auth()
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const db = app.firestore()

  export{auth, googleProvider, db, firebase}