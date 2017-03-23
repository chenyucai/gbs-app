import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from 'react-native'

import Swiper from 'react-native-swiper';

import HomeHeaderComponent from './HomeHeader';
import BottomTabsComponent from '../common/BottomTabs';
import HomeModulesComponent from './HomeModules';
import HomeBlockTitleComponent from './HomeBlockTitle';

import ScreenUtils from '../../utils/ScreenUtils';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

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

  render () {
    const swiperHeight = Dimensions.get('window').width / 1.875;
    return (
      <View style={styles.wrapper}>
        <HomeHeaderComponent />

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
            <View style={styles.block_title_wapper}>
              <HomeBlockTitleComponent titleEn="Joy and happiness" titleZh="欢乐优促"/>
            </View>
            <ScrollView horizontal style={styles.sale_body}>
              {this.renderSale()}
            </ScrollView>
          </View>

          {/*  */}
        </ScrollView>

        <View style={styles.tabs}>
          <BottomTabsComponent/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    height: Dimensions.get('window').height
  },
  tabs:{
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    left:0
  },
  sale_wrapper:{
    backgroundColor:'#fff',
    marginTop:10
  },
  block_title_wapper:{
    paddingTop: 20,
    paddingBottom:20,
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
  }
});
