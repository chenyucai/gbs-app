import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../../../Utils/ScreenUtils/ScreenUtils';

export default class PhotoelectricbeautyModulesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goFacialshaping(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Facialshaping',
        title: title
      });
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item_line}>
          <TouchableOpacity style={styles.item} onPress={this._goFacialshaping.bind(this,'全部')}>
            <Image style={styles.item_icon} source={require('../../assets/icon_all.png')}/>
            <Text style={styles.item_title}>全部</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goFacialshaping.bind(this,'面部塑形')}>
            <Image style={styles.item_icon} source={require('../../assets/icon_face.png')}/>
            <Text style={styles.item_title}>面部塑形</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goFacialshaping.bind(this,'皮肤管理')}>
            <Image style={styles.item_icon} source={require('../../assets/icon_skin.png')}/>
            <Text style={styles.item_title}>皮肤管理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this._goFacialshaping.bind(this,'身体塑形')}>
            <Image style={styles.item_icon} source={require('../../assets/icon_body.png')}/>
            <Text style={styles.item_title}>身体塑形</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
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
    marginTop: 25,
    marginBottom:5
  },
  item_title: {
    textAlign:'center',
    fontSize:12,
    color:'#363334',
    lineHeight:17
  }
});
