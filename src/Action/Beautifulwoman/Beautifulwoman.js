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

import BaseNavigationBar from '../../BaseView/BaseNavigationBar/BaseNavigationBar';
import HomeBlockTitleComponent from '../Home/components/HomeBlockTitle'
import ProductItemComponent from '../../BaseView/ProductListItem/ProductItem';
import DiaryItemComponent from '../Beauty/Diary/DiaryItem'
import RecommendStoreListComponent from '../Home/RecommendStoreList';

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';

export default class BeautifulwomanComponent extends Component {
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
      }} source={require('../Beauty/assets/WX20170327-141214@2x.png')} style={{
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

  _goPhotoelectricschoolddetail(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Photoelectricschoolddetail',
        title: title
      });
    }
  }

  _goTechnician(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Technician',
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

  _goRecommendStoreList(title){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'RecommendStoreList',
        title: title
      });
    }
  }

  _goStoreDetail(title){
    var { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'StoreDetail',
        title: title
      })
    }
  }

  _goUserDetail(title){
    var { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'UserDetail',
        title: title
      })
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

          <View style={styles.item_line}>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../Beauty/assets/icon_all.png')}/>
              <Text style={styles.item_title}>全部</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../Beauty/assets/icon_face.png')}/>
              <Text style={styles.item_title}>美甲</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../Beauty/assets/icon_skin.png')}/>
              <Text style={styles.item_title}>美睫</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../Beauty/assets/icon_body.png')}/>
              <Text style={styles.item_title}>半永久</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={this._goOptoelectronicstore.bind(this, '丽人门店')}>
            <Image source={require('../Beauty/assets/123.png')} style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(200),
              marginTop: 10
            }}/>
          </TouchableOpacity>

          {/* 推荐商家 */}
          <View style={styles.store_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goRecommendStoreList.bind(this, '推荐商家')}>
              <HomeBlockTitleComponent titleEn="Recommended businesses" titleZh="推荐商家"/>
            </TouchableOpacity>
            <View style={styles.store_body}>
              {/* {this.renderStore()} */}
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../Home/assets/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../Home/assets/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../Home/assets/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../Home/assets/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
            </View>
          </View>

          {/* 推荐手艺人 */}
          <View>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goTechnician.bind(this, '手艺人列表')}>
              <HomeBlockTitleComponent titleEn="Gold Practitioner" titleZh="推荐手艺人"/>
            </TouchableOpacity>
            <ScrollView horizontal>
              <TouchableOpacity style={styles.doctor_box} onPress={this._goUserDetail.bind(this, '手艺人详情')}>
                <Image style={styles.doctor_img} source={require('../../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>anra</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.doctor_box} onPress={this._goUserDetail.bind(this, '手艺人详情')}>
                <Image style={styles.doctor_img} source={require('../../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>test</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>2222</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.doctor_box} onPress={this._goUserDetail.bind(this, '手艺人详情')}>
                <Image style={styles.doctor_img} source={require('../../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>alsk</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.doctor_box,{marginRight: 0}]} onPress={this._goUserDetail.bind(this, '手艺人详情')}>
                <Image style={styles.doctor_img} source={require('../../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>ceshi</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </TouchableOpacity>
            </ScrollView>
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
  },
  item_line: {
    flexDirection: 'row'
  },
  item: {
    flex:1,
  },
  item_icon:{
    alignSelf:'center',
    marginTop: 25,
    marginBottom:5
  },
  item_title: {
    textAlign:'center',
    fontSize:12,
    color:'#363334',
    lineHeight:17
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
});
