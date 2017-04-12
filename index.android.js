/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import App from './src/App';
export default class GuangBoShi extends Component {
  render() {
    return (
        <App data={this.props}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => GuangBoShi);
