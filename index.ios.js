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

// import RegComponent from './components/register/Register'
import LoginComponent from './components/register/Login'
// import HomeComponent from './components/home/Home';
// import HomeSearchComponent from './components/home/HomeSearch'
// import HomeSaleListComponent from './components/home/HomeSaleList';
// import RecommendStoreListComponent from './components/home/RecommendStoreList';
// import SpecialColumnComponent from './components/home/SpecialColumn'
import PhotoelectricbeautyComponent from './components/beauty/Photoelectricbeauty'


export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'login', component: PhotoelectricbeautyComponent }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
