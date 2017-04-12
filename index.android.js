/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import BottomTabsComponent from './components/common/BottomTabs';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'login', component: BottomTabsComponent }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}
//
// import React, {Component} from 'react';
// import {
//     AppRegistry,
// } from 'react-native';
//
// import App from './src/App';
// export default class GuangBoShi extends Component {
//   render() {
//     return (
//         <App data={this.props}/>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => GuangBoShi);
