import firebase from './firebase'

const db = firebase.db();
export const signUp = (username, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  console.log("It made me.")
}