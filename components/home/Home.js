import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Image,
  ScrollView,
  Platform
} from 'react-native'

import Swiper from 'react-native-swiper';

import HomeHeaderComponent from './HomeHeader';
import BottomTabsComponent from '../common/BottomTabs';
import HomeModulesComponent from './HomeModules';
import HomeBlockTitleComponent from './HomeBlockTitle';
import ProductItemComponent from '../common/ProductItem';
import HomeSaleListComponent from './HomeSaleList';
import RecommendStoreListComponent from './RecommendStoreList';
import SpecialColumnComponent from './SpecialColumn';

import ScreenUtils from '../../utils/ScreenUtils';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  renderImg(){
    var imageViews=[];
    for(var i=0;i<5;i++){
        imageViews.push(
            <Image
              key={i}
              style={{flex:1}}
              source={require('../common/image/E963873D-7AE4-4662-8E8C-48D79329BDBC.png')}
              // style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width/1.875}}
              style={{
                width: ScreenUtils.scaleSize(375),
                height: ScreenUtils.scaleSize(200)
              }}
            />
        );
    }
    return imageViews;
  }

  renderSale() {
    let saleItems = [];
    for (var i = 0; i < 6; i++) {
      saleItems.push(
        <View style={styles.sale_item} key={i}>
          <View style={styles.sale_img}>
            <Image style={{width:160,height:160,resizeMode:Image.resizeMode.cover}} source={require('./image/40D00A1F-CAC8-47DB-BCB9-D17B59098F1A.png')}/>
          </View>
          <View style={styles.sale_content}>
            <Text style={styles.sale_title}>铂翡紧颜滋润AA面霜</Text>
            <View style={styles.sale_price}>
              <Text style={styles.sale_price_now}>￥1,088.00</Text>
              <Text style={styles.sale_price_old}>¥1599.00</Text>
            </View>
          </View>
        </View>
      );
    }
    return saleItems;
  }

  renderMagazine() {
    let magazineItems = [];
    for (var i = 0; i < 6; i++) {
      magazineItems.push(
        <Image source={require('./image/BFABCD35-8EEF-49CB-B5DE-E3042232E816.png')}
          key={i}
          style={styles.magazine_item}
        />
      )
    }
    return magazineItems;
  }

  renderBeautiful() {
    let items = [];
    for (var i = 0; i < 3; i++) {
      items.push(
        <TouchableHighlight key={i} onPress={this._goSpecialColumn.bind(this)}>
          <Image source={require('./image/8832F62B-2070-45C5-96E3-2BCB4F5CBE3F.png')}
            style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(230),
              marginBottom: 10
            }}
          />
        </TouchableHighlight>
      )
    }
    return items;
  }

  _goSale(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'recommendStoreList',
        component: HomeSaleListComponent
      });
    }
  }

  _goRecommendStore(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'saleList',
        component: RecommendStoreListComponent
      });
    }
  }

  _goSpecialColumn(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'saleList',
        component: SpecialColumnComponent
      });
    }
  }

  render () {
    const swiperHeight = Dimensions.get('window').width / 1.875;
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <HomeHeaderComponent navigator={this.props.navigator}/>

        <ScrollView style={{
          marginBottom: 49
        }}>
          <View>
            <Swiper
              height={swiperHeight}
              loop={true}
              // showsButtons={true}
              index={0}
              autoplay={true}
              horizontal={true}
            >
              {this.renderImg()}
            </Swiper>
          </View>

          <HomeModulesComponent />

          {/* 欢乐促销 */}
          <View style={styles.sale_wrapper}>
            <TouchableHighlight style={styles.block_title_wrapper} onPress={this._goSale.bind(this)}>
              <View><HomeBlockTitleComponent titleEn="Joy and happiness" titleZh="欢乐优促"/></View>
            </TouchableHighlight>
            <ScrollView horizontal style={styles.sale_body}>
              {this.renderSale()}
            </ScrollView>
          </View>

          {/* 杂志社 */}
          <View style={styles.magazine_wrapper}>
            <View style={styles.block_title_wrapper}>
              <HomeBlockTitleComponent titleEn="Magazine Agency" titleZh="杂志社"/>
            </View>
            <View style={styles.magazine_body}>
              <View style={styles.magazine_top}>
                <Image source={require('./image/C29105FA-A819-40D0-831E-C7AB324AB618.png')}
                  style={{width:ScreenUtils.scaleSize(375), height:ScreenUtils.scaleSize(230)}}
                />
              </View>
              <ScrollView horizontal style={styles.magazine_list}>
                {this.renderMagazine()}
              </ScrollView>
            </View>
          </View>

          {/* 美丽互生 */}
          <View style={styles.beautiful_wrapper}>
            <View style={styles.block_title_wrapper}>
              <HomeBlockTitleComponent titleEn="Beautiful alternate" titleZh="美丽互生"/>
            </View>
            <View style={styles.beautiful_body}>
              {this.renderBeautiful()}
            </View>
          </View>

          {/* 推荐商家 */}
          <View style={styles.store_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goRecommendStore.bind(this)}>
              <HomeBlockTitleComponent titleEn="Recommended businesses" titleZh="推荐商家"/>
            </TouchableOpacity>
            <View style={styles.store_body}>
              {/* {this.renderStore()} */}
              <View style={styles.store_item}>
                <Image style={styles.store_img} source={require('./image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </View>
              <View style={styles.store_item}>
                <Image style={styles.store_img} source={require('./image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </View>
              <View style={styles.store_item}>
                <Image style={styles.store_img} source={require('./image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </View>
              <View style={styles.store_item}>
                <Image style={styles.store_img} source={require('./image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </View>
            </View>
          </View>

          {/* 全球大热购 */}
          <View style={styles.hot_wrapper}>
            <View style={[styles.block_title_wrapper,{backgroundColor:'#F0EFF5'}]}>
              <HomeBlockTitleComponent titleEn="All the big Tesoo" titleZh="全球大热购"/>
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

        <View style={Platform.OS=='android'?styles.tabs_android:styles.tabs}>
          <BottomTabsComponent/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs_android:{
    width: Dimensions.get('window').width,
    height: 50,
    position: 'absolute',
    bottom: 25,
    left:0
  },
  wrapper: {
    backgroundColor: '#F0EFF5',
    height: Dimensions.get('window').height
  },
  tabs:{
    width: Dimensions.get('window').width,
    height: 50,
    position: 'absolute',
    bottom: 25,
    left:0
  },
  tabs_android:{
    width: Dimensions.get('window').width,
    height: 50,
    position: 'absolute',
    bottom: 25,
    left:0
  },
  sale_wrapper:{
    backgroundColor:'#fff',
    marginTop:10
  },
  block_title_wrapper:{
    paddingTop: 20,
    paddingBottom:20,
    backgroundColor:'#fff'
  },
  sale_body: {
    height: 230,
    backgroundColor:'#fff',
    paddingLeft:15,
    flexDirection:'row'
  },
  sale_item:{
    marginRight:15
  },
  sale_img:{
    width:161,
    height:161,
    borderWidth:0.5,
    borderColor:'#B8B8B8',
    alignSelf:'center',
  },
  sale_content:{
    marginTop:10
  },
  sale_title:{
    marginBottom:7,
    fontSize:12,
    color:'#363334',
    textAlign:'center'
  },
  sale_price:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  sale_price_now:{
    color:'#FF6D99',
    fontSize:ScreenUtils.setSpText(14),
    paddingRight:5,
  },
  sale_price_old:{
    fontSize:10,
    color:'#C9C6C6'
  },
  magazine_wrapper:{
    marginTop:10
  },
  magazine_body:{
    backgroundColor:'#F0EFF5'
  },
  magazine_List: {
    backgroundColor:'#fff',
    flexDirection:'row',
  },
  magazine_item:{
    width:118,
    height:135,
    marginRight: 12,
    marginTop:10,
    marginBottom:20
  },
  store_body:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems:'center',
    paddingLeft:5,
    paddingRight:5,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#fff'
  },
  store_item:{
    width: ScreenUtils.scaleSize(170),
    height: ScreenUtils.scaleSize(170),
    marginBottom:10
  },
  store_img:{
    width: ScreenUtils.scaleSize(170),
    height: ScreenUtils.scaleSize(170)
  },
  hot_body:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems:'center',
    paddingLeft:5,
    paddingRight:5,
    paddingTop:5,
    paddingBottom:5,
  },
  hot_item:{
    marginBottom:10
  },
});
