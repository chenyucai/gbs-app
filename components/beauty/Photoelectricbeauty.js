import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native'

import TopNavComponent from '../common/TopNav';
import PhotoelectricbeautyModulesComponent from './PhotoelectricbeautyModules'
import HomeBlockTitleComponent from '../home/HomeBlockTitle'
import ProductItemComponent from '../common/ProductItem';

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../utils/ScreenUtils';

export default class PhotoelectricbeautyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderImg(){
    var imageViews=[];
    for(var i=0;i<3;i++){
        imageViews.push(
            <Image
              key={i}
              style={{flex:1}}
              source={require('./image/WX20170327-141214@2x.png')}
              style={{
                width: ScreenUtils.scaleSize(375),
                height: ScreenUtils.scaleSize(200)
              }}
            />
        );
    }
    return imageViews;
  }

  render () {
    let swiperHeight = {
      width: ScreenUtils.scaleSize(375),
      height:ScreenUtils.scaleSize(200)
    }
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="光电美容" />

        <ScrollView>
          <View>
            <Swiper
              height={swiperHeight.height}
              loop={true}
              index={0}
              autoplay={true}
              horizontal={true}
            >
              {this.renderImg()}
            </Swiper>
          </View>

          <PhotoelectricbeautyModulesComponent />

          <View>
            <Image source={require('./image/123.png')} style={{width:ScreenUtils.scaleSize(375), height:ScreenUtils.scaleSize(200), marginTop: 10}}
            />
          </View>

          {/* 光电学堂 */}
          <View style={styles.Photoelectricschool_wrapper}>
            <View style={styles.block_title_wrapper}>
              <HomeBlockTitleComponent titleEn="Photoelectric school" titleZh="光电学堂"/>
            </View>
            <View>
              <Image source={require('./image/WX20170327-144846.png')} style={{width:ScreenUtils.scaleSize(375), height:ScreenUtils.scaleSize(180)}}
              />
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

          {/* 用户日记 */}
          <View>
            <View style={styles.block_title_wrapper}>
              <HomeBlockTitleComponent titleEn="User diary" titleZh="用户日记"/>
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
    height: Dimensions.get('window').height
  },
  Photoelectricschool_wrapper: {
    marginTop: 10
  },
  block_title_wrapper:{
    paddingTop: 20,
    paddingBottom:20,
    backgroundColor:'#fff'
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
