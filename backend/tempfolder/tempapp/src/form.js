import React, { Component } from 'react';
import './App.css';

class forma extends Component {
  render(){
    return (
      <div >
      <form>
          <p>Email:</p>
          <input type='email' name='email'></input>
          <p>password:</p>
          <input type="password" name="pass"></input>
          <input type="submit" value="Sign In"/>
    <button type='button' onClick={window.alert("sign up done")}>Sign Up</button>
      </form>
      </div>
    );}
}

export default forma;