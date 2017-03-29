/**
 * page 支付完成
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

export default class PayCompleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _back(){
    const navigator = this.props.navigator;
    if (navigator) {
      navigator.pop();
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={{
          flex:1
        }}>
          <TouchableOpacity onPress={this._back.bind(this)}
            style={{
              position: 'absolute',
              top: 32,
              left: 6,
              zIndex:2
            }}
          >
            <Image source={require('../common/image/icon_Return.png')} />
          </TouchableOpacity>

          <Image source={require('./image/BG2.png')} style={{
            width: ScreenUtils.scaleSize(375),
            height: ScreenUtils.scaleSize(568)
          }}/>

          <View style={styles.info_box}>
            <Image source={require('../home/image/AF89940B-AB2E-480F-ABF4-F7FE9B3A6C0D.png')} style={styles.info_img}/>
            <View style={styles.info_title_wrapper}>
              <Text style={styles.info_title}>【 紧肤系列 】</Text>
              <Text style={styles.info_title_level}>6个疗程</Text>
            </View>
            <Text style={styles.info_intro} numberOfLines={1}>
              润百颜水光针2ml＋伊肤泉无菌修复美颜＋润百颜水光针2ml＋伊肤泉无菌修复美颜＋保加利亚玫瑰精油36ml+润百颜水光针2ml
            </Text>
            <Text style={styles.info_price}>¥699.00</Text>
            <Text style={styles.info_orderId} numberOfLines={1}>订单号：213468071329494920</Text>
            <View style={styles.pay_info}>
              <View style={{borderRightWidth:0.5, borderColor:'#D7D7D7',flex:1}}>
                <Text style={styles.pay_way} numberOfLines={1}>支付方式：会员余额＋微信</Text>
              </View>
              <Text style={styles.pay_time} numberOfLines={1}>支付时间：2016.10.06</Text>
            </View>
            <TouchableOpacity style={{
              borderColor:'#FF5D94',
              borderWidth:0.5,
              width:80,
              height:30,
              alignItems:'center',
              justifyContent:'center',
              marginTop: 30
            }}>
              <Text style={{color:'#FF5D94', fontSize:14}}>立即预约</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <View style={styles.btns}>
          <TouchableOpacity style={[styles.btn, {borderRightWidth:0.5, borderColor:'#d7d7d7'}]}>
            <Text style={styles.btn_text}>返回产品详情页</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>查看订单</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor:'#F0EFF5'
  },
  info_box:{
    marginTop:-370,
    width:ScreenUtils.scaleSize(310),
    alignSelf:'center',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  btns:{
    height: 50,
    borderTopColor:'#d7d7d7',
    borderTopWidth: 0.5,
    flexDirection:'row',
    backgroundColor: '#fff'
  },
  btn:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btn_text:{
    fontSize: 14
  },
  info_img:{
    width: 100,
    height: 88,
    resizeMode: 'cover',
    borderColor: '#d7d7d7',
    borderWidth: 0.5,
  },
  info_title_wrapper:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:16,
    alignItems:'center',
    justifyContent:'center'
  },
  info_title:{
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center'
  },
  info_title_level:{
    fontSize: 12,
    color:'#fff',
    backgroundColor:'#FF6D99',
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  info_intro:{
    fontSize: 12,
    color:'#656565',
    paddingHorizontal: 12
  },
  info_price:{
    fontSize: 20,
    color:'#FF6D99',
    marginVertical: 20
  },
  info_orderId:{
    backgroundColor:'#F0EFF5',
    fontSize:14,
    paddingHorizontal:10,
    paddingVertical:3,
    marginBottom:15
  },
  pay_info:{
    flexDirection:'row',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor:'#d7d7d7',
    marginHorizontal:15
  },
  pay_way:{
    flex:1,
    fontSize: 10,
    textAlign:'center',
    color:'#B8B8B8'
  },
  pay_time:{
    flex:1,
    fontSize: 10,
    textAlign:'center',
    color:'#B8B8B8'
  }
});
