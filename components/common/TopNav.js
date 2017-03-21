import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class TopNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '123'
    };
  }

  render () {
    return (
      // <View style={{
      //   // height:60,
      //   flexDirection: 'row',
      //   backgroundColor:'blue',
      //   justifyContent: 'center',
      //   paddingTop:30,
      //   // alignItems: 'center',
      // }}>
      //   <Text style={styles.text1}>123</Text>
      //   <Text style={styles.text}>456</Text>
      // </View>
      <View style={styles.navGroup}>
          <TouchableOpacity style={styles.scenes}>
              <Text style={styles.title}>&lt; 返回</Text>
          </TouchableOpacity>
          <View style={styles.scenes}>
              <Text style={styles.title}>初始化密码</Text>
          </View>
          <View style={styles.scenes}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#495A80',
        height: 60,
        paddingHorizontal: 5
    },
    title: {
        color: '#fff', fontSize: 16
    },
    text: {
        color: '#495A80', fontSize: 14, textAlign: 'center'
    },
    scenes: {
        flex: 1
    },
  wrapper: {
    height: 200
  },
  text1: {
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  text: {
    // flex:1,
    color: '#fff',
    left:0
  }
});
