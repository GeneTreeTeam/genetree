import React, { Component } from 'react';

import FooterPage from "./Footer";
import FormsPage3 from "./Forgotpassword";
import Narbar from "./NavBar";

class App extends Component {


    render() {
        return(
            <div>
                <Narbar/>
                <FormsPage3/>
                <div>
                    You are signed in
                </div>
                <FooterPage/>
            </div>
        );
    }
}

export default App;
