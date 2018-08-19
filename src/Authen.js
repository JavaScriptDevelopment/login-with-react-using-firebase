import React, { Component } from 'react';
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAgO_Ma0UO_rxCoJmKMeknFc4tCbPlI8m4",
    authDomain: "usurvey-73d0d.firebaseapp.com",
    databaseURL: "https://usurvey-73d0d.firebaseio.com",
    projectId: "usurvey-73d0d",
    storageBucket: "usurvey-73d0d.appspot.com",
    messagingSenderId: "48941761363"
  };
  firebase.initializeApp(config);

class Authen extends Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}



export default Authen;
