/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';

import RegComponent from './components/register/Register'
import HomeComponent from './components/home/Home'



export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'home', component: RegComponent }}
        renderScene = {(route, navigator) =>
          <HomeComponent></HomeComponent>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic: {
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
