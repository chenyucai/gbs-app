import React, { Component } from 'react'
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
import HomeBlockTitleComponent from '../home/HomeBlockTitle'
import ProductItemComponent from '../common/ProductItem';
import DiaryItemComponent from '../beauty/DiaryItem'
import OptoelectronicstoreComponent from '../beauty/Optoelectronicstore'
import PhotoelectricschoollistComponent from '../beauty/Photoelectricschoollist'
import PhotoelectricschoolddetailComponent from '../beauty/Photoelectricschoolddetail'
import UserdiaryComponent from '../beauty/Userdiary'
import MicroplasticModulesComponent from './MicroplasticModules'
import TechnicianComponent from '../beauty/Technician'

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../utils/ScreenUtils';

export default class MicroplasticComponent extends Component {
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
      }} source={require('../beauty/image/WX20170327-141214@2x.png')} style={{
        width: ScreenUtils.scaleSize(375),
        height: ScreenUtils.scaleSize(200)
      }}/>);
    }
    return imageViews;
  }

  _goOptoelectronicstore(title) {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Optoelectronicstore',
        component: OptoelectronicstoreComponent,
        params: {
          title: title
        }
      });
    }
  }

  _goPhotoelectricschoollist(title) {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Photoelectricschoollist',
        component: PhotoelectricschoollistComponent,
        params: {
          title: title
        }
      });
    }
  }

  _goPhotoelectricschoolddetail(title) {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Photoelectricschoolddetail',
        component: PhotoelectricschoolddetailComponent,
        params: {
          title: title
        }
      });
    }
  }

  _goTechnician(title) {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Technician',
        component: TechnicianComponent,
        params: {
          title: title
        }
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

  render () {
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
        <TopNavComponent title="微整形" navigator={this.props.navigator}/>

        <ScrollView>
          <View>
            <Swiper height={swiperHeight.height} loop={true} index={0} autoplay={true} horizontal={true}>
              {this.renderImg()}
            </Swiper>
          </View>

          <MicroplasticModulesComponent navigator={this.props.navigator}/>

          <TouchableOpacity onPress={this._goOptoelectronicstore.bind(this, '微整形门店')}>
            <Image source={require('../beauty/image/123.png')} style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(200),
              marginTop: 10
            }}/>
          </TouchableOpacity>

          {/* 金牌医生 */}
          <View>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goTechnician.bind(this, '金牌医生')}>
              <HomeBlockTitleComponent titleEn="Gold Practitioner" titleZh="金牌医生"/>
            </TouchableOpacity>
            <ScrollView horizontal>
              <View style={styles.doctor_box}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>拉萨的医生</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
              <View style={styles.doctor_box}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>哈哈哈</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
              <View style={styles.doctor_box}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>123</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
              <View style={[styles.doctor_box,{marginRight: 0}]}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>456</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
            </ScrollView>
          </View>

          {/* 微整形学堂 */}
          <View style={styles.Photoelectricschool_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goPhotoelectricschoollist.bind(this, '微整形学堂')}>
              <HomeBlockTitleComponent titleEn="Micro plastic school" titleZh="微整形学堂"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._goPhotoelectricschoolddetail.bind(this, '微整形学堂')}>
              <Image source={require('../beauty/image/WX20170327-144846.png')} style={{
                width: ScreenUtils.scaleSize(375),
                height: ScreenUtils.scaleSize(180)
              }}/>
            </TouchableOpacity>
          </View>

          {/* 促销产品 */}
          <View style={styles.hot_wrapper}>
            <View style={[
              styles.block_title_wrapper, {
                backgroundColor: '#F0EFF5'
              }
            ]}>
              <HomeBlockTitleComponent titleEn="Promotional products" titleZh="促销产品"/>
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

          {/* 医生日记 */}
          <View style={styles.diary_wrapper}>
            <View style={styles.block_title_wrapper}>
              <HomeBlockTitleComponent titleEn="Diary of a doctor" titleZh="医生日记"/>
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
    marginTop: 20,
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
  },
  doctor_box: {
    width: ScreenUtils.scaleSize(160),
    height: ScreenUtils.scaleSize(234),
    backgroundColor: '#fff',
    alignItems: 'center',
    marginRight: 15
  },
  doctor_img: {
    width: ScreenUtils.scaleSize(120),
    height: ScreenUtils.scaleSize(120),
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: ScreenUtils.scaleSize(120)/2,
    overflow: 'hidden'
  }
});
