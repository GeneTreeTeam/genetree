// Make sure Firebase is installed to the React app!

import * as firebase from 'firebase/app'
import 'firebase/auth'
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }
// TODO change these config settings to work with the proper database
// NOTE this was built for a Firestore backend
const config = {
  apiKey: 'AIzaSyBMVKmYH4nxqRTahVl-_M1INoiG-4abL-E',
  authDomain: 'genetree-54b3b.firebaseapp.com',
  databaseURL: 'https://genetree-54b3b.firebaseio.com',
  projectId: 'genetree-54b3b',
  storageBucket: 'genetree-54b3b.appspot.com',
  messagingSenderId: '865253565447'
}

firebase.initializeApp(config)

export default firebase
