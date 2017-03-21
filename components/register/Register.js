import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Navigator,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import TopNavComponent from '../common/TopNav';

export default class RegComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '123'
    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="12334"></TopNavComponent>
        <Text style={styles.text}>sdfsfs</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#23232e',
    height: Dimensions.get('window').height
  },
  text: {
    color: '#fff'
  }
});
