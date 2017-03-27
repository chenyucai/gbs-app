/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import RegComponent from './components/register/Register'
import LoginComponent from './components/register/Login'
import HomeComponent from './components/home/Home'



export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'home' }}
        renderScene = {(route, navigator) =>
          <HomeComponent></HomeComponent>
        }
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
