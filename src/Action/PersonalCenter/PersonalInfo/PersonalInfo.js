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
  // Picker
} from 'react-native'
import Picker from 'react-native-picker';

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import MyPicker from '../../../BaseView/Picker/MyPicker';

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      opt:'1'
    };
  }
  componentDidMount(){


  }

  render () {
    let data = [];
    for(var i=0;i<100;i++){
        data.push(i);
    }

    Picker.init({
        pickerData: data,
        selectedValue: [59],
        onPickerConfirm: data => {
            console.log(data);
            this.setState({opt:data})
        },
        onPickerCancel: data => {
            console.log(data);
        },
        onPickerSelect: data => {
            console.log(data);
        }
    });
    Picker.hide();
    return (
      <View style={styles.container}>
        <BaseNavigationBar
            data={{
                title: "资料详情",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <ScrollView>
          <Text style={{
            fontSize:12,
            color:'#B8B8B8',
            backgroundColor:'#F0EFF5',
            paddingHorizontal: 12,
            paddingVertical:7
          }}>
            完善个人信息可获得丰厚积分哦！
          </Text>

          <View style={{backgroundColor:'#fff', marginBottom:10}}>
            <View style={[styles.item]}>
              <Text style={styles.item_label}>头像</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Image source={require('../../../../img/888.png')} style={{
                  width:50, height:50, borderRadius:25
                }}/>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </View>
            <View style={[styles.item]}>
              <Text style={styles.item_label}>昵称</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12, color:'#363334'}}>小太阳的朋友</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </View>
            <View style={[styles.item]}>
              <Text style={styles.item_label}>等级</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Image source={require('./assets/icon_Grade2.png')}/>
              </View>
              <Text style={{fontSize:11, color:'#FF6D99'}}>联系客服</Text>
            </View>
            <View style={[styles.item]}>
              <Text style={[styles.item_label, {flex:1}]}>认证状态</Text>
              <Text style={{fontSize:14, color:'#B8B8B8'}}>未认证</Text>
            </View>
            <View style={[styles.item,{borderBottomWidth:0}]}>
              <Text style={[styles.item_label, {flex:1}]}>个人标签</Text>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </View>
            <ScrollView horizontal style={{paddingBottom: 15, paddingHorizontal:12, borderBottomWidth:0.5, borderBottomColor:'#d7d7d7'}}>
              <Text style={{marginRight:12, paddingHorizontal:10, paddingVertical:6, backgroundColor:'#d7d7d7', fontSize:12,color:'#656565'}}>逛街达人</Text>
              <Text style={{marginRight:12, paddingHorizontal:10, paddingVertical:6, backgroundColor:'#d7d7d7', fontSize:12,color:'#656565'}}>逛街达人</Text>
              <Text style={{marginRight:12, paddingHorizontal:10, paddingVertical:6, backgroundColor:'#d7d7d7', fontSize:12,color:'#656565'}}>逛街达人</Text>
              <Text style={{marginRight:12, paddingHorizontal:10, paddingVertical:6, backgroundColor:'#d7d7d7', fontSize:12,color:'#656565'}}>逛街达人</Text>
            </ScrollView>
          </View>

          <View style={{backgroundColor:'#fff', marginBottom:10}}>
            <View style={{paddingHorizontal:12, paddingVertical:12,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:14,color:'#2F2F2F',flex:1}}>我的专属邀请码</Text>
              <View style={{}}>
                <View style={{flexDirection:'row',borderColor:'#FF6D99',borderWidth:1}}>
                  <Text style={{color:'#FF6D99',paddingHorizontal:10,alignSelf:'center'}}>335667721</Text>
                  <Text style={{color:'#fff',paddingHorizontal:10,backgroundColor:'#FF6D99',fontSize:11,paddingVertical:5}}>立即分享</Text>
                </View>
              </View>
            </View>
            <View style={[styles.border_bottom, {marginLeft:12,paddingBottom:15}]}>
              <Text style={{color:'#B8B8B8',lineHeight:20, fontSize:12}}>
                邀请码是为您唯一定制的身份标识，把邀请码分享给您的朋友前来注册后，您可以丰厚获奖励
              </Text>
            </View>
            <TouchableOpacity style={[styles.item]} onPress={() => {Picker.show()}}>
              <Text style={styles.item_label}>意向服务</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12, color:"#B8B8B8"}}>鼻部  面部整形  美甲</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
          </View>

          <Text>{this.state.opt}</Text>
        </ScrollView>
        <MyPicker options={['1','2','3']} hide={this.state.hide} callback={this.change.bind(this)}/>
      </View>
    )
  }

  change(opt){
    this.setState({
      opt:opt
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F0EFF5'
  },
  item:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d7d7d7',
    paddingVertical: 15,
    marginLeft: 12,
    paddingRight: 12
  },
  item_label:{
    fontSize: 14,
    color:'#656565'
  },
  border_bottom:{
    borderBottomWidth:0.5,
    borderBottomColor:"#d7d7d7"
  }
});
