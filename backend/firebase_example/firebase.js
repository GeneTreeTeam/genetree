// Make sure Firebase is installed to the React app!

import * as firebase from 'firebase/app'
import 'firebase/auth'
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }
// TODO change these config settings to work with the proper database
// NOTE this was built for a Firestore backend
const config = {
  apiKey: 'AIzaSyCpOr6nt-DNM_KatLfGfuX24YDQs0wX5Gg',
  authDomain: 'gene-12015.firebaseapp.com',
  databaseURL: 'https://gene-12015.firebaseio.com',
  projectId: 'gene-12015',
  storageBucket: 'gene-12015.appspot.com',
  messagingSenderId: '1046456685060'
}

firebase.initializeApp(config)

export default firebase
