import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyA8lpJECM69_OP4N3x4yKBnkreBKL8KO5Y",
    authDomain: "ciclista4-f1fe2.firebaseapp.com",
    databaseURL: "https://ciclista4-f1fe2-default-rtdb.firebaseio.com",
    projectId: "ciclista4-f1fe2",
    storageBucket: "ciclista4-f1fe2.appspot.com",
    messagingSenderId: "170342921410",
    appId: "1:170342921410:web:d75ec58902263de176f75b"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
