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

    };
  }

  _back(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render () {
    let bgColor = this.props.bgColor || '#23232E';
    let borderBottomWidth = this.props.bottomWidth || 0.5;
    let borderBottomColor = this.props.borderBottomColor || '#23232E';
    let fontColor = this.props.fontColor || '#fff';

    return (
      <View style={{
        height:44,
        flexDirection: 'row',
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: borderBottomColor,
        borderBottomWidth: borderBottomWidth
      }}>
        <TouchableOpacity style={styles.back} onPress={this._back.bind(this)}>
          <Image source={require('./image/icon_Return.png')} />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
            <Text style={[styles.title, {color:fontColor}]}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 10,
    top:12
  },
  title: {
    fontSize: 18,
    color: '#fff'
  }
});
