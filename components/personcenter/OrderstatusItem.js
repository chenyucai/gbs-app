import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

export default class OrderstatusItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state:'close'
    };
  }

  renderState(){
    var state = this.props.state
    switch (state) {
      // case 'all':
      //   return (
      //     <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
      //       <Text style={{fontSize: 12,color: '#fff'}}>立即支付</Text>
      //     </TouchableOpacity>
      //   )
      //   break;
      case 'nostartpayment1':
        return (
          <View>
            <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
              <Text style={{fontSize: 12,color: '#fff'}}>立即支付</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      case 'nostartpayment2':
        return (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#fff',borderWidth: 0.5,borderColor: '#FF6D99'}}>
              <Text style={{fontSize: 12,color: '#FF6D99'}}>邀请参团</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99',marginLeft: 12}}>
              <Text style={{fontSize: 12,color: '#fff'}}>立即支付</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      case 'nostartconsume1':
        return (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#fff',borderWidth: 0.5,borderColor: '#FF6D99'}}>
              <Text style={{fontSize: 12,color: '#FF6D99'}}>邀请参团</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#fff',marginLeft: 12,borderWidth: 0.5,borderColor: '#B8B8B8'}}>
              <Text style={{fontSize: 12,color: '#B8B8B8'}}>等待开团...</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      case 'nostartconsume2':
        return (
          <View>
            <TouchableOpacity style={{width: 152,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
              <Text style={{fontSize: 12,color: '#fff'}}>立即预约（第一件：6/6）</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      case 'completed1':
        return (
          <TouchableOpacity style={{width: 110,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
            <Text style={{fontSize: 12,color: '#fff'}}>评分（获50积分）</Text>
          </TouchableOpacity>
        )
        break;
      case 'completed2':
        return null
        break;
      case 'refund1':
        return (
          <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
            <Text style={{fontSize: 12,color: '#fff'}}>退款详情</Text>
          </TouchableOpacity>
        )
        break;
      case 'refund2':
        return (
          <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
            <Text style={{fontSize: 12,color: '#fff'}}>退款详情</Text>
          </TouchableOpacity>
        )
        break;
      default:
        return null
    }
  }

  renderConduct () {
    var state = this.props.state
    switch (state) {
      case 'conduct':
        return (
          <View style={{flexDirection: 'row',marginTop: 12}}>
            <TouchableOpacity style={{width: 110,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#fff',borderWidth: 0.5,borderColor: '#FF6D99'}}>
              <Text style={{fontSize: 12,color: '#FF6D99'}}>评分（获50积分）</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 152,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99',marginLeft: 12}}>
              <Text style={{fontSize: 12,color: '#fff'}}>立即预约（第一件：6/6）</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      default:
        return null
    }
  }

  //状态名字描述如（待消费、已完成）
  renderStatus(){
    var state = this.props.state
    switch (state) {
      case 'nostartpayment1':
        return (
          <Text>
            待付款
          </Text>
        )
        break;
      case 'nostartpayment2':
        return (
          <Text>
            待付款
          </Text>
        )
        break;
      case 'nostartconsume1':
        return (
          <Text>
            待消费
          </Text>
        )
        break;
      case 'nostartconsume2':
        return (
          <Text>
            待消费
          </Text>
        )
        break;
      case 'conduct':
        return (
          <Text>
            进行中／评价
          </Text>
        )
        break;
      case 'completed1':
        return (
          <Text>
            已完成
          </Text>
        )
        break;
      case 'completed2':
        return (
          <Text>
            已完成
          </Text>
        )
        break;
      case 'refund1':
        return (
          <Text>
            已退款
          </Text>
        )
        break;
      case 'refund2':
        return (
          <Text>
            退款中
          </Text>
        )
        break;
      default:
        return null
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Image style={styles.package_img} source={require('../../img/WX20170330-164651.png')}/>
        </TouchableOpacity>
        <View style={styles.timestatus}>
          <Text>2016.10.08</Text>
          <View style={styles.rightborder}></View>
          <Text style={{color:'#FF6D99', fontSize:14}}>
            {this.renderStatus()}
          </Text>
        </View>
        <Text numberOfLines={1} style={{marginTop:10,marginBottom:10}}>
          【紧肤系列】
          <Text style={{color:'#656565', fontSize:14}}>白颜水光针2ml+伊肤泉无菌修复美</Text>
        </Text>
        <View style={styles.price_box}>
          <View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}>
            <Text style={styles.price}>订单价格：</Text>
            <Text style={styles.price_new}>¥108.00</Text>
          </View>
          {/* <TouchableOpacity style={{width: 70,height: 26,alignItems: 'center',justifyContent: 'center',backgroundColor: '#FF6D99'}}>
            <Text style={{fontSize: 12,color: '#fff'}}>立即支付</Text>
          </TouchableOpacity> */}
          <View>
            {this.renderState()}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.renderConduct()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 10
  },
  package_img: {
    width: ScreenUtils.scaleSize(351),
    height: ScreenUtils.scaleSize(200)
  },
  package_header_top: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  package_header_center: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    lineHeight: 17
  },
  package_header_topL: {
    width: ScreenUtils.scaleSize(42),
    height: ScreenUtils.scaleSize(18),
    backgroundColor: '#FF6D99',
    justifyContent: 'center'
  },
  package_header_topR: {
    marginLeft: 10
  },
  package_header_topL_text: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
  },
  package_header_topR_text: {
    fontSize: 16,
    color: '#363334'
  },
  package_header_centerL_text: {
    fontSize: 12,
    color: '#363334'
  },
  package_header_centerR_text: {
    fontSize: 12,
    color: '#292929'
  },
  price_box: {
    flexDirection: 'row',
    marginTop: 14,
  },
  price_new: {
    fontSize: 16,
    color: '#FF6D99'
  },
  price_old: {
    fontSize: 11,
    color: '#C9C6C6',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    flex: 1
  },
  purchased: {
    fontSize: 12,
    color: '#363334'
  },
  timestatus: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  rightborder: {
    borderRightWidth:0.5,
    height: 10,
    borderRightColor:"#b8b8b8",
    marginHorizontal: 10,
  },
  price: {
    fontSize: 14,
    color: '#656565'
  }
});
