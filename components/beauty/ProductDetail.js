/**
 * page 产品详情页面
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

import ScreenUtils from '../../utils/ScreenUtils';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import TopNavWidthActionsComponent from '../common/TopNavWithActions';
import BlockTitleComponent from '../common/BlockTitle';
import ProductItemComponent from '../common/ProductItem';
import ConfirmOrderComponent from './ConfirmOrder';
import CommentItemComponent from '../common/CommentItem';
import MessageComponent from './Message'
import DiaryListComponent from '../beauty/DiaryList';

export default class ProductDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goMesaage(){
    if (this.props.navigator) {
      this.props.navigator.push({
        name:"Message",
        component: MessageComponent
      })
    }
  }

  _goDairy(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'diaryList',
        component: DiaryListComponent
      });
    }
  }

  _buy(){
    var { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'confirmOrder',
        component: ConfirmOrderComponent
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
        <TopNavWidthActionsComponent title="产品详情" navigator={this.props.navigator}/>

        <ScrollView>
          <Image resizeMode="cover" source={require('../../img/25C07421-D400-414E-A865-EF013EC8E9C8.png')} style={{
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

            <View style={styles.header_items}>
              <TouchableOpacity style={styles.header_item} onPress={this._goMesaage.bind(this)}>
                <Image source={require('./image/icon_message3.png')}/>
                <Text style={styles.header_item_title}>在线留言</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.header_item} onPress={this._goDairy.bind(this)}>
                <Image source={require('./image/icon_Diary.png')}/>
                <Text style={styles.header_item_title}>日记本</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.remark}>
              本产品适用于光电美容的所有门店
            </Text>
          </View>

          <ScrollView horizontal style={styles.coupon_wrapper}>
            <View style={styles.coupon_item}>
              <View style={styles.coupon_item_content}>
                <Text style={styles.coupon_item_desc}>满1000减50</Text>
                <Text style={styles.coupon_item_value}>￥ 50</Text>
              </View>
            </View>
            <View style={styles.coupon_item}>
              <View style={styles.coupon_item_content}>
                <Text style={styles.coupon_item_desc}>满1000减50</Text>
                <Text style={styles.coupon_item_value}>￥ 50</Text>
              </View>
            </View>
            <View style={styles.coupon_item}>
              <View style={styles.coupon_item_content}>
                <Text style={styles.coupon_item_desc}>满1000减50</Text>
                <Text style={styles.coupon_item_value}>￥ 50</Text>
              </View>
            </View>
          </ScrollView>

          {/* 推荐 */}
          <View style={styles.recommend_wrapper}>
            <View style={styles.recommend_body}>
              <Image source={require('./image/g.jpg')} style={styles.recommend_icon}/>
              <Image source={require('./image/g.jpg')} style={styles.recommend_icon}/>
              <Image source={require('./image/g.jpg')} style={styles.recommend_icon}/>
              <Image source={require('./image/icon_more.png')} style={{marginBottom:10}}/>
            </View>
            <View style={styles.recommend_footer}>
              <View style={styles.recommend_left}><Image source={require('../common/image/line_left.png')}/></View>
              <Text style={styles.recommend_title}>224人推荐这个服务</Text>
              <View style={styles.recommend_right}><Image source={require('../common/image/line_right.png')}/></View>
            </View>
          </View>

          {/* 图文详情 购买须知 评价 */}
          <ScrollableTabView
            tabBarUnderlineStyle={{
              backgroundColor:'#363334',
              height: 2,
              width: 10,
              marginLeft: 55
            }}
            tabBarBackgroundColor='#fff'
            tabBarActiveTextColor='#3a3738'
            tabBarInactiveTextColor='#B8B8B8'
            tabBarTextStyle={{fontSize: 12}}
          >
            {/* <View style={styles.body_header}>
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
            </View> */}

            <View style={styles.body_header_item} tabLabel='图文详情'><Text style={{flex: 1}}>图文详情</Text></View>
            <View style={styles.body_header_item} tabLabel='购买须知'><Text>购买须知</Text></View>
            <View style={styles.body_header_item} tabLabel='评价'>
              <View style={styles.body_content}>
                <View style={styles.comment_item}><CommentItemComponent /></View>
                <View style={styles.comment_item}><CommentItemComponent /></View>
                <View style={styles.comment_item}><CommentItemComponent /></View>
                <View style={styles.comment_item}><CommentItemComponent /></View>
              </View>
            </View>
          </ScrollableTabView>

          {/* 相关单品推荐 */}
          <View style={styles.hot_wrapper}>
            <View style={[styles.recommend_footer]}>
              <View style={styles.recommend_left}><Image source={require('../common/image/line_left.png')}/></View>
              <Text style={styles.recommend_title}>相关单品推荐</Text>
              <View style={styles.recommend_right}><Image source={require('../common/image/line_right.png')}/></View>
            </View>
            <View style={styles.hot_body}>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo}/>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.cart_wrapper}>
          <View style={styles.cart_goods}>
            {/* 此处少了一个购物车的图标 */}
            <Image source={require('../common/image/icon_dis_Cart.png')}/>
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
    // height: Dimensions.get('window').height
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
  header_items:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#B8B8B8',
    paddingTop: 15,
    paddingBottom:15,
    marginLeft: 12,
    marginRight: 12,
  },
  header_item: {
    flex:1,
    alignItems:'center'
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
  coupon_wrapper: {
    height: 94,
    backgroundColor:'#fff',
    paddingLeft:12,
    flexDirection:'row'
  },
  coupon_item:{
    marginRight:10,
    alignSelf:'center',
    backgroundColor: '#CAA76B',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  coupon_item_content:{
    borderColor:'#fff',
    borderWidth: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  coupon_item_desc:{
    fontSize: 12,
    color: '#fff',
    textAlign:'center'
  },
  coupon_item_value:{
    fontSize: 16,
    color: '#fff',
    textAlign:'center'
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
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor:'#D7D7D7'
  },
  hot_wrapper:{
    backgroundColor:'#fff',
    marginTop: 10
  },
  hot_body:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:12,
    paddingRight:12,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#fff'
  },
  hot_item:{
    marginBottom:10,
    borderColor:'#D7D7D7',
    borderWidth: 0.5
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
  comment_item:{
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#B8B8B8',
    paddingVertical: 20
  }
});
