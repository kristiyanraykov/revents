import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDQz66oFYyVaz4J3MbUshvjhibppCHUIv8",
    authDomain: "revents-personalproject.firebaseapp.com",
    projectId: "revents-personalproject",
    storageBucket: "revents-personalproject.appspot.com",
    messagingSenderId: "27482563372",
    appId: "1:27482563372:web:30e26bd071e5dabe484289"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore()

  export default firebase