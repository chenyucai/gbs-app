import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import {scaleSize,setSpText} from '../../../Utils/ScreenUtils/ScreenUtils';
// import PhotoelectricbeautyComponent from '../beauty/Photoelectricbeauty';
// import MicroplasticComponent from '../microplastic/Microplastic';
// import DiaryListComponent from '../beauty/DiaryList';
// import RecommendStoreListComponent from './RecommendStoreList'
// import PreferentialcircleComponent from '../preferential/Preferentialcircle'
// import MagazineComponent from '../magazine/Magazine'
// import BeautifulwomanComponent from '../beautifulwoman/Beautifulwoman'
// import CommunityComponent from '../community/Community';

export default class HomeModulesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goPhotoelectricBeauty(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        name: 'Photoelectricbeauty',
        component: PhotoelectricbeautyComponent
      });
    }
  }

  _goMicroplastic(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        name: 'Microplastic',
        component: MicroplasticComponent
      });
    }
  }

  _goBeautifulwoman(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        name: 'Beautifulwoman',
        component: BeautifulwomanComponent
      });
    }
  }

  _goDairy(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'DiaryList'
      });
    }
  }

  _goStore(){
    this.props.nav.push({
      id: 'CityStoreList'
    });
  }

  _goPreferentialcircle(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        name: 'Preferentialcircle',
        component: PreferentialcircleComponent
      });
    }
  }
  _goCommunity(){
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Community'
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
    return (
      <View style={styles.wrapper}>
        <View style={styles.item_line}>
          <TouchableOpacity style={styles.item} onPress={this._goPhotoelectricBeauty.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_Cosmetology.png')}/>
            <Text style={styles.item_title}>光电美容</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goMicroplastic.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_plastic.png')}/>
            <Text style={styles.item_title}>微整形</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goBeautifulwoman.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_beauty.png')}/>
            <Text style={styles.item_title}>丽人</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goPreferentialcircle.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_discount.png')}/>
            <Text style={styles.item_title}>特惠圈</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item_line}>
          <TouchableOpacity style={styles.item} onPress={this._goStore.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_shops.png')}/>
            <Text style={styles.item_title}>同城门店</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goCommunity.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_Community.png')}/>
            <Text style={styles.item_title}>网上社区</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goDairy.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_note.png')}/>
            <Text style={styles.item_title}>美丽日记</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goMagazine.bind(this)}>
            <Image style={styles.item_icon} source={require('../assets/icon_Magazine.png')}/>
            <Text style={styles.item_title}>杂志社</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 194,
    backgroundColor:'#fff',
  },
  item_line: {
    flexDirection: 'row'
  },
  item: {
    flex:1,
  },
  item_icon:{
    alignSelf:'center',
    marginTop: 30,
    marginBottom:5
  },
  item_title: {
    textAlign:'center',
    fontSize:12,
    color:'#363334',
    lineHeight:17
  }
});
