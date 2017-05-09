import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../../../Utils/ScreenUtils/ScreenUtils';
import GroupDetailComponent from '../GroupDetail'

export default class GrouppurchaseItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goGroupDetail() {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'GroupDetail',
      });
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this._goGroupDetail.bind(this)}>
          <Image style={styles.package_img} source={require('../../../../../img/WX20170330-164651.png')}/>
          <View style={styles.group_box}>
            <View style={styles.time}>
              <Text style={styles.time_text}>
                仅剩：3天 09小时 24分
              </Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.count_text}>
                5人团 | 已参团2人
              </Text>
            </View>
          </View>
          <Text numberOfLines={1} style={{marginTop:13,marginBottom:10}}>
            【紧肤系列】
            <Text style={{color:'#656565', fontSize:14}}>白颜水光针2ml+伊肤泉无菌修复美</Text>
          </Text>
          <View style={styles.price_box}>
            <Text style={styles.price_new}>¥998</Text>
            <Text style={styles.price_old}>¥3599.00</Text>
            <Text style={styles.purchased}>已购买1234</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 15
  },
  group_box:{
    height:30,
    flexDirection:'row'
  },
  time:{
    flex:1,
    backgroundColor:'#363334',
    opacity: 0.8,
    justifyContent:'center'
  },
  time_text:{
    fontSize:14,
    color:"#fff",
    paddingLeft:10
  },
  count:{
    backgroundColor:'#FF6D99',
    justifyContent:'center',
    width:130
  },
  count_text:{
    fontSize:12,
    color:"#fff",
    paddingLeft:10
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
    alignItems: 'flex-end'
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
  }
});
