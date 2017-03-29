import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import TopNavComponent from '../common/TopNav';
import PhotoelectricbeautyModulesComponent from './PhotoelectricbeautyModules'
import HomeBlockTitleComponent from '../home/HomeBlockTitle'
import ProductItemComponent from '../common/ProductItem';
import DiaryItemComponent from './DiaryItem'
import OptoelectronicstoreComponent from './Optoelectronicstore'
import PhotoelectricschoollistComponent from './Photoelectricschoollist'
import PhotoelectricschoolddetailComponent from './Photoelectricschoolddetail'
import UserdiaryComponent from './Userdiary'

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../utils/ScreenUtils';

export default class PhotoelectricbeautyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderImg() {
    var imageViews = [];
    for (var i = 0; i < 3; i++) {
      imageViews.push(<Image key={i} style={{
        flex: 1
      }} source={require('./image/WX20170327-141214@2x.png')} style={{
        width: ScreenUtils.scaleSize(375),
        height: ScreenUtils.scaleSize(200)
      }}/>);
    }
    return imageViews;
  }

  _goOptoelectronicstore() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Optoelectronicstore',
        component: OptoelectronicstoreComponent
      });
    }
  }

  _goPhotoelectricschoollist() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Photoelectricschoollist',
        component: PhotoelectricschoollistComponent
      });
    }
  }

  _goPhotoelectricschoolddetail() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Photoelectricschoolddetail',
        component: PhotoelectricschoolddetailComponent
      });
    }
  }

  _goUserdiary() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Userdiary',
        component: UserdiaryComponent
      });
    }
  }

  render() {
    let swiperHeight = {
      width: ScreenUtils.scaleSize(375),
      height: ScreenUtils.scaleSize(200)
    }
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height: ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="光电美容" navigator={this.props.navigator}/>

        <ScrollView>
          <View>
            <Swiper height={swiperHeight.height} loop={true} index={0} autoplay={true} horizontal={true}>
              {this.renderImg()}
            </Swiper>
          </View>

          <PhotoelectricbeautyModulesComponent/>

          <TouchableOpacity onPress={this._goOptoelectronicstore.bind(this)}>
            <Image source={require('./image/123.png')} style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(200),
              marginTop: 10
            }}/>
          </TouchableOpacity>

          {/* 光电学堂 */}
          <View style={styles.Photoelectricschool_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goPhotoelectricschoollist.bind(this)}>
              <HomeBlockTitleComponent titleEn="Photoelectric school" titleZh="光电学堂"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._goPhotoelectricschoolddetail.bind(this)}>
              <Image source={require('./image/WX20170327-144846.png')} style={{
                width: ScreenUtils.scaleSize(375),
                height: ScreenUtils.scaleSize(180)
              }}/>
            </TouchableOpacity>
          </View>

          {/* 全球大热购 */}
          <View style={styles.hot_wrapper}>
            <View style={[
              styles.block_title_wrapper, {
                backgroundColor: '#F0EFF5'
              }
            ]}>
              <HomeBlockTitleComponent titleEn="All the big Tesoo" titleZh="全球大热购"/>
            </View>
            <View style={styles.hot_body}>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
              </View>
            </View>
          </View>

          {/* 用户日记 */}
          <View style={styles.diary_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goUserdiary.bind(this)}>
              <HomeBlockTitleComponent titleEn="User diary" titleZh="用户日记"/>
            </TouchableOpacity>
            <View style={[styles.diary_box,styles.border_bottom]}>
              <DiaryItemComponent/>
            </View>
            <View style={styles.diary_box}>
              <DiaryItemComponent/>
            </View>
          </View>

          {/* 光电手艺人日记 */}
          <View style={styles.diary_wrapper}>
            <View style={styles.block_title_wrapper}>
              <HomeBlockTitleComponent titleEn="User diary" titleZh="光电手艺人日记"/>
            </View>
            <View style={[styles.diary_box,styles.border_bottom]}>
              <DiaryItemComponent/>
            </View>
            <View style={styles.diary_box}>
              <DiaryItemComponent/>
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
  Photoelectricschool_wrapper: {
    marginTop: 10
  },
  block_title_wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  hot_body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  hot_item: {
    marginBottom: 10
  },
  diary_wrapper: {
    backgroundColor: '#fff',
    marginTop: 10
  },
  diary_box: {
    // marginLeft: 12,
    // marginRight: 12
  },
  border_bottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#b8b8b8'
  }
});
