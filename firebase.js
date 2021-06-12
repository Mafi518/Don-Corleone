import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxdAdTP3143eJ-41VIHuJ17hZ3NEVvMYI",
  authDomain: "corleonedb-b15cf.firebaseapp.com",
  databaseURL: "https://corleonedb-b15cf-default-rtdb.firebaseio.com",
  projectId: "corleonedb-b15cf",
  storageBucket: "corleonedb-b15cf.appspot.com",
  messagingSenderId: "371868963140",
  appId: "1:371868963140:web:85b10269c6f39209828711",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;
