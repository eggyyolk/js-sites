// was i supposed to put this here

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYZNLnmVwariBX0t-5snTJ7l_6HHBxgDc",
    authDomain: "fir-vue-7485f.firebaseapp.com",
    projectId: "fir-vue-7485f",
    storageBucket: "fir-vue-7485f.appspot.com",
    messagingSenderId: "580496515297",
    appId: "1:580496515297:web:a388d1c8cb314226fcd7a0"
};

  
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
