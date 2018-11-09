import firebase from './firebase'

// Contains stuff for the front end to import so they don't have to deal with
// JSON manipulation after all.

// Flat schema actually works better here, especially for weird-shaped trees.
// It's a lot easier to maintain in the long run.
//
// id:user_email
// |-people
// | |-id:0
// | | |name:user_name
// | | |email:user_email
// | |-id:mother_id
// | | |-name:mother_name
// | |-id:father_id
// | | |-name:father_name
// | |-id:sibling_id
// |   |-sibling_name
// |-relationships
//   |-id:r1_id
//   | |-type:'mother'
//   | |-child:0
//   | |-parent:mother_id
//   |-id:r2_id
//   | |-type:'father'
//   | |-child:0
//   | |-parent:father_id
//   |-id:r1_id
//   | |-type:'mother'
//   | |-child:sibling_id
//   | |-parent:mother_id
//   |-id:r1_id
//     |-type:'father'
//     |-child:sibling_id
//     |-parent:father_id


// Utility functions
function user() {
  return firebase.auth().currentUser
}
function db() {
  return firebase.firestore().collection('users')
}
function entry() {
  return db().doc(user().email)
}


// Person class for object-oriented model.
// Add relationships with setMother, setFather, setAsMother, and setAsFather.
// When creating a Person manually, make sure the supplied id is unique.
export default class Person {
  constructor(people, name, email, id) {
    this.people = people
    this.mother = null
    this.father = null
    this.children = []

    this.name = info.name
    this.email = info.email
    this.id = info.id

    people[this.id] = this
  }

  getMother() {
    return this.mother
  }
  getFather() {
    return this.father
  }
  getChildren() {
    return this.children
  }
  getName() {
    return this.name
  }
  getEmail() {
    return this.email
  }
  getID() {
    return this.id
  }

  // These take Person objects as parameters.
  // (preferred method of external access)
  setMother(mother) {
    if (self.mother !== mother) {
      if (self.mother) {
        self.mother.removeChild(self)
      }
      if (mother) {
        mother.addChild(self)
      }
      self.mother = mother
    }
  }
  setFather(father) {
    if (self.father !== father) {
      if (self.father) {
        self.father.removeChild(self)
      }
      if (father) {
        father.addChild(self)
      }
      self.father = father
    }
  }
  setAsMother(child) {
    child.setMother(this)
  }
  setAsFather(child) {
    child.setFather(this)
  }
  remove() {
    // remove references to this as parent
    for (child in this.children) {
      if (child.getMother() === this) {
        child.setMother(null)
      } else if (child.getFather() === this) {
        child.setFather(null)
      }
    }
    // remove references to this as child
    mother.removeChild(this)
    father.removeChild(this)
    // remove references to this as person
    people.remove(this.id)
  }

  // Does not set this object as the child's mother or father
  // (external use discouraged)
  addChild(child) {
    for (c in children) { // loop is faster than built-in functinons?!
      if (c === child) { // if child was already there
        return false
      }
    }
    children.push(child)
    return true
  }
  removeChild(child) {
    for (var i = 0; i < children.length; i ++) {
      if (children[i] == child) {
        children.splice(i, 1)
        return true
      }
    }
    return false // if child wasn't there
  }
}

export const read = () => {
  return entry().get().then(function(doc) {
    var people = {}
    var id = 0
    for (pinfo in doc.data().people) {
      // TODO fix attribute parsing
      people[id] = Person(people, pinfo.name, pinfo.email, id)
      id ++
    }
    var relationships = []
    for (rinfo in doc.data().relationships) {
      switch(rinfo.type) {
        case 'mother':
          people[rinfo.child].setMother(people[rinfo.parent])
          break;
        case 'father':
          people[rinfo.child].setFather(people[rinfo.parent])
          break;
        default: // for debug
          console.warn('Unrecognized relationship: '+rinfo.type)
      }
    }
    return people
  })
}


// Function to sign up
export const signUp = (username, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  var ppl = {}
  ppl[0] = {name: username, email: email}
  db().doc(email).set({
    people: ppl,
    relationships: {}
  })
}

// Function to log in
export const logIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

// Function to log out
export const logOut = () =>
  firebase.auth().signOut()

// Function to reset password if forgotten
export const pwdReset = (email) =>
  firebase.auth().sendPasswordResetEmail(email)

// Function to change password while logged in
export const pwdChange = (password) =>
  user().updatePassword(password)

export const write = (people) => {
  var rels = {}
  var ppl = {}
  for (person in people) {
    mother = person.getMother()
    if (mother) { // if this person has a mother
      relate(i, 'mother', person.getID(), mother.getID(), rels)
    }
    father = person.getFather()
    if (father) { // if this person has a father
      relate(i, 'father', person.getID(), father.getID(), rels)
    }
    for (child in person.getChildren()) {
      if (child.getMother() === person) { // if this person is the mother
        relate('mother', child.getID(), person.getID(), rels)
      } else if (child.getFather() == person) { // if this person is the father
        relate('father', child.getID(), person.getID(), rels)
      }
    }
    ppl[person.id] = {name: person.name, email: person.email}
  }
  entry().set({people: ppl, relationships: rels})
}
const relate = (type, childID, parentID, rels) => {
  key = relationKeyGen(type, childID, parentID)
  if (!(key in rels)) { // efficiency can go stick its head in a pig
    rels[key] = {type: type, child: childID, parent: parentID}
  }
}
const relationKeyGen = (type, childID, parentID) => {
  return `{type}:{childID}:{parentID}`
}
