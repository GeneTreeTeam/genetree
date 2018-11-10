import React, { Component } from 'react';
import './App.css';
// import people from './firebase_example'
import {signUp }from './firebase_example/people'

class App extends Component {
  printMe(){
      signUp("jay", "email@gmail.com", "password");
  }

  render() {
   
    return (
      <form>
          <p>Email:</p>
          <input type='email' name='email'></input>
          <p>password:</p>
          <input type="password" name="pass"></input>
          <p>Username:</p>
          <input type='var' name='username'></input>

          <input type="submit" value="Sign In"/>
    <button type='button' onClick={this.printMe} >Sign Up</button>
      </form>
    );
  }
}

export default App;
