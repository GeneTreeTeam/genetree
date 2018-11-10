import * as firebase from 'firebase/app'
import 'firebase/auth'
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }

const config = {
  apiKey: "AIzaSyD21K3KrD1JuuozRyyodo9x8vLA6H2DBKo",
  authDomain: "genetree-6417e.firebaseapp.com",
  databaseURL: "https://genetree-6417e.firebaseio.com",
  projectId: "genetree-6417e",
  storageBucket: "genetree-6417e.appspot.com",
  messagingSenderId: "937767112675"
};

firebase.initializeApp(config)