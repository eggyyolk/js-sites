import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYZNLnmVwariBX0t-5snTJ7l_6HHBxgDc",
  authDomain: "fir-vue-7485f.firebaseapp.com",
  projectId: "fir-vue-7485f",
  storageBucket: "fir-vue-7485f.appspot.com",
  messagingSenderId: "580496515297",
  appId: "1:580496515297:web:555253ad60c04782fcd7a0"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
