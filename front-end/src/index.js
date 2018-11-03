import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import{ firebaseApp } from './firebase';

import FormsPage1 from './Signup';
import FormsPage2 from './Login';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import{Router, Route, browserHistory} from 'react-router';
import AppAfterSignIn from "./AppAfterSignIn";


firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user signed in or up', user);
        browserHistory.push('/app2');
    } else{
        console.log('user has signed put or still needs to sign in');
        browserHistory.replace('/app' );
    }
})




ReactDOM.render(
    <Router path="/app" history={browserHistory}>
            <Route path = "/app" component = {App}/>
            <Route path = "/app2" component={AppAfterSignIn}/>
            <Route path ="/login" component = {FormsPage2}/>
            <Route path ="/register" component = {FormsPage1}/>


    </Router>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
