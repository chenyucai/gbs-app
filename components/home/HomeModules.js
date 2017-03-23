import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import {scaleSize,setSpText} from '../../utils/ScreenUtils';

export default class HomeModulesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item_line}>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_Cosmetology.png')}/>
            <Text style={styles.item_title}>光电美容</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_plastic.png')}/>
            <Text style={styles.item_title}>微整形</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_beauty.png')}/>
            <Text style={styles.item_title}>丽人</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_discount.png')}/>
            <Text style={styles.item_title}>特惠圈</Text>
          </View>
        </View>

        <View style={styles.item_line}>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_shops.png')}/>
            <Text style={styles.item_title}>同城门店</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_Community.png')}/>
            <Text style={styles.item_title}>网上社区</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_note.png')}/>
            <Text style={styles.item_title}>美丽日记</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.item_icon} source={require('./image/icon_Magazine.png')}/>
            <Text style={styles.item_title}>杂志社</Text>
          </View>
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
