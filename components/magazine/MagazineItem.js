/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class MagazineItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Image source={require('../../img/06BB366A-D6E8-4D03-BF32-D4A2210A7F1E.png')} style={{width:130,height:140}}/>
        <View style={styles.content}>
          <Text style={styles.title}>
            光博士与美国SVB设计学院合理打造新时尚美容生态系统系统...
          </Text>

          <View style={styles.footer}>
            <View style={styles.item}>
              <Image source={require('./image/icon_see2.png')} />
              <Text style={styles.text}>999+</Text>
            </View>
            <View style={[styles.item, {flex:1,marginLeft:8}]}>
              <Image source={require('./image/icon_Fabulous.png')} />
              <Text style={styles.text}>999+</Text>
            </View>
            <Text style={styles.date}>2016年9月20</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection: 'row',
    backgroundColor:'#fff'
  },
  content:{
    flex: 1,
    paddingHorizontal: 12
  },
  title:{
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    flex:1,
    paddingTop:5
  },
  text:{
    fontSize: 12,
    color:'#656565'
  },
  footer:{
    flexDirection:'row',
    alignItems:'center'
  },
  item:{
    flexDirection:'row',
    alignItems:'center'
  },
  date:{
    fontSize:12,
    color:'#B8B8B8'
  }
});
