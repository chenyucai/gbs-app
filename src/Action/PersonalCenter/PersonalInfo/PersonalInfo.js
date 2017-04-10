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
  Dimensions,
  Animated,
  Easing,
  // Picker
} from 'react-native'
import Picker from 'react-native-picker';

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import area from './area.json';

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      maskShow: false,
      sex:'',
      birth:'',
      area:'',
      job:'',
      pos:'',
      income:''
    };
  }

  componentWillUnMount(){
    this.timer && clearTimeout(this.timer);
  }

  _createDateData() {
      let date = [];
      for(let i=1950;i<2050;i++){
          let month = [];
          for(let j = 1;j<13;j++){
              let day = [];
              if(j === 2){
                  for(let k=1;k<29;k++){
                      day.push(k+'日');
                  }
                  //Leap day for years that are divisible by 4, such as 2000, 2004
                  if(i%4 === 0){
                      day.push(29+'日');
                  }
              }
              else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                  for(let k=1;k<32;k++){
                      day.push(k+'日');
                  }
              }
              else{
                  for(let k=1;k<31;k++){
                      day.push(k+'日');
                  }
              }
              let _month = {};
              _month[j+'月'] = day;
              month.push(_month);
          }
          let _date = {};
          _date[i+'年'] = month;
          date.push(_date);
      }
      return date;
  }

  _createAreaData() {
      let data = [];
      let len = area.length;
      for(let i=0;i<len;i++){
          let city = [];
          for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
              let _city = {};
              _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
              city.push(_city);
          }

          let _data = {};
          _data[area[i]['name']] = city;
          data.push(_data);
      }
      return data;
  }

  _showDatePicker() {
    // this.setState({maskShow:true},this.in);
    Picker.init({
        pickerData: this._createDateData(),
        pickerConfirmBtnText:'确定',
        pickerCancelBtnText:'取消',
        pickerTitleText:'',
        pickerConfirmBtnColor:[255,109,153,1],
        pickerCancelBtnColor:[184,184,184,1],
        pickerBg:[240,239,245,1],
        onPickerConfirm: (pickedValue, pickedIndex) => {
            console.log('date', pickedValue, pickedIndex);
            // this.out();
            this.setState({birth: pickedValue});
        },
        onPickerCancel: (pickedValue, pickedIndex) => {
            console.log('date', pickedValue, pickedIndex);
            // this.out()
        },
        onPickerSelect: (pickedValue, pickedIndex) => {
            console.log('date', pickedValue, pickedIndex);
        }
    });
    Picker.show();
  }

  _showAreaPicker() {
    // this.setState({maskShow:true},this.in);
    Picker.init({
        pickerData: this._createAreaData(),
        selectedValue: ['河北', '唐山', '古冶区'],
        pickerConfirmBtnText:'确定',
        pickerCancelBtnText:'取消',
        pickerTitleText:'',
        pickerConfirmBtnColor:[255,109,153,1],
        pickerCancelBtnColor:[184,184,184,1],
        pickerBg:[240,239,245,1],
        onPickerConfirm: pickedValue => {
            console.log('area', pickedValue);
            this.out();
            this.setState({area: pickedValue});
        },
        onPickerCancel: pickedValue => {
            console.log('area', pickedValue);
            this.out()
        },
        onPickerSelect: pickedValue => {
            //Picker.select(['山东', '青岛', '黄岛区'])
            console.log('area', pickedValue);
        }
    });
    Picker.show();
  }

  _showSexPicker() {
    // this.setState({maskShow:true},this.in);
    let data = [
      '男',
      '女',
    ];
    Picker.init({
      pickerData: data,
      selectedValue: ['女'],
      pickerConfirmBtnText:'确定',
      pickerCancelBtnText:'取消',
      pickerTitleText:'',
      pickerConfirmBtnColor:[255,109,153,1],
      pickerCancelBtnColor:[184,184,184,1],
      pickerBg:[240,239,245,1],
      onPickerConfirm: data => {
          console.log(data);
          this.out();
          this.setState({sex: data});
      },
      onPickerCancel: data => {
          console.log(data);
          this.out();
      },
      onPickerSelect: data => {
          console.log(data);
      }
    });
    Picker.show();
  }

  _showJobPicker() {
    // this.setState({maskShow:true},this.in);
    let data = [
      '自由职业装',
      '普通员工',
      '部门经理',
      '公司总监'
    ];
    Picker.init({
      pickerData: data,
      selectedValue: ['部门经理'],
      pickerConfirmBtnText:'确定',
      pickerCancelBtnText:'取消',
      pickerTitleText:'职位',
      pickerConfirmBtnColor:[255,109,153,1],
      pickerCancelBtnColor:[184,184,184,1],
      pickerBg:[240,239,245,1],
      onPickerConfirm: data => {
          console.log(data);
          this.out()
          this.setState({job: data});
      },
      onPickerCancel: data => {
          console.log(data);
          this.out();
      },
      onPickerSelect: data => {
          console.log(data);
      }
    });
    Picker.show();
  }

  _showPosPicker() {
    // this.setState({maskShow:true},this.in);
    let data = [
      '自由职业装',
      '普通员工',
      '部门经理',
      '公司总监'
    ];
    Picker.init({
      pickerData: data,
      selectedValue: ['部门经理'],
      pickerConfirmBtnText:'确定',
      pickerCancelBtnText:'取消',
      pickerTitleText:'职位',
      pickerConfirmBtnColor:[255,109,153,1],
      pickerCancelBtnColor:[184,184,184,1],
      pickerBg:[240,239,245,1],
      onPickerConfirm: data => {
          console.log(data);
          this.setState({maskShow: false}, this.out);
          this.setState({pos: data});
      },
      onPickerCancel: data => {
          console.log(data);
          this.setState({maskShow: false}, this.out);
      },
      onPickerSelect: data => {
          console.log(data);
      }
    });
    Picker.show();
  }

  _showIncomePicker() {
    // this.setState({maskShow:true},this.in);
    let data = [
      '0-10万',
      '10-15万',
      '15－25万',
      '25-50万'
    ];
    Picker.init({
      pickerData: data,
      selectedValue: ['0-10万'],
      pickerConfirmBtnText:'确定',
      pickerCancelBtnText:'取消',
      pickerTitleText:'',
      pickerConfirmBtnColor:[255,109,153,1],
      pickerCancelBtnColor:[184,184,184,1],
      pickerBg:[240,239,245,1],
      onPickerConfirm: data => {
          console.log(data);
          this.out();
          this.setState({income: data});
      },
      onPickerCancel: data => {
          console.log(data);
          this.out();
      },
      onPickerSelect: data => {
          console.log(data);
      }
    });
    Picker.show();
  }

  renderMask(){
    if (this.state.maskShow) {
      return (
        <Animated.View style={ styles.mask } >
        </Animated.View>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.maskShow ? <Animated.View style={ styles.mask }></Animated.View> : null
        }
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
            <TouchableOpacity style={[styles.item]} onPress={this._showJobPicker.bind(this)}>
              <Text style={styles.item_label}>意向服务</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12, color:"#B8B8B8"}}>鼻部  面部整形  美甲</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
          </View>

          <View style={styles.block}>
            <TouchableOpacity style={[styles.item]} onPress={this._showSexPicker.bind(this)}>
              <Text style={styles.item_label}>性别</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12}}>{this.state.sex!=''?this.state.sex:'请选择'}</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this._showDatePicker.bind(this)}>
              <Text style={styles.item_label}>出生日期</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12}}>{this.state.birth!=''?this.state.birth:'请选择'}</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this._showAreaPicker.bind(this)}>
              <Text style={styles.item_label}>常住地</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12}}>{this.state.area!=''?this.state.area:'请选择'}</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this._showJobPicker.bind(this)}>
              <Text style={styles.item_label}>行业</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12}}>{this.state.job!=''?this.state.job:'请选择'}</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this._showPosPicker.bind(this)}>
              <Text style={styles.item_label}>当前职位</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12}}>{this.state.pos!=''?this.state.pos:'请选择'}</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={this._showIncomePicker.bind(this)}>
              <Text style={styles.item_label}>家庭年收入</Text>
              <View style={{flex:1,alignItems:'flex-end',paddingRight:8}}>
                <Text style={{fontSize:12}}>{this.state.income!=''?this.state.income:'请选择'}</Text>
              </View>
              <Image source={require('./assets/icon_Get into3.png')} style={{}}/>
            </TouchableOpacity>
          </View>
        </ScrollView>


      </View>
    )
  }

  change(opt){
    this.setState({
      opt:opt
    })
  }

  //显示动画
  in() {
    Animated.parallel([
      Animated.timing(
        this.state.opacity,
        {
          easing: Easing.linear,
          duration: 300,
          toValue: 0.8,
        }
      )
    ]).start();
  }
  //隐藏动画
  out(){
    Animated.parallel([
      Animated.timing(
        this.state.opacity,
        {
          easing: Easing.linear,
          duration: 300,
          toValue: 0,
        }
      )
    ]).start();
    this.timer = setTimeout(
      () => this.setState({maskShow: false}),
      500
    );
  }
}

const {width, height} = Dimensions.get('window');
const [left, top] = [0, 0];
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
  },
  block:{
    backgroundColor:'#fff',
    marginBottom:10
  },
  mask: {
    justifyContent:"center",
    backgroundColor:"#383838",
    opacity:0.8,
    position:"absolute",
    width:width,
    height:height,
    left:left,
    top:top,
    zIndex:100
  },
});
