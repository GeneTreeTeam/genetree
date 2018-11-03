import React, { Component } from 'react';
import Carousel from './Carousel';
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
