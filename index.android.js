/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from "./src/app";
import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyA38iZy8oOeV9Xa-eegVxsE4gtT3b-e8ns",
  authDomain: "dukire-55859.firebaseapp.com",
  databaseURL: "https://dukire-55859.firebaseio.com",
  projectId: "dukire-55859",
  storageBucket: "dukire-55859.appspot.com",
  messagingSenderId: "891701637335"
};
firebase.initializeApp(config);

export default class SubBox extends Component {
  render() {
    return (
     <App />
    );
  }
}

AppRegistry.registerComponent('SubBox', () => SubBox);
