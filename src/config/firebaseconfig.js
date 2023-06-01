import firebase from "firebase"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyA0nESDyr6GbtC0rC7rGqnjyx6bFNe8jkE",
    authDomain: "tasks-9520d.firebaseapp.com",
    projectId: "tasks-9520d",
    storageBucket: "tasks-9520d.appspot.com",
    messagingSenderId: "665678694351",
    appId: "1:665678694351:web:f6fb5461b2f614138274ba"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase