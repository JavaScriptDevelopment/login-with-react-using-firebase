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
    login(event){
            const email = this.refs.email.value;
            const password = this.refs.password.value;
            console.log(email, password);
        
         const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email, password);

            promise.catch(e => {
                var err = e.message;
                console.log(err);
                this.setState({err: err});
            });
        
        
        }
    
    
        signup(){
            const email = this.refs.email.value;
            const password = this.refs.password.value;
            console.log(email, password);

            const auth = firebase.auth();
            const promise = auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);

        }


    
    
    
    
    
    


    constructor(props) {
      super(props)
    
     
      this.state = {
          err: ''
      };

      this.login = this.login.bind(this);
      this.signup = this.signup.bind(this);


    }
        
    
    render(){
        return(
            <div>
                    <input id = "email" ref = "email" type = "email" placeholder = "Enter your email" /> <br />                
                    <input id = "pass" ref = "password" type = "password" placeholder = "Enter your password" /> <br />  
                    <p>{this.state.err}</p>
                    <button onClick = {this.login}>Log In </button>
                    <button onClick = {this.signup}>Sign Up</button>
                    <button onClick = {this.logout}>Log out</button>
                        
            </div>
        );
    }
}



export default Authen;
