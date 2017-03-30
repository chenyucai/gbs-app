import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import {scaleSize,setSpText} from '../../utils/ScreenUtils';
import PhotoelectricbeautyComponent from '../beauty/Photoelectricbeauty';
import MicroplasticComponent from '../microplastic/Microplastic';
import DiaryListComponent from '../beauty/DiaryList';
import RecommendStoreListComponent from './RecommendStoreList'
import PreferentialcircleComponent from '../preferential/Preferentialcircle'

export default class HomeModulesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goPhotoelectricBeauty(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Photoelectricbeauty',
        component: PhotoelectricbeautyComponent
      });
    }
  }

  _goMicroplastic(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Microplastic',
        component: MicroplasticComponent
      });
    }
  }

  _goDairy(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'diaryList',
        component: DiaryListComponent
      });
    }
  }

  _goStore(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'sameCityStoreList',
        component: RecommendStoreListComponent,
        params:{
          title:'同城门店'
        }
      });
    }
  }

  _goPreferentialcircle(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Preferentialcircle',
        component: PreferentialcircleComponent
      });
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item_line}>
          <TouchableOpacity style={styles.item} onPress={this._goPhotoelectricBeauty.bind(this)}>
            <Image style={styles.item_icon} source={require('./image/icon_Cosmetology.png')}/>
            <Text style={styles.item_title}>光电美容</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goMicroplastic.bind(this)}>
            <Image style={styles.item_icon} source={require('./image/icon_plastic.png')}/>
            <Text style={styles.item_title}>微整形</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_beauty.png')}/>
            <Text style={styles.item_title}>丽人</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goPreferentialcircle.bind(this)}>
            <Image style={styles.item_icon} source={require('./image/icon_discount.png')}/>
            <Text style={styles.item_title}>特惠圈</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item_line}>
          <TouchableOpacity style={styles.item} onPress={this._goStore.bind(this)}>
            <Image style={styles.item_icon} source={require('./image/icon_shops.png')}/>
            <Text style={styles.item_title}>同城门店</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_Community.png')}/>
            <Text style={styles.item_title}>网上社区</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goDairy.bind(this)}>
            <Image style={styles.item_icon} source={require('./image/icon_note.png')}/>
            <Text style={styles.item_title}>美丽日记</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_Magazine.png')}/>
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
