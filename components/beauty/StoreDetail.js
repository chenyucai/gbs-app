import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  // MapView,
  TouchableOpacity
} from 'react-native'

import MapView from 'react-native-maps';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavWidthActionsComponent from '../common/TopNavWithActions';
import StarComponent from '../common/Star';
import BlockTitleComponent from '../common/BlockTitle';
import ProductItemComponent from '../common/ProductItem';
import MessageComponent from './Message'

export default class StoreDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goMesaage(){
    var { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name:"Message",
        component: MessageComponent
      })
    }
  }

  render () {
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height: ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <TopNavWidthActionsComponent title="门店详情" navigator={this.props.navigator}/>

        <ScrollView>
          <Image resizeMode="cover" source={require('../../img/25C07421-D400-414E-A865-EF013EC8E9C8.png')} style={{
            width: ScreenUtils.scaleSize(375),
            height: ScreenUtils.scaleSize(287)
          }}/>
          <View style={styles.header}>
            <View style={styles.header_title_wrapper}>
              <Text style={styles.header_title}>MISS  月星环球港店</Text>
            </View>

            <View style={styles.header_star}>
              <StarComponent score="4"/>
            </View>
            <Text style={styles.header_intro} numberOfLines={3}>
              上海月星环球港,一座欧式的顶级商业综合体购物商场,其建筑灯光工程融合了弧形玻璃穹顶点缀着整体的特色,采自然之光,赋予了建筑生命、阳光和活力。在这繁华的上海月星环球港,一座欧式购
            </Text>
            <View style={styles.header_items}>
              <TouchableOpacity style={styles.header_item} onPress={this._goMesaage.bind(this)}>
                <Image source={require('./image/icon_message2.png')}/>
                <Text style={styles.header_item_title}>在线留言</Text>
              </TouchableOpacity>
              <View style={[styles.header_item, styles.item_border]}>
                <Image source={require('./image/icon_Complaint.png')}/>
                <Text style={styles.header_item_title}>投诉</Text>
              </View>
              <View style={styles.header_item}>
                <Image source={require('./image/icon_appointment.png')}/>
                <Text style={styles.header_item_title}>立即预约</Text>
              </View>
            </View>
            <Text style={styles.remark}>
              本店与2017.2.10-2017.3.10暂停营业，敬请见谅！
            </Text>
          </View>

          {/* <View style={styles.ctg_wrapper}>
            <ScrollView horizontal style={styles.ctg_header}>
              <View style={styles.ctg_header_item}>
                <Text style={styles.ctg_header_item_text}>面部塑形</Text>
              </View>
              <View style={styles.ctg_header_item}>
                <Text style={styles.ctg_header_item_text}>面部塑形</Text>
              </View>
              <View style={styles.ctg_header_item}>
                <Text style={styles.ctg_header_item_text}>面部塑形</Text>
              </View>
            </ScrollView>
            <ScrollView horizontal style={styles.ctg_body}>
              <View style={styles.ctg_body_item}>
                <Text style={styles.ctg_body_item_text}>全部</Text>
              </View>
              <View style={styles.ctg_body_item}>
                <Text style={styles.ctg_body_item_text}>净浮系列</Text>
              </View>
              <View style={styles.ctg_body_item}>
                <Text style={styles.ctg_body_item_text}>嫩肤系列</Text>
              </View>
            </ScrollView>
          </View> */}

          <ScrollableTabView
            tabBarUnderlineStyle={{
              backgroundColor:'#363334',
              height: 2,
              width: 10,
              marginLeft: 40
            }}
            tabBarBackgroundColor='#fff'
            tabBarActiveTextColor='#3a3738'
            tabBarInactiveTextColor='#B8B8B8'
            tabBarTextStyle={{fontSize: 12}}
          >
            <View tabLabel='全部'>
              <View style={styles.ctg_body}>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>全部</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>slkfjlsd</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>234i23i4</Text>
                </View>
              </View>
            </View>
            <View tabLabel='面部塑形'>
              <View style={styles.ctg_body}>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>全部</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>23123</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>嫩肤5646456456系列</Text>
                </View>
              </View>
            </View>
            <View tabLabel='皮肤管理'>
              <View style={styles.ctg_body}>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>全部</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>净浮系列</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>嫩肤系列</Text>
                </View>
              </View>
            </View>
            <View tabLabel='身体塑形'>
              <View style={styles.ctg_body}>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>全部</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>123</Text>
                </View>
                <View style={styles.ctg_body_item}>
                  <Text style={styles.ctg_body_item_text}>嫩肤345系列</Text>
                </View>
              </View>
            </View>
          </ScrollableTabView>



          {/* <ScrollView horizontal style={styles.coupon_wrapper}>
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
          </ScrollView> */}

          {/* 门店特色 */}
          <View style={styles.store_wrapper}>
            <View style={styles.store_title}>
              <BlockTitleComponent titleEn="Feature of stores" titleZh="门店特色"/>
            </View>
            <View style={styles.store_content}>
              <View style={styles.store_item}>
                <Image source={require('./image/icon_Orders.png')}/>
                <Text style={styles.store_count}>2260</Text>
                <Text style={styles.store_label}>接单数</Text>
              </View>
              <View style={styles.store_item}>
                <Image source={require('./image/icon_technician.png')}/>
                <Text style={styles.store_count}>10</Text>
                <Text style={styles.store_label}>技师</Text>
              </View>
              <View style={styles.store_item}>
                <Image source={require('./image/icon_message.png')}/>
                <Text style={styles.store_count}>248</Text>
                <Text style={styles.store_label}>评论</Text>
              </View>
            </View>
          </View>

          {/* 地图 */}
          <View style={styles.map_wrapper}>
            <Text style={styles.map_address}>上海普陀区浦东金沙江路699号月星环球港7号楼5层</Text>
            <View style={{width:11, height:1, backgroundColor:'#363334',alignSelf:'center',marginBottom:20}}></View>
            <View style={styles.map_content}>
              {/* <Image source={require('../../img/784646AC-7E20-4685-8BD4-FFAC5D78303D.png')} style={{
                width: ScreenUtils.scaleSize(375),
                height: ScreenUtils.scaleSize(172)
              }}/> */}
              <MapView
                initialRegion={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421,
                }}
                style={{
                  width: ScreenUtils.scaleSize(375),
                  height: ScreenUtils.scaleSize(172),
                }}
              />
            </View>
          </View>

          {/* 全面大热购 */}
          <View style={styles.hot_wrapper}>
            <View style={[styles.block_title_wrapper,{backgroundColor:'#F0EFF5'}]}>
              <BlockTitleComponent titleEn="All the big Tesoo" titleZh="全面大热购"/>
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
    borderBottomWidth:1,
    borderTopWidth: 1,
    borderColor: '#363334',
    width: 180,
    paddingTop:5,
    paddingBottom:5,
    marginTop:20,
    marginBottom:16,
    alignSelf:'center'
  },
  header_title:{
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center'
  },
  header_star:{
    alignItems:'center'
  },
  header_intro:{
    fontSize: 12,
    color:'#656565',
    lineHeight: 20,
    paddingHorizontal: 12,
    marginTop:20,
    marginBottom:20
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
    flexDirection: 'row',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
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
  ctg_wrapper:{
    marginBottom: 10
  },
  ctg_header: {
    height: 42,
    backgroundColor:'#fff',
    paddingLeft:12,
    borderBottomWidth: 0.5,
    borderColor:'#B8B8B8',
    flexDirection:'row'
  },
  ctg_header_item_text:{
    fontSize: 12,
    color:'#B8B8B8'
  },
  ctg_header_item:{
    marginRight:30,
    alignSelf:'center'
  },
  ctg_body: {
    height: 80,
    backgroundColor:'#fff',
    paddingLeft:12,
    flexDirection:'row'
  },
  ctg_body_item:{
    marginRight:12,
    alignSelf:'center',
    borderColor: '#B8B8B8',
    borderWidth: 0.5,
    paddingHorizontal: 12,
    paddingTop: 13,
    paddingBottom: 13,
  },
  ctg_body_item_text:{
    fontSize: 10,
    color:'#B8B8B8'
  },
  coupon_wrapper: {
    height: 94,
    backgroundColor:'#fff',
    paddingLeft:12,
    flexDirection:'row',
    marginBottom: 10
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
  store_wrapper:{
    backgroundColor:'#fff',
    marginBottom: 10,
    marginTop: 10
  },
  store_title:{
    paddingTop: 20,
    paddingBottom:20,
    backgroundColor:'#fff'
  },
  store_content: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    paddingBottom: 24
  },
  store_item:{
    flex:1,
    alignItems:'center'
  },
  store_count:{
    marginTop: 10,
    fontSize: 14,
    color:'#363334',
    marginBottom: 4
  },
  store_label:{
    color:'#B8B8B8',
    fontSize: 10
  },
  map_wrapper:{
    marginBottom:30
  },
  map_address:{
    fontSize: 12,
    color:'#363334',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5
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
  },
  hot_item:{
    marginBottom:10
  },
});
