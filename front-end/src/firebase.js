import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBMVKmYH4nxqRTahVl-_M1INoiG-4abL-E",
    authDomain: "genetree-54b3b.firebaseapp.com",
    databaseURL: "https://genetree-54b3b.firebaseio.com",
    projectId: "genetree-54b3b",
    storageBucket: "genetree-54b3b.appspot.com",
    messagingSenderId: "865253565447"
};

export const firebaseApp = firebase.initializeApp(config);