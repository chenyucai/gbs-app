/**
 * page 确认订单
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav';
import PayProductInfoComponent from './PayProductInfo';
import PayComponent from './Pay';

export default class ConfirmOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _pay(){
    var { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'pay',
        component: PayComponent
      })
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="确认订单" navigator={this.props.navigator}/>

        <ScrollView style={{flex:1}}>
          <PayProductInfoComponent />

          <View style={styles.count_wrapper}>
            <Text style={styles.count_label}>购买数量</Text>
            <Text style={styles.count_number}>2件</Text>
          </View>

          <View style={styles.pay_info}>
            <View style={styles.pay_info_item}>
              <Text style={styles.pay_info_item_label}>使用优惠券</Text>
              <Text style={{fontSize:14,color:'#D9BD8C'}} numberOfLines={1}>15.00元</Text>
              <Image source={require('./image/icon_Get into3.png')}/>
            </View>
            <View style={styles.pay_info_item}>
              <Text style={styles.pay_info_item_label}>使用积分</Text>
              <Text numberOfLines={1} style={{fontSize:12,color:'#363334',marginRight:8}}>共2100积分，可抵消20元</Text>
              <Image source={require('./image/check_dis.png')}/>
            </View>
            <View style={[styles.pay_info_item, {borderBottomWidth:0}]}>
              <Text style={styles.pay_info_item_label}>本单合计</Text>
              <Text numberOfLines={1} style={{fontSize:14,color:'#FF5D94'}}>¥ 85.00</Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.btn} onPress={this._pay.bind(this)}>
          <Text style={styles.btn_text}>确认订单</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  btn:{
    height: 50,
    backgroundColor:'#FF6D99',
    justifyContent:'center'
  },
  btn_text:{
    color:'#fff',
    fontSize: 14,
    alignSelf:'center'
  },
  count_wrapper:{
    backgroundColor:'#fff',
    flexDirection:'row',
    height:50,
    paddingHorizontal:12,
    alignItems:'center',
    marginBottom: 10,
    marginTop: 10
  },
  count_label:{
    flex:1,
    fontSize: 14,
    color:'#656565'
  },
  count_number:{
    fontSize: 14,
    marginRight:3
  },
  pay_info:{
    backgroundColor:'#fff',
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7',
  },
  pay_info_title:{
    height:40,
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7',
    marginLeft: 12,
    justifyContent:'center'
  },
  pay_info_title_text:{
    fontSize: 12,
    color:'#656565'
  },
  pay_info_item:{
    flexDirection:'row',
    marginLeft: 12,
    alignItems:'center',
    height:50,
    paddingRight: 12,
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7'
  },
  pay_info_item_label:{
    flex:1,
  }
});
