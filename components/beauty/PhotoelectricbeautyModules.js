import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import {scaleSize,setSpText} from '../../utils/ScreenUtils';

export default class PhotoelectricbeautyModulesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item_line}>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_all.png')}/>
            <Text style={styles.item_title}>全部</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_face.png')}/>
            <Text style={styles.item_title}>面部塑形</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_skin.png')}/>
            <Text style={styles.item_title}>皮肤管理</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_body.png')}/>
            <Text style={styles.item_title}>身体塑形</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    backgroundColor:'#fff',
  },
  item_line: {
    flexDirection: 'row'
  },
  item: {
    flex:1,
  },
  item_icon:{
    alignSelf:'center',
    marginTop: 25,
    marginBottom:5
  },
  item_title: {
    textAlign:'center',
    fontSize:12,
    color:'#363334',
    lineHeight:17
  }
});
