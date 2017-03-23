import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class BottomTabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <Image style={styles.item_icon} source={require('./image/icon_n_Butterfly.png')}/>
          <Text style={styles.item_title}>索菲尔</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.item_icon} source={require('./image/icon_dis_Cart.png')}/>
          <Text style={styles.item_title}>购物车</Text>
        </View>
        <View style={styles.item_center}>
          <Image style={styles.item_center_icon} source={require('./image/icon_Release.png')}/>
        </View>
        <View style={styles.item}>
          <Image style={styles.item_icon} source={require('./image/icon_dis_schedule.png')}/>
          <Text style={styles.item_title}>日程安排</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.item_icon} source={require('./image/icon_dis_personal.png')}/>
          <Text style={styles.item_title}>个人中心</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 49,
    // paddingTop:10,
    // paddingBottom:20,
    borderTopWidth: 0.5,
    borderTopColor: '#D7D7D7',
    flexDirection: 'row',
    backgroundColor:'#fff'
  },
  item:{
    flex:1,
    backgroundColor:'#fff'
  },
  item_icon: {
    alignSelf: 'center',
    marginTop: 7,
    marginBottom: 4
  },
  item_title: {
    textAlign: 'center',
    fontSize: 10
  },
  item_center:{
    paddingLeft:10,
    paddingRight: 10,
    backgroundColor:'#fff'
  },
  item_center_icon:{
    alignSelf: 'center',
    marginTop:7
  }
});
