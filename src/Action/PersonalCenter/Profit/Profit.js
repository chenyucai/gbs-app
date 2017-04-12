/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native'

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';

const { width, height } = Dimensions.get('window');

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  goAgentList(){
    this.props.nav.push({
      id: 'AgentList'
    })
  }
  goDetail(){
    this.props.nav.push({
      id: 'ProfitDetail'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle={'light-content'}
        />
        <ScrollView style={{flex:1, backgroundColor:'#F0EFF5'}}>
          <View style={{
            width: width,
            height: ScreenUtils.scaleSize(250)
          }}>
            <Image source={require('./assets/bg.png')} style={{
              width:width,
              position:'absolute',
              left:0,
              top:0
            }}/>
            <View style={{flexDirection:'row',paddingTop:25,alignItems:'center'}}>
              <TouchableOpacity style={{paddingHorizontal:6}} onPress={() => {
                this.props.nav.pop();
              }}>
                <Image source={require('./assets/icon_Return.png')}/>
              </TouchableOpacity>
              <View style={{flex:1,alignItems:'flex-end'}}>
                <Text style={{color:'#fff',paddingHorizontal:12,backgroundColor:'#D0B07D'}}>分享获利说明</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',marginTop:38}}>
              {/* 缺少一个图标 */}
              {/* <Image source={require()}/> */}
              <Text style={{backgroundColor:'#D0B07D',color:"#fff",fontSize:14}}>累计奖励</Text>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',marginTop:30}}>
              <Text style={{backgroundColor:'#D3B483',color:'#fff'}}>￥</Text>
              <Text style={{backgroundColor:'#D3B483',color:'#fff',fontSize:50}}>100</Text>
              <Text style={{top:-10,paddingHorizontal:4,paddingVertical:2,backgroundColor:'#fff',fontSize:12,color:"#CFAF7B",alignSelf:'flex-start'}}>8人</Text>
            </View>
            <TouchableOpacity onPress={this.goDetail.bind(this)} style={{
              position:'absolute',
              bottom:12,
              right:12
            }}>
              <Image source={require('./assets/icon_money.png')} />
            </TouchableOpacity>

          </View>

          <View style={{backgroundColor:'#fff',flex:1}}>
            <TouchableOpacity style={[styles.item]} onPress={this.goAgentList.bind(this)}>
              <Text style={styles.item_label}>一级代理人</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text>2人</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this.goAgentList.bind(this)}>
              <Text style={styles.item_label}>二级代理人</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text>2人</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this.goAgentList.bind(this)}>
              <Text style={styles.item_label}>三级代理人</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text>2人</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{alignSelf:'center',marginTop:50}}>
            <Image source={require('./assets/btn_share.png')}/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#D5B889'
  },
  item:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d7d7d7',
    paddingVertical: 15,
    marginLeft: 12,
    paddingRight: 12,
    backgroundColor:'#fff'
  },
  item_label:{
    fontSize: 14,
    color:'#656565'
  },
});
