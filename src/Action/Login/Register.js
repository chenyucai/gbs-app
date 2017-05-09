import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import BaseNavigationBar from './../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
import MyModal from './MyModal/MyModal';
import RadioModal from 'react-native-radio-master';


export default class RegComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '123',
        Mobile : "",
        authCode: "",
        userName: "",
        password: "",
        InviteCode : "",
        source : "",
        secure : true,
        selected1 : false,
        selected2 : false,
        selected3 : false,
        selected4 : false,
        selected5 : false,
        radio : 0,
    };
  }

  getAuthCode(){
    if(this.state.Mobile !== ""){
        let params = {
            Mobile : this.state.Mobile,
        };

        MyModal.GetAuthCode(params,(res) => {
          alert(res.AuthCode);
            this.setState({
                authCode : content,
            });
        },(err) => {

        })
    }else{
      alert("请输入手机号码！");
    }
  }


  register(){
    let must = [this.state.name,this.state.Mobile,this.state.authCode,this.state.Password,this.state.Source];
    let mustText = ["用户名","手机号","验证码","密码","来源"];
    let params = {
        name : this.state.userName,
        Mobile : this.state.Mobile,
        Password : this.state.password,
        Source : this.state.source,
        InviteCode : this.state.InviteCode,
        AuthCode:this.state.authCode
    };
    for(let i = 0;i < must.length;i++){
        if(must[i] == ""){
            alert(mustText[i] + "不能为空...")
        }
    }

    MyModal.Register(params,(res) => {
        //alert(JSON.stringify(res));
        if(res.Status == 1){
            this.props.nav.push({
                id : "Login"
            });
        }
    },(err) => {

    });
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "注册",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <ScrollView>
          <View style={styles.reg_wrapper}>
            <View style={styles.reg_item}>
              <View style={styles.reg_item_icon_wrapper}>
                <Image source={require('./image/icon_name.png')} style={styles.reg_item_icon}/>
              </View>
              <View style={styles.reg_item_input_wrapper}>
                <TextInput
                  style={styles.reg_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="输入名称，开启美丽之旅"
                  onChangeText={(text) => {this.setState({
                      userName : text,
                  })}}
                />
              </View>
            </View>
            <View style={styles.reg_item}>
              <View style={styles.reg_item_icon_wrapper}>
                <Image source={require('./image/icon_iPhone.png')} style={styles.reg_item_icon}/>
              </View>
              <View style={styles.reg_item_input_wrapper}>
                <TextInput
                  style={styles.reg_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="请输入手机号"
                  onChangeText = {(text) => {this.setState({Mobile : text})}}
                />
              </View>
            </View>
            <View style={styles.reg_item}>
              <View style={styles.reg_item_icon_wrapper}>
                <Image source={require('./image/icon_Code.png')} style={styles.reg_item_icon}/>
              </View>
              <View style={styles.reg_item_input_wrapper}>
                <TextInput ref="myInput"
                  style={styles.reg_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="请输入验证码"
                  onChangeText = {(text) => {this.setState({
                      authCode : text,
                  })}}
                  value= {this.state.authCode}
                />

              </View>
              <TouchableOpacity style={styles.get_code}
                                onPress={() => {
                  this.getAuthCode();
              }} >
                <Text style={styles.get_code_text}>获取验证码</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.reg_item}>
              <View style={styles.reg_item_icon_wrapper}>
                <Image source={require('./image/icon_lock.png')} style={styles.reg_item_icon}/>
              </View>
              <View style={styles.reg_item_input_wrapper}>
                <TextInput
                  style={styles.reg_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="请输入密码"
                  onChangeText = {(text) => {this.setState({
                      password : text,
                  })}}
                  secureTextEntry={this.state.secure}
                />
              </View>
              <TouchableOpacity style={styles.display_pwd}
                                onPress={
                                    () => {this.setState({secure : !this.state.secure})}
                                }>
                <Image source={this.state.secure ? require('./image/icon_UNdisplay.png') : require('./image/icon_display.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 15,width: ScreenUtils.scaleSize(255),alignSelf: 'center',marginLeft: 10}}>
              <Text style={{color: '#B8B8B8',fontSize: 12}}>我已阅读，并同意<Text style={{color: '#363334',fontSize: 12}}>《用户注册协议》</Text></Text>
            </View>
            {/* <View style={styles.reg_footer}>
              <TouchableOpacity style={styles.reg_footer_btn}>
                <Text style={styles.reg_footer_btn_text}>确定</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.reg_footer}>
              <TouchableOpacity onPress={() => {
                this.register();
              }}>
                <Image source={require('./image/btn_dis_sign.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sp_border}></View>

          <View style={styles.source_wrapper}>
            <View style={styles.source_left}><Image source={require('./image/line_left.png')}/></View>
            <View style={styles.source_title}><Text style={{color:'#fff',fontSize:12}}>注册来源</Text></View>
            <View style={styles.source_right}><Image source={require('./image/line_right.png')}/></View>
          </View>

          <ScrollView style={styles.s_wrapper} horizontal>
              <TouchableOpacity onPress={() => {this.setState({source : "1",selected1 : !this.state.selected1,radio : 1})}}>
                <View style={[styles.s_item,{backgroundColor:this.state.selected1 && this.state.radio == 1 ? "#FC6F99" : "#FFF"}]}>
                  <Text style={[styles.s_item_text,{color:this.state.selected1 && this.state.radio == 1 ? "#FFF" : "#333"}]}>朋友</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.setState({source : "2",selected2 : !this.state.selected2,radio : 2})}}>
                <View style={[styles.s_item,{backgroundColor:this.state.selected2 && this.state.radio == 2 ? "#FC6F99" : "#FFF"}]}>
                  <Text style={[styles.s_item_text,{color:this.state.selected2 && this.state.radio == 2 ? "#FFF" : "#333"}]}>门店</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.setState({source : "3",selected3 : !this.state.selected3,radio : 3})}}>
                <View style={[styles.s_item,{backgroundColor:this.state.selected3 && this.state.radio == 3 ? "#FC6F99" : "#FFF"}]}>
                  <Text style={[styles.s_item_text,{color:this.state.selected3 && this.state.radio == 3 ? "#FFF" : "#333"}]}>网络</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.setState({source : "4",selected4 : !this.state.selected4,radio : 4})}}>
                <View style={[styles.s_item,{backgroundColor:this.state.selected4 && this.state.radio == 4 ? "#FC6F99" : "#FFF"}]}>
                  <Text style={[styles.s_item_text,{color:this.state.selected4 && this.state.radio == 4 ? "#FFF" : "#333"}]}>活动</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.setState({source : "5",selected5 : !this.state.selected5,radio : 5})}}>
                <View style={[styles.s_item,{backgroundColor:this.state.selected5 && this.state.radio == 5 ? "#FC6F99" : "#FFF"}]}>
                  <Text style={[styles.s_item_text,{color:this.state.selected5 && this.state.radio == 5 ? "#FFF" : "#333"}]}>其他</Text>
                </View>
              </TouchableOpacity>
          </ScrollView>

          <View style={styles.invite_wrapper}>
            <TextInput style={styles.invite_input}
              placeholder="点击输入邀请码"
              placeholderTextColor="#fff"
              onChangeText = {(text) => {this.setState({InviteCode : text})}}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#23232e',
    flex: 1,
  },
  text: {
    color: '#fff'
  },
  reg_wrapper: {
    width: 315,
    height: 406,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop:20,
    paddingTop: 20,
  },
  reg_item: {
    width: ScreenUtils.scaleSize(255),
    height: ScreenUtils.scaleSize(58),
    paddingTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#B8B8B8'
  },
  reg_item_icon_wrapper:{
    width: 30
  },
  reg_item_input_wrapper:{
    flex: 1
  },
  reg_item_input: {
    width: ScreenUtils.scaleSize(255),
    height:40,
    marginTop: 3,
    fontSize: 12,
    // flex:1,
    padding: 0
  },
  get_code: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    width: 70,
    height: 26,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center'
  },
  get_code_text: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 9
  },
  display_pwd: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  reg_footer: {
    position: 'absolute',
    left: 30,
    bottom: 20,
  },
  // reg_footer: {
  //   width: 255,
  //   height: 48,
  //   borderColor: '#B8B8B8',
  //   borderWidth: 0.5,
  //   position: 'absolute',
  //   left: 30,
  //   bottom: 20,
  //   padding: 2
  // },
  // reg_footer_btn:{
  //   backgroundColor:'rgb(184,184,184)',
  //   flex: 1,
  // },
  // reg_footer_btn_text: {
  //   textAlign: 'center',
  //   color: '#fff',
  //   lineHeight: 42
  // },
  sp_border:{
    backgroundColor: '#65656D',
    width: ScreenUtils.scaleSize(282),
    height: 10,
    alignSelf:'center'
  },
  source_wrapper: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:25,
    marginBottom: 25
  },
  source_left: {
    // flex: 1
  },
  source_title: {
    // flex: 1
    paddingLeft: 10,
    paddingRight: 10
  },
  source_right: {
    // flex: 1
  },
  s_wrapper: {
    marginLeft: 30,
    marginBottom: 40
  },
  s_item:{
    width: 65,
    height:25,
    backgroundColor:'#fff',
    marginRight: 12
  },
  s_item_text: {
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 12
  },
  invite_wrapper: {
    width: ScreenUtils.scaleSize(315),
    alignSelf:'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom:10,
    marginBottom:20
  },
  invite_input: {
    flex: 1,
    alignSelf: 'center',
    width:90,
    color: '#fff',
    height:20,
    fontSize: 12
  }
});
