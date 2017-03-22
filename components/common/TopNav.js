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
    let bgColor = this.props.bgColor;

    return (
      <View style={{
        height:60,
        flexDirection: 'row',
        backgroundColor: bgColor,
        justifyContent: 'center',
        paddingTop:25,
        alignItems: 'center',
      }}>
        <TouchableOpacity style={styles.back}>
          <Image source={require('./image/icon_Return.png')} />
        </TouchableOpacity>
        <View>
            <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 10,
    top:32
  },
  title: {
    fontSize: 18,
    color: '#fff'
  }
});
