/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import PreferentialcircleModulesComponent from './components/PreferentialcircleModules'
// import OptoelectronicstoreComponent from '../beauty/Optoelectronicstore'
import HomeBlockTitleComponent from '../../Home/components/HomeBlockTitle'
import PackageItemComponent from '../Package/components/PackageItem'
// import RequiredpackagesComponent from './Requiredpackages'
// import PurchaserequiredComponent from './Purchaserequired'
// import RequiredspecialComponent from './Requiredspecial'

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';

export default class PreferentialcircleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderImg() {
    var imageViews = [];
    for (var i = 0; i < 3; i++) {
      imageViews.push(<Image key={i} style={{
        flex: 1
      }} source={require('../../Beauty/assets/WX20170327-141214@2x.png')} style={{
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

  _goRequiredpackages() {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Requiredpackages',
      });
    }
  }

  _goPurchaserequired() {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Purchaserequired',
      });
    }
  }

  _goRequiredspecial() {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Requiredspecial',
      });
    }
  }

  render () {
    let swiperHeight = {
      width: ScreenUtils.scaleSize(375),
      height: ScreenUtils.scaleSize(200)
    }
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "特惠圈",
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

          <PreferentialcircleModulesComponent nav={this.props.nav}/>

          {/* 特惠圈门店 */}
          <TouchableOpacity onPress={this._goOptoelectronicstore.bind(this, '特惠圈门店')}>
            <Image source={require('../../Beauty/assets/123.png')} style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(200),
              marginTop: 10
            }}/>
          </TouchableOpacity>

          {/* 必逛专场 */}
          <View style={styles.concert_wrapper}>
            <TouchableOpacity style={[
              styles.block_title_wrapper, {
                backgroundColor: '#fff'
              }
            ]} onPress={this._goRequiredspecial.bind(this)}>
              <HomeBlockTitleComponent titleEn="Will go special" titleZh="必逛专场"/>
            </TouchableOpacity>
            <View style={styles.concert_box}>
              <View style={styles.left_box}>
                <View style={styles.concert_img_left}>
                  <Image style={styles.concert_imgL} source={require('../../../../img/888.png')}/>
                </View>
                <View style={styles.price}>
                  <Text style={styles.price_new}>¥299</Text>
                  <Text style={styles.price_old}>¥1599</Text>
                </View>
                <View style={styles.describe_box}>
                  <Text style={styles.describe} numberOfLines={1}>抗衰老芦荟营养浴</Text>
                </View>
                <View style={styles.concert_time_box}>
                  <Text style={styles.concert_time}>3天09小时24分</Text>
                </View>
              </View>
              <View style={styles.center_box}>
                <View style={styles.concert_img_center}>
                  <Image style={styles.concert_imgC} source={require('../../../../img/888.png')}/>
                </View>
                <View style={styles.price}>
                  <Text style={styles.price_new}>¥299</Text>
                  <Text style={styles.price_old}>¥1599</Text>
                </View>
                <View style={styles.describe_box}>
                  <Text style={styles.describe} numberOfLines={1}>抗衰老芦荟营养浴</Text>
                </View>
                <View style={styles.concert_time_box}>
                  <Text style={styles.concert_time}>3天09小时24分</Text>
                </View>
              </View>
              <View style={styles.right_box}>
                <View style={styles.concert_img_right}>
                  <Image style={styles.concert_imgR} source={require('../../../../img/888.png')}/>
                </View>
                <View style={styles.price}>
                  <Text style={styles.price_new}>¥299</Text>
                  <Text style={styles.price_old}>¥1599</Text>
                </View>
                <View style={styles.describe_box}>
                  <Text style={styles.describe} numberOfLines={1}>抗衰老芦荟营养浴</Text>
                </View>
                <View style={styles.concert_time_box}>
                  <Text style={styles.concert_time}>3天09小时24分</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 必参团购 */}
          <View style={styles.concert_wrapper}>
            <TouchableOpacity style={[
              styles.block_title_wrapper, {
                backgroundColor: '#fff'
              }
            ]} onPress={this._goPurchaserequired.bind(this)}>
              <HomeBlockTitleComponent titleEn="Groupon" titleZh="必参团购"/>
            </TouchableOpacity>
            <View style={styles.concert_box}>
              <View style={styles.left_box}>
                <View style={styles.concert_img_left}>
                  <Image style={styles.concert_imgL} source={require('../../../../img/888.png')}/>
                </View>
                <View style={styles.describe_box}>
                  <Text style={styles.describe} numberOfLines={1}>抗衰老芦荟营养浴</Text>
                </View>
                <View style={styles.border_box}>
                  <View style={styles.border}></View>
                </View>
                <View style={styles.concert_num_box}>
                  <Text style={styles.concert_num}>已参团2人</Text>
                </View>
                <View style={styles.concert_footer_num_box}>
                  <Text style={styles.concert_footer_num}>5人团</Text>
                </View>
              </View>
              <View style={styles.center_box}>
                <View style={styles.concert_img_center}>
                  <Image style={styles.concert_imgC} source={require('../../../../img/888.png')}/>
                </View>
                <View style={styles.describe_box}>
                  <Text style={styles.describe} numberOfLines={1}>抗衰老芦荟营养浴</Text>
                </View>
                <View style={styles.border_box}>
                  <View style={styles.border}></View>
                </View>
                <View style={styles.concert_num_box}>
                  <Text style={styles.concert_num}>已参团2人</Text>
                </View>
                <View style={styles.concert_footer_num_box}>
                  <Text style={styles.concert_footer_num}>5人团</Text>
                </View>
              </View>
              <View style={styles.right_box}>
                <View style={styles.concert_img_right}>
                  <Image style={styles.concert_imgR} source={require('../../../../img/888.png')}/>
                </View>
                <View style={styles.describe_box}>
                  <Text style={styles.describe} numberOfLines={1}>抗衰老芦荟营养浴</Text>
                </View>
                <View style={styles.border_box}>
                  <View style={styles.border}></View>
                </View>
                <View style={styles.concert_num_box}>
                  <Text style={styles.concert_num}>已参团2人</Text>
                </View>
                <View style={styles.concert_footer_num_box}>
                  <Text style={styles.concert_footer_num}>5人团</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 必点套餐 */}
          <View style={styles.package_wrapper}>
            <TouchableOpacity style={[
              styles.block_title_wrapper, {
                backgroundColor: '#F0EFF5'
              }
            ]} onPress={this._goRequiredpackages.bind(this)}>
              <HomeBlockTitleComponent titleEn="Package" titleZh="必点套餐"/>
            </TouchableOpacity>
            <View style={styles.package_box}>
              <PackageItemComponent />
            </View>
            <View style={[styles.package_box,{marginTop: 10}]}>
              <PackageItemComponent />
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
  block_title_wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  concert_wrapper: {
    backgroundColor: '#fff',
    marginTop: 10
  },
  concert_box: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  concert_img_left: {
    width: ScreenUtils.scaleSize(97),
    height: ScreenUtils.scaleSize(111),
    borderColor: '#D7D7D7',
    borderWidth: 0.5,
    marginBottom: 25
  },
  concert_img_center: {
    width: ScreenUtils.scaleSize(112),
    height: ScreenUtils.scaleSize(111),
    borderColor: '#D7D7D7',
    borderWidth: 0.5,
    marginBottom: 25
  },
  concert_img_right: {
    width: ScreenUtils.scaleSize(97),
    height: ScreenUtils.scaleSize(111),
    borderColor: '#D7D7D7',
    borderWidth: 0.5,
    marginBottom: 25
  },
  concert_imgL: {
    width: ScreenUtils.scaleSize(104),
    height: ScreenUtils.scaleSize(120),
    marginLeft: 4,
    marginTop: 4
  },
  concert_imgC: {
    width: ScreenUtils.scaleSize(104),
    height: ScreenUtils.scaleSize(120),
    marginLeft: 4,
    marginTop: 4
  },
  concert_imgR: {
    width: ScreenUtils.scaleSize(104),
    height: ScreenUtils.scaleSize(120),
    position: 'absolute',
    left: -11,
    top: 4
  },
  price: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  price_new: {
    fontSize: 14,
    color: '#FF6D99'
  },
  price_old: {
    fontSize: 10,
    color: '#C9C6C6',
    marginTop: 3,
    marginLeft: 6,
    textDecorationLine: 'line-through'
  },
  describe_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    maxWidth: ScreenUtils.scaleSize(108)
  },
  describe: {
    color: '#363334',
    fontSize: 12,
    marginTop: 3
  },
  concert_time_box: {
    width: ScreenUtils.scaleSize(100),
    height: ScreenUtils.scaleSize(20),
    backgroundColor: '#FF6D99',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  concert_time: {
    fontSize: 11,
    color: '#fff',
    alignSelf: 'center'
  },
  border: {
    borderBottomColor: '#363334',
    borderBottomWidth: 0.5
  },
  border_box: {
    width: 10,
    alignSelf: 'center',
    marginTop: 10
  },
  concert_num_box: {
    paddingHorizontal: 8,
    height: ScreenUtils.scaleSize(20),
    backgroundColor: '#FF6D99',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 14
  },
  concert_num: {
    fontSize: 11,
    color: '#fff',
    alignSelf: 'center'
  },
  concert_footer_num_box: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 20
  },
  concert_footer_num: {
    fontSize: 11,
    color: '#FF6D99',
    alignSelf: 'center'
  },
  package_wrapper: {
    marginTop: 10
  }
});
