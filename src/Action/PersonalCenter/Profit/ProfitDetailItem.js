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

const { width, height } = Dimensions.get('window');

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/hb.png')}/>

        <View style={styles.count}>
          <Image source={require('./assets/line_left.png')}/>
          <View style={{flexDirection:'row',alignSelf:'center',marginHorizontal:10}}>
            <Text style={{backgroundColor:'#CFAF80',color:'#fff'}}>￥</Text>
            <Text style={{backgroundColor:'#CFAF80',color:'#fff',fontSize:50}}>10</Text>
          </View>
          <Image source={require('./assets/line_right.png')}/>
        </View>

        <View style={{alignItems:'center',top:140,position:'absolute',width:width}}>
          <Text style={{backgroundColor:'#fff',marginBottom:5,fontWeight:'200'}}>您的二级代理人<Text style={{fontWeight:'600'}}>小太阳的朋友</Text></Text>
          <Text style={{backgroundColor:'#fff',marginBottom:20,fontWeight:'200'}}>给您带来了红包奖励</Text>
          <TouchableOpacity style={{width: 100, height:40,backgroundColor:'#D9BD8C',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:16,color:'#fff'}}>领取</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F2F2F2',
    alignItems:'center',
    marginBottom:30
  },
  count:{
    width:width,
    position:'absolute',
    top:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});
