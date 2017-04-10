/**
 * component 支付订单页面头部
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

export default class PayProductInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Image source={require('../Home/assets/AF89940B-AB2E-480F-ABF4-F7FE9B3A6C0D.png')} style={styles.img}/>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>【 紧肤系列 】</Text>
          <Text style={styles.desc} numberOfLines={2}>润百颜水光针伊肤泉无菌修复美颜润百颜水光针2ml伊肤泉无菌修复美颜伊肤泉无菌修复美颜伊肤泉无菌修复美颜</Text>

          <Text style={styles.pay}>
            应付：
            <Text style={{fontSize:14, color:'#FF5D94'}} numberOfLines={1}>¥ 699.00</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: 118,
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7',
    paddingHorizontal: 12,
    paddingVertical: 15,
    flexDirection:'row'
  },
  info:{
    flex:1
  },
  img:{
    resizeMode: 'cover',
    width: 100,
    height: 88,
    marginRight: 12,
    borderWidth: 0.5,
    borderColor:'#D7D7D7',
  },
  title:{
    fontSize:16,
  },
  desc:{
    flex:1,
    fontSize:12,
    color:'#656565',
    paddingTop: 5
  },
  pay:{
    color:'#656565',
    fontSize: 14
  }
});
