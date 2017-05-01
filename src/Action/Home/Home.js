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
import TabNavigator from 'react-native-tab-navigator';

import HomeHeaderComponent from './components/HomeHeader';
import HomeModulesComponent from './components/HomeModules';
import HomeBlockTitleComponent from './components/HomeBlockTitle';
import ProductItemComponent from '../../BaseView/ProductListItem/ProductItem';
import StoreListItem from '../../BaseView/StoreListItem/StoreItem';
// import RecommendStoreListComponent from './RecommendStoreList';
// import SpecialColumnComponent from './components/SpecialColumn';

import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
/**
 * 接口
 */
import Model from './Model/Model';

const CITYID = '';
const USERID = '';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      HomeCategoryList: [],
      HomeDiscountedGoodsList: [],
      HomeStarGoodsList: [],
      HomeInformationList: [],
      HomeBannerList: [],
      SameCityStoreList: []
    };
  }

  componentDidMount(){
    this.GetHomeCategoryList();
    this.GetHomeDiscountedGoodsList();
    this.GetHomeStarGoodsList();
    this.GetHomeInformationList();
    this.GetHomeBannerList();
    this.GetSameCityStoreList();
  }

  GetHomeCategoryList() {
    var params = {
      CityId: CITYID,
      UserId: USERID
    };
    Model.GetHomeCategoryList(params,(res)=>{

    });
  }
  /**
   * 获取打折商品
   */
  GetHomeDiscountedGoodsList() {
    var params = {
      CityId: CITYID,
      UserId: USERID
    };
    Model.GetHomeDiscountedGoodsList(params,(res)=>{

    });
  }
  /**
   * 热卖商品
   */
  GetHomeStarGoodsList() {
    var params = {
      CityId: CITYID,
      UserId: USERID
    };
    Model.GetHomeStarGoodsList(params,(res)=>{
      this.setState({
        HomeStarGoodsList: res.StarGoodsList
      });
    });
  }
  /**
   * 杂志社
   */
  GetHomeInformationList() {
    var params = {
      CityId: CITYID,
      UserId: USERID
    };
    Model.GetHomeInformationList(params,(res)=>{
      this.setState({
        HomeInformationList: res.InformationList
      })
    });
  }
  /**
   * 获取banner
   */
  GetHomeBannerList() {
    var params = {
      CityId: CITYID,
      UserId: USERID
    };
    Model.GetHomeBannerList(params,(res)=>{
      this.setState({
        HomeBannerList: res.BannerList
      });
    });
  }
  /**
   * 同城门店
   */
  GetSameCityStoreList() {
    var params = {
      CityId: CITYID,
      UserId: USERID
    };
    Model.GetSameCityStoreList(params,(res)=>{
      this.setState({
        SameCityStoreList: res.StoreList
      });
    });
  }

  _goProductDetail(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'ProductDetail'
      });
    }
  }

  _goStoreDetail(){
    var { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'StoreDetail'
      })
    }
  }

  renderImg(){
    let imageViews = [];
    for(var i=0;i<this.state.HomeBannerList.length;i++){
        let item = this.state.HomeBannerList[i];
        imageViews.push(
            <Image
              key={i}
              style={{flex:1}}
              source={{uri: item.ImgUrl}}
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
    for (var i = 0; i < 4; i++) {
      saleItems.push(
        <TouchableOpacity style={styles.sale_item} key={i} onPress={this._goProductDetail.bind(this)}>
          <View style={styles.sale_img}>
            <Image style={{width:160,height:160,resizeMode:Image.resizeMode.cover}} source={require('./assets/40D00A1F-CAC8-47DB-BCB9-D17B59098F1A.png')}/>
          </View>
          <View style={styles.sale_content}>
            <Text style={styles.sale_title}>铂翡紧颜滋润AA面霜</Text>
            <View style={styles.sale_price}>
              <Text style={styles.sale_price_now}>￥1,088.00</Text>
              <Text style={styles.sale_price_old}>¥1599.00</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return saleItems;
  }

  renderMagazine() {
    let magazineItems = [];
    for (var i = 0; i < this.state.HomeInformationList.length; i++) {
      let obj = this.state.HomeInformationList[i]
      magazineItems.push(
        <Image source={{uri: obj.Image}}
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
          <Image source={require('./assets/8832F62B-2070-45C5-96E3-2BCB4F5CBE3F.png')}
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

  renderHomeStarGoodsList() {
    let items = [];
    for (var i = 0; i < this.state.HomeStarGoodsList.length; i++) {
      let obj = this.state.HomeStarGoodsList[i];
      let ProductItemInfo = {
        width: ScreenUtils.scaleSize(170),
        height:ScreenUtils.scaleSize(150),
        ...obj
      }
      items.push(
        <View style={styles.hot_item} key={i}>
          <ProductItemComponent {...ProductItemInfo} nav={this.props.nav}/>
        </View>
      )
    }
    return items;
  }

  renderSameCityStoreList() {
    let items = [];
    let length = this.state.SameCityStoreList.length > 4 ? 4 : this.state.SameCityStoreList.length;
    for (var i = 0; i < length; i++) {
      let obj = this.state.SameCityStoreList[i];
      let ItemInfo = {
        width: ScreenUtils.scaleSize(170),
        height:ScreenUtils.scaleSize(150),
        ...obj
      }
      items.push(
        <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)} key={i}>
          {/* <Image style={styles.store_img} source={require('./assets/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/> */}
          <StoreListItem {...ItemInfo} nav={this.props.nav}/>
        </TouchableOpacity>
      )
    }
    return items;
  }

  _goSale(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'HomeSaleList'
      });
    }
  }

  _goRecommendStore(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'StoreList'
      });
    }
  }

  _goSpecialColumn(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'SpecialColumn'
      });
    }
  }

  _goMagazine(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Magazine'
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
        <HomeHeaderComponent nav={this.props.nav}/>

        <ScrollView style={{
          flex:1
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

          <HomeModulesComponent nav={this.props.nav}/>

          {/* 欢乐促销 */}
          <View style={styles.sale_wrapper}>
            <TouchableHighlight style={styles.block_title_wrapper} onPress={this._goSale.bind(this)}>
              <View><HomeBlockTitleComponent titleEn="Joy and happiness" titleZh="欢乐优促"/></View>
            </TouchableHighlight>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sale_body}>
              {this.renderSale()}
            </ScrollView>
          </View>

          {/* 杂志社 */}
          <View style={styles.magazine_wrapper}>
            <TouchableHighlight style={styles.block_title_wrapper} onPress={this._goMagazine.bind(this)}>
              <View>
                <HomeBlockTitleComponent titleEn="Magazine Agency" titleZh="杂志社"/>
              </View>
            </TouchableHighlight>
            <View style={styles.magazine_body}>
              <View style={styles.magazine_top}>
                <Image source={require('./assets/C29105FA-A819-40D0-831E-C7AB324AB618.png')}
                  style={{width:ScreenUtils.scaleSize(375), height:ScreenUtils.scaleSize(230)}}
                />
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.magazine_list}>
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
              {this.renderSameCityStoreList()}
              {/* <TouchableOpacity style={styles.store_item} onPress={this._goStoreDetail.bind(this)}>
                <Image style={styles.store_img} source={require('./assets/46037860-08A1-4A1B-89BB-9CCB03C63BD5.png')}/>
              </TouchableOpacity> */}
            </View>
          </View>

          {/* 全球大热购 */}
          <View style={styles.hot_wrapper}>
            <View style={[styles.block_title_wrapper,{backgroundColor:'#F0EFF5'}]}>
              <HomeBlockTitleComponent titleEn="All the big Tesoo" titleZh="全球大热购"/>
            </View>
            <View style={styles.hot_body}>
              {/* <View style={styles.hot_item}>
                <ProductItemComponent {...ProductItemInfo} nav={this.props.nav}/>
              </View> */}
              {this.renderHomeStarGoodsList()}
            </View>
          </View>
        </ScrollView>
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
    flex: 1
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
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#fff'
  },
  store_item:{
    width: ScreenUtils.scaleSize(170),
    // height: ScreenUtils.scaleSize(170),
    marginBottom:10
  },
  store_img:{
    width: ScreenUtils.scaleSize(170),
    height: ScreenUtils.scaleSize(170)
  },
  hot_body:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
  },
  hot_item:{
    marginBottom:10
  },
});
