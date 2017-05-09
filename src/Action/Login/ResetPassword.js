import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import BaseNavigationBar from './../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
import MyModal from './MyModal/MyModal';

export default class RegComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '123',
        secure: true,
        Mobile : "",
        password : "",
        authCode : "",
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

  resetPassword(){
    let params = {
        Mobile : this.state.Mobile,
        AuthCode : this.state.authCode,
        Password : this.state.password,
    }
    MyModal.ForgetPassword(params,(res) => {
        if(res.Status == 1){
            alert(res.Message);
            this.props.nav.push({
                id : 'Login',
            });
        }else{
            alert(res.Message);
        }
    },(err) => {

    });
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "忘记密码",
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
                <TextInput
                  style={styles.reg_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="请输入验证码"
                  onChangeText = {(text) => {this.setState({authCode : text})}}
                />
              </View>
              <TouchableOpacity style={styles.get_code} onPress={() => {
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
                  placeholder="请重新设置密码"
                  secureTextEntry={this.state.secure}
                  onChangeText = {(text) => {this.setState({password : text})}}
                />
              </View>
              <TouchableOpacity style={styles.display_pwd} onPress={() => {
                this.setState({secure : !this.state.secure});
              }}>
                <Image source={this.state.secure ? require('./image/icon_UNdisplay.png') : require('./image/icon_display.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.reg_footer}>
              <TouchableOpacity onPress={() => {this.resetPassword();}}>
                <Image source={require('./image/btn_dis_Determine.png')}/>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.sp_border}></View>

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
