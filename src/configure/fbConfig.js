import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBIgsB5plufJi_ts1dvodL13elKiior3R0",
  authDomain: "react-fire-6f334.firebaseapp.com",
  databaseURL: "https://react-fire-6f334.firebaseio.com",
  projectId: "react-fire-6f334",
  storageBucket: "react-fire-6f334.appspot.com",
  messagingSenderId: "231972945313"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
