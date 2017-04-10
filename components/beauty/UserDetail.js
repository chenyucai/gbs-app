/**
 * page 用户详情
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ProductItemComponent from '../common/ProductItem';
import DiaryListItemComponent from '../common/DiaryListItem';
import BackIconComponent from '../common/BackIcon'

import ScreenUtils from '../../utils/ScreenUtils';

export default class UserDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };
  }

  _changeState(){
    // 用this.setState方法去改变state
    // 点击微信
    this.setState({

    })
  }

  render () {
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <ScrollView style={{flex:1}}>
          <View style={styles.header}>
            <View style={{
              position:'absolute',
              top:30,
              left:12,
              zIndex:100
            }}>
              <BackIconComponent navigator={this.props.navigator}/>
            </View>
            <View style={styles.icon_box}>
              <Image source={require('./image/BG.png')} style={styles.bg}/>
              <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.icon}/>
              <Text style={styles.username}>Funwear</Text>
            </View>
            <View style={styles.info_box}>
              <View style={styles.info_item}>
                <Image source={require('./image/icon_female2.png')} style={styles.info_icon}/>
                <Text style={styles.info_content}>女</Text>
              </View>
              <View style={styles.info_item}>
                <Image source={require('./image/icon_Birthday.png')} style={styles.info_icon}/>
                <Text style={styles.info_content}>1992.02.24</Text>
              </View>
              <View style={[styles.info_item, {paddingRight:0,marginRight:0,borderRightWidth:0}]}>
                <Image source={require('./image/icon_place.png')} style={styles.info_icon}/>
                <Text style={styles.info_content}>上海浦东新区</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.focus}>
              <Text style={{fontSize:14, color:'#FF5D94'}}>＋ 关注</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tags_wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
              paddingVertical:15,
              paddingHorizontal:10,
              marginHorizontal:10,
              borderBottomColor:'#d7d7d7',
              borderBottomWidth:1
            }}>
              <Text style={styles.tag_item}>90后</Text>
              <Text style={styles.tag_item}>逛街达人</Text>
              <Text style={styles.tag_item}>白莲花</Text>
              <Text style={styles.tag_item}>黑山老妖</Text>
            </ScrollView>
            <View style={{
              marginVertical:14,
              alignItems:'center',
              justifyContent:"center",
              flexDirection:'row'
            }}>
              <Text style={{fontSize:14}}>意向服务：</Text>
              <Text style={{color:'#FF5D94',fontSize:14}}>鼻部  面部整形  美甲</Text>
            </View>
          </View>

          <ScrollableTabView
            tabBarUnderlineStyle={{
              backgroundColor:'#fff'
            }}
            tabBarBackgroundColor='#fff'
            tabBarActiveTextColor='#363334'
            tabBarInactiveTextColor='#B8B8B8'
            tabBarTextStyle={{fontSize: 14,fontWeight:'400'}}
          >
            <View tabLabel='关注单品' style={{flex:1}}>
              <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
                alignItems:'center',
                paddingLeft:5,
                paddingRight:5,
                paddingTop:5,
                paddingBottom:5,
                backgroundColor:'#fff'
              }}>
                <View style={styles.item}>
                  <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
                </View>
                <View style={styles.item}>
                  <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
                </View>
                <View style={styles.item}>
                  <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
                </View>
                <View style={styles.item}>
                  <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
                </View>
              </View>
            </View>

            <View tabLabel='TA的日记本' style={{flex:1}}>
              <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
                alignItems:'center',
                paddingLeft:5,
                paddingRight:5,
                paddingTop:5,
                paddingBottom:5,
                backgroundColor:'#fff'
              }}>
                <View style={styles.item}>
                  <DiaryListItemComponent navigator={this.props.navigator}/>
                </View>
                <View style={styles.item}>
                  <DiaryListItemComponent navigator={this.props.navigator}/>
                </View>
                <View style={styles.item}>
                  <DiaryListItemComponent navigator={this.props.navigator}/>
                </View>
                <View style={styles.item}>
                  <DiaryListItemComponent navigator={this.props.navigator}/>
                </View>
              </View>
            </View>
          </ScrollableTabView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'#F2F2F2'
  },
  header:{
    backgroundColor:'#fff',
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5
  },
  icon_box:{
    height: ScreenUtils.scaleSize(180)
  },
  bg:{
    width:Dimensions.get('window').width,
    position:'absolute',
    left:0,
    top:0
  },
  icon:{
    width:70,
    height:70,
    borderRadius:35,
    alignSelf:'center',
    marginTop: 50,
    marginBottom:10
  },
  username:{
    alignSelf:'center',
    fontSize:14,
    fontWeight:'500',
    backgroundColor:'#F2F2F2'
  },
  info_box:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:20
  },
  info_item:{
    flexDirection:'row',
    alignItems:'center',
    paddingRight: 15,
    borderRightWidth:0.5,
    borderRightColor:"#d7d7d7",
    marginRight:15
  },
  info_icon:{
    marginRight:6
  },
  info_content:{
    fontSize:12,
    color:'#B8B8B8'
  },
  focus:{
    width:70,
    height:30,
    borderWidth:0.5,
    borderColor:'#FF5D94',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginVertical:20
  },
  tags_wrapper:{
    backgroundColor:'#fff',
    marginVertical:10
  },
  tag_item:{
    paddingHorizontal:7,
    paddingVertical:5,
    fontSize:12,
    color:"#656565",
    backgroundColor:'#D7D7D7',
    marginRight:12
  },
  item:{
    marginBottom:10,
    borderColor:'#D7D7D7',
    borderWidth:0.5
  }
});
