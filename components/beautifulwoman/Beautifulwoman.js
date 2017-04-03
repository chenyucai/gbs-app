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
import TechnicianComponent from '../beauty/Technician'
import RecommendStoreListComponent from '../home/RecommendStoreList';
import StoreDetailComponent from '../beauty/StoreDetail';

import Swiper from 'react-native-swiper';
import ScreenUtils from '../../utils/ScreenUtils';

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

  _goRecommendStore(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'saleList',
        component: RecommendStoreListComponent
      });
    }
  }

  _goStoreDetail(){
    var { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'storeDetail',
        component: StoreDetailComponent
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
        <TopNavComponent title="微整形" navigator={this.props.navigator}/>

        <ScrollView>
          <View>
            <Swiper height={swiperHeight.height} loop={true} index={0} autoplay={true} horizontal={true}>
              {this.renderImg()}
            </Swiper>
          </View>

          <View style={styles.item_line}>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../beauty/image/icon_all.png')}/>
              <Text style={styles.item_title}>全部</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../beauty/image/icon_face.png')}/>
              <Text style={styles.item_title}>美甲</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../beauty/image/icon_skin.png')}/>
              <Text style={styles.item_title}>美睫</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image style={styles.item_icon} source={require('../beauty/image/icon_body.png')}/>
              <Text style={styles.item_title}>半永久</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={this._goOptoelectronicstore.bind(this, '微整形门店')}>
            <Image source={require('../beauty/image/123.png')} style={{
              width: ScreenUtils.scaleSize(375),
              height: ScreenUtils.scaleSize(200),
              marginTop: 10
            }}/>
          </TouchableOpacity>

          {/* 推荐商家 */}
          <View style={styles.store_wrapper}>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goRecommendStore.bind(this)}>
              <HomeBlockTitleComponent titleEn="Recommended businesses" titleZh="推荐商家"/>
            </TouchableOpacity>
            <View style={styles.store_body}>
              {/* {this.renderStore()} */}
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../home/image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../home/image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../home/image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('../home/image/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity>
            </View>
          </View>

          {/* 推荐手艺人 */}
          <View>
            <TouchableOpacity style={styles.block_title_wrapper} onPress={this._goTechnician.bind(this, '推荐手艺人')}>
              <HomeBlockTitleComponent titleEn="Gold Practitioner" titleZh="推荐手艺人"/>
            </TouchableOpacity>
            <ScrollView horizontal>
              <View style={styles.doctor_box}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>anra</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
              <View style={styles.doctor_box}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>test</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>2222</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
              <View style={styles.doctor_box}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>alsk</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
              <View style={[styles.doctor_box,{marginRight: 0}]}>
                <Image style={styles.doctor_img} source={require('../../img/g.jpg')}/>
                <Text style={{color: '#363334',fontSize: 16,marginTop: 10}}>ceshi</Text>
                <View style={{borderBottomColor: '#363334',borderBottomWidth: 0.5,width: 10,marginTop: 12}}></View>
                <Text style={{color: '#FF6D99',fontSize: 14,marginTop: 15}}>3214</Text>
                <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 3}}>服务次数</Text>
              </View>
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
