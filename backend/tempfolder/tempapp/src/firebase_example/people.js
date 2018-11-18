import firebase from './firebase'
// Frontend uses JS instead of JSON now

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


function user() {
  return firebase.auth().currentUser
}
function db() {
  return firebase.firestore().collection('users')
}
function entry() {
  return db().doc(user().email)
}


export default class Person {
  constructor(people, name, email, id) { //id supplied must be unique
    this.mother = null;
    this.father = null;
    this.children = [];
    this.name = name;
    this.email = email;
    this.id = id;

    people[this.id] = this;
  }

  getMother() {
    return this.mother;
  }
  getFather() {
    return this.father;
  }
  getChildren() {
    return this.children;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getID() {
    return this.id;
  }

  //set relationships

  setMother(mother) {
    if (self.mother !== mother) {
      if (self.mother) {
        self.mother.removeChild(self);
      }
      if (mother) {
        mother.addChild(self);
      }
      self.mother = mother;
    }
  }
  setFather(father) {
    if (self.father !== father) {
      if (self.father) {
        self.father.removeChild(self);
      }
      if (father) {
        father.addChild(self);
      }
      self.father = father;
    }
  }
  setAsMother(child) {
    child.setMother(this);
  }
  setAsFather(child) {
    child.setFather(this);
  }
  //Remove this Person from all relationships(via children) AND database.
  remove(people) {    //delete person
    for (child in this.children) {
      if (child.getMother() === this) {
        child.setMother(null);
      } else if (child.getFather() === this) {
        child.setFather(null);
      }
    }
    
    mother.removeChild(this);
    father.removeChild(this);
    
    if (people) {
      people.remove(this.id);
    }
  }

  //Only creates child does not set relationship (external use complex so avoid)
  addChild(child) {
    for (c in children) {
      if (c === child) {  //checks existing children for duplicacy
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
    return false //child not found
  }
}

export const read = () => {   //assuming already logged in
  return entry().get().then(function(doc) {
    var people = {}
    var id = 0
    for (pinfo in doc.data().people) {
      people[id] = Person(people, pinfo.name, pinfo.email, id)
      id++
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
        default:
          console.warn('Unrecognized relationship: '+rinfo.type)
      }
    }
    return people
  })
}


//Function to create new user who is member (non memebers created using addChild)
export const signUp = (username, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  console.log("It made me.")
  var ppl = {}
  ppl[0] = {name: username, email: email}
  db().doc(email).set({
    people: ppl,
    relationships: {}
  })
}

export const logIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)


export const logOut = () =>
  firebase.auth().signOut()

// Function to reset password if forgotten
export const pwdReset = (email) =>
  firebase.auth().sendPasswordResetEmail(email)

// Function to change password assuming logged in
export const pwdChange = (password) =>
  user().updatePassword(password)

//Write member info to database
export const write = (people) => {
  var rels = {}
  var ppl = {}
  for (person in people) {
    mother = person.getMother()
    if (mother) { //if has mother
      relate(i, 'mother', person.getID(), mother.getID(), rels)
    }
    father = person.getFather()
    if (father) { //if has a father
      relate(i, 'father', person.getID(), father.getID(), rels)
    }
    for (child in person.getChildren()) {
      if (child.getMother() === person) { // if is mother
        relate('mother', child.getID(), person.getID(), rels)
      } else if (child.getFather() == person) { // if is father
        relate('father', child.getID(), person.getID(), rels)
      }
    }
    ppl[person.id] = {name: person.name, email: person.email}
  }
  entry().set({people: ppl, relationships: rels})
}

//stores type of relationship
const relate = (type, childID, parentID, rels) => {
  key = relationKeyGen(type, childID, parentID)
  if (!(key in rels)) { // efficiency can go stick its head in a pig
    rels[key] = {type: type, child: childID, parent: parentID}
  }
}

//determines relationship
const relationKeyGen = (type, childID, parentID) => {
  return `{type}:{childID}:{parentID}`
}
