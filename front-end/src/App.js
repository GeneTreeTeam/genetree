import React, { Component } from 'react';
import Carousel from './Carousel';
import NavBar from './NavBar';
import NarbarFeature from "./NarbarFeatures";
import FooterPage from "./Footer";
import FormsPage3 from "./Forgotpassword";

class App extends Component {
  render() {
    return(
      <div>
          <NarbarFeature/>
          <FormsPage3/>
          <div>
              <Carousel/>
          </div>
          <FooterPage/>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// // import people from './firebase_example'
// import {signUp }from './firebase_example/people'

// class App extends Component {
//   printMe(){
//       signUp("jay", "email@gmail.com", "password");
//   }

//   render() {
   
//     return (
//       <form>
//           <p>Email:</p>
//           <input type='email' name='email'></input>
//           <p>password:</p>
//           <input type="password" name="pass"></input>
//           <p>Username:</p>
//           <input type='var' name='username'></input>

//           <input type="submit" value="Sign In"/>
//     <button type='button' onClick={this.printMe} >Sign Up</button>
//       </form>
//     );
//   }
// }

// export default App;
