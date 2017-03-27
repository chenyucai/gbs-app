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

    return (
      <View style={{
        height:64,
        flexDirection: 'row',
        backgroundColor: bgColor,
        justifyContent: 'center',
        paddingTop:25,
        alignItems: 'center',
      }}>
        <TouchableOpacity style={styles.back} onPress={this._back.bind(this)}>
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
