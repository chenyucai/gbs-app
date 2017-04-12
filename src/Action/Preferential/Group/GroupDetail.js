/**
 * page 团购详情
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../../../utils/ScreenUtils';

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import BlockTitleComponent from '../../../BaseView/BlockTitle/BlockTitle';

export default class GroupDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _buy(){
    var { navigator } = this.props;
    if (navigator) {
      navigator.push({
        id: 'confirmOrder',
      })
    }
  }

  render () {
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "团购详情",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>

        <ScrollView>
          <Image resizeMode="cover" source={require('../../../../img/888.png')} style={{
            width: ScreenUtils.scaleSize(375),
            height: ScreenUtils.scaleSize(287)
          }}/>
          <View style={styles.header}>
            <View style={styles.header_title_wrapper}>
              <Text style={styles.header_title}>【 紧肤系列 】</Text>
              <Text style={styles.header_title_level}>6个疗程</Text>
            </View>

            <Text style={styles.header_intro} numberOfLines={2}>
              润百颜水光针2ml＋伊肤泉无菌修复美颜＋润百颜水光针2ml＋伊肤泉无菌修复美颜＋保加利亚玫瑰精油36ml+润百颜水光针2ml
            </Text>

            <View style={styles.header_price}>
              <Text style={styles.header_price_now}>¥ 699.00</Text>
              <Text style={styles.header_price_old}>¥ 1599.00</Text>
            </View>

            <View style={{
              marginHorizontal: 12,
              borderTopWidth: 0.5,
              borderColor:'#d7d7d7',
              paddingTop:20
            }}>
              <View style={styles.group_wrapper}>
                <Text style={styles.group_count}>已参团3人  |  剩2人</Text>
              </View>

              <Text style={styles.deadline}>
                截止日期：2016.10.20 24:00
              </Text>

              <Text style={styles.remark}>
                本产品适用于光电美容的所有门店
              </Text>
            </View>
          </View>

          {/* 拼团规则 */}
          <View style={{
            marginTop: 10,
            backgroundColor:'#fff'
          }}>
            <View style={{
              paddingVertical: 20
            }}>
              <BlockTitleComponent titleZh="拼团规则" titleEn="Group-buying rules"/>
            </View>
            <Text style={{
              paddingHorizontal:12,
              fontSize:12,
              lineHeight:20
            }}>
              每个商品都有单独购买价格和拼团价格，选择拼团购买进行商品下单，开团支付成功后获取转发链接，邀请好友参团，参团成员也可以将该团分享出去邀约更多的团员参团，在规定时间内在规定时...
            </Text>
          </View>

          {/* 推荐 */}
          <View style={styles.recommend_wrapper}>
            <View style={styles.recommend_body}>
              <Image source={require('../assets/g.jpg')} style={styles.recommend_icon}/>
              <Image source={require('../assets/g.jpg')} style={styles.recommend_icon}/>
              <Image source={require('../assets/g.jpg')} style={styles.recommend_icon}/>
              <Image source={require('../assets/icon_more.png')} style={{marginBottom:10}}/>
            </View>
            <View style={styles.recommend_footer}>
              <View style={styles.recommend_left}><Image source={require('../../../BaseView/assets/line_left.png')}/></View>
              <Text style={styles.recommend_title}>224人推荐这个服务</Text>
              <View style={styles.recommend_right}><Image source={require('../../../BaseView/assets/line_right.png')}/></View>
            </View>
          </View>

          {/* 图文详情 购买须知 评价 */}
          <View style={styles.body_wrapper}>
            <View style={styles.body_header}>
              <View style={styles.body_header_item}>
                <Text style={styles.body_header_item_title}>图文详情</Text>
                <View style={styles.body_header_item_icon}></View>
              </View>
              <View style={styles.body_header_item}>
                <Text style={styles.body_header_item_title}>购买须知</Text>
                <View style={styles.body_header_item_icon}></View>
              </View>
              <View style={styles.body_header_item}>
                <Text style={styles.body_header_item_title}>评价</Text>
                <View style={styles.body_header_item_icon}></View>
              </View>
            </View>
            <View style={styles.body_content}>

            </View>
          </View>
        </ScrollView>

        <View style={styles.cart_wrapper}>
          <View style={styles.cart_goods}>
            {/* 此处少了一个购物车的图标 */}
            <Image source={require('../../../BaseView/assets/icon_dis_Cart.png')}/>
          </View>
          <TouchableOpacity style={styles.cart_addCart}>
            <Text style={styles.cart_text}>加入购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cart_buyNow} onPress={this._buy.bind(this)}>
            <Text style={styles.cart_text}>立即购买</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  header:{
    backgroundColor:'#fff',
    marginBottom: 10
  },
  header_title_wrapper:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:16,
    alignItems:'center',
    justifyContent:'center'
  },
  header_title:{
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center'
  },
  header_title_level:{
    fontSize: 12,
    color:'#fff',
    backgroundColor:'#FF6D99',
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  header_price:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center'
  },
  header_price_now:{
    fontSize: 18,
    fontWeight: '500',
    textAlign:'center',
    color:'#FF6D99',
    marginRight: 15
  },
  header_price_old:{
    fontSize: 12,
    color:'#B8B8B8',
    textDecorationLine:'line-through'
  },
  header_intro:{
    fontSize: 12,
    color:'#656565',
    lineHeight: 20,
    paddingHorizontal: 12
  },
  item_border:{
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#B8B8B8',
  },
  header_item_title: {
    fontSize: 12,
    color: '#363334',
    marginLeft: 10
  },
  remark:{
    marginTop: 15,
    marginBottom: 15,
    fontSize: 12,
    color:'#656565',
    textAlign: 'center'
  },
  recommend_body:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center'
  },
  recommend_wrapper:{
    backgroundColor:'#fff',
    paddingTop: 40
  },
  recommend_icon:{
    width: ScreenUtils.scaleSize(30),
    height: ScreenUtils.scaleSize(30),
    borderRadius: ScreenUtils.scaleSize(15),
    marginRight: 15,
    marginBottom: 10
  },
  recommend_footer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:10,
    marginBottom: 20
  },
  recommend_title: {
    paddingLeft: 10,
    paddingRight: 10,
    color:'#B8B8B8',
    fontSize:12
  },
  body_wrapper:{
    backgroundColor:'#fff',
    marginTop: 10,
    marginBottom: 10
  },
  body_header:{
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth: 1,
    borderColor:'#D7D7D7'
  },
  body_header_item:{
    flex:1,
    alignItems:'center'
  },
  body_header_item_title:{
    color: '#B8B8B8',
    fontSize: 12
  },
  body_header_item_icon:{
    width: 10,
    height: 1,
    backgroundColor:'#363334'
  },
  body_content:{
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7'
  },
  cart_wrapper:{
    height: ScreenUtils.scaleSize(50),
    flexDirection:'row',
  },
  cart_goods:{
    flex:1,
    backgroundColor:'#363334',
    alignItems:'center',
    justifyContent:'center'
  },
  cart_addCart:{
    width: ScreenUtils.scaleSize(114),
    backgroundColor:'#656565',
    alignItems:'center',
    justifyContent:'center'
  },
  cart_buyNow:{
    width: ScreenUtils.scaleSize(100),
    backgroundColor:'#FF6D99',
    alignItems:'center',
    justifyContent:'center'
  },
  cart_text:{
    fontSize: 14,
    color: '#fff'
  },
  group_wrapper:{
    width: 130,
    height:30,
    backgroundColor:'#FF5D94',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:"center",
    marginBottom:10
  },
  group_count:{
    fontSize: 12,
    color:'#fff'
  },
  deadline:{
    fontSize: 12,
    alignSelf:'center'
  }
});
