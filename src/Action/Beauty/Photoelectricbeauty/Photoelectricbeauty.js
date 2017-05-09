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

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import PhotoelectricbeautyModulesComponent from './components/PhotoelectricbeautyModules'
import HomeBlockTitleComponent from '../../Home/components/HomeBlockTitle'
import ProductItemComponent from '../../../BaseView/ProductListItem/ProductItem';
import DiaryItemComponent from '../Diary/DiaryItem'


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
      }} source={require('../assets/WX20170327-141214@2x.png')} style={{
        width: ScreenUtils.scaleSize(375),
        height: ScreenUtils.scaleSize(200)
      }}/>);
    }
    return imageViews;
  }

  _goOptoelectronicstore(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Optoelectronicstore',
        title: title
      });
    }
  }

  _goPhotoelectricschoollist(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Photoelectricschoollist',
        title: title
      });
    }
  }

  _goPhotoelectricschooldetail(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Photoelectricschooldetail',
        title: title
      });
    }
  }

  _goUserdiary(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Userdiary',
        title: title
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
        <BaseNavigationBar
            data={{
                title: this.props.params.title,
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>

        <ScrollView>
          <View>
            <Swiper height={swiperHeight.height} loop={true} index={0} autoplay={true} horizontal={true}>
              {this.renderImg()}
            </Swiper>
          </View>

          <PhotoelectricbeautyModulesComponent nav={this.props.nav}/>

          <TouchableOpacity onPress={this._goOptoelectronicstore.bind(this,'光电美容门店')}>
            <Image source={require('../assets/123.png')} style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(200),
              marginTop: 10
            }}/>
          </TouchableOpacity>

          {/* 光电学堂 */}
          <View style={styles.Photoelectricschool_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goPhotoelectricschoollist.bind(this, '光电学堂')}>
              <HomeBlockTitleComponent titleEn="Photoelectric school" titleZh="光电学堂"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._goPhotoelectricschooldetail.bind(this, '光电详情')}>
              <Image source={require('../assets/WX20170327-144846.png')} style={{
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
                <ProductItemComponent {...ProductItemInfo} nav={this.props.nav}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} nav={this.props.nav}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} nav={this.props.nav}/>
              </View>
              <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} nav={this.props.nav}/>
              </View>
            </View>
          </View>

          {/* 用户日记 */}
          <View style={styles.diary_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goUserdiary.bind(this, '用户日记')}>
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
    marginTop: 10,
    backgroundColor: '#fff'
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
