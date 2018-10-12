import React, { Component } from 'react';
import Carousel from './Carousel';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return(
      <div>
          <NavBar/>
          <div>
              <Carousel/>
          </div>
      </div>


    );
  }
}

export default App;
