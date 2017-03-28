import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import HomeComponent from '../home/Home';
import RegComponent from './Register'

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _pressButton(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'HomeComponent',
        component: HomeComponent
      })
    }
  }

  _register(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'register',
        component: RegComponent
      })
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.login_wrapper}>
            <View style={styles.login_item_login_wrapper}>
              <Image source={require('./image/logo.png')} style={styles.login_item_login}/>
            </View>
            <View style={styles.login_item}>
              <View style={styles.login_item_icon_wrapper}>
                <Image source={require('./image/icon_iPhone.png')} style={styles.login_item_icon}/>
              </View>
              <View style={styles.login_item_input_wrapper}>
                <TextInput
                  style={styles.login_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="请输入手机号"
                />
              </View>
            </View>
            <View style={styles.login_item}>
              <View style={styles.login_item_icon_wrapper}>
                <Image source={require('./image/icon_lock.png')} style={styles.login_item_icon}/>
              </View>
              <View style={styles.login_item_input_wrapper}>
                <TextInput
                  style={styles.login_item_input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="请输入密码"
                />
              </View>
              <TouchableOpacity style={styles.display_pwd}>
                <Image source={require('./image/icon_UNdisplay.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.login_operation_wrapper}>

              <TouchableHighlight onPress={this._register.bind(this)}>
                <Text style={styles.login_operation_noaccount}>没有账号？</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._register.bind(this)}>
                <Text style={styles.login_operation_reg}>立即注册</Text>
              </TouchableHighlight>

              <Text style={styles.login_operation_forget}>忘记密码？</Text>
            </View>
            {/* <View style={styles.login_footer}>
              <TouchableOpacity style={styles.login_footer_btn}>
                <Text style={styles.login_footer_btn_text}>登陆</Text>
              </TouchableOpacity>
            </View> */}
            <TouchableOpacity style={styles.login_footer} onPress={this._pressButton.bind(this)}>
              <Image source={require('./image/btn_dis_sign.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.sp_border}></View>

          <View style={styles.source_wrapper}>
            <View style={styles.source_left}><Image source={require('./image/line_left.png')}/></View>
            <View style={styles.source_title}><Text style={{color:'#fff',fontSize:12}}>第三方登陆</Text></View>
            <View style={styles.source_right}><Image source={require('./image/line_right.png')}/></View>
          </View>

          <View style={styles.login_footer_thirdparty_wrapper}>
            <View style={styles.login_footer_thirdparty}>
              <Image source={require('./image/icon_weix.png')}></Image>
            </View>
            <View style={styles.login_footer_thirdparty}>
              <Image source={require('./image/icon_QQ.png')}></Image>
            </View>
            <View style={styles.login_footer_thirdparty}>
              <Image source={require('./image/icon_weibo.png')}></Image>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollview: {
    paddingTop: 50
  },
  login_wrapper: {
    width: ScreenUtils.scaleSize(315),
    height: ScreenUtils.scaleSize(426),
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff'
  },
  login_item_login_wrapper: {
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  login_item_login: {
    marginTop: 35,
    alignSelf: 'center'
  },
  login_item: {
    width: ScreenUtils.scaleSize(255),
    height: ScreenUtils.scaleSize(58),
    paddingTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#B8B8B8'
  },
  login_item_icon_wrapper:{
    width: 30
  },
  login_item_input_wrapper:{
    flex: 1
  },
  login_item_input: {
    marginTop: 3,
    fontSize: 12,
    flex:1,
    padding: 0
  },
  display_pwd: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  login_footer: {
    marginTop: ScreenUtils.scaleSize(84),
    alignSelf: 'center'
    // position: 'absolute',
    // left: 30,
    // bottom: 40,
  },
  login_operation_wrapper: {
    width: ScreenUtils.scaleSize(255),
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  login_operation_noaccount: {
    color: '#B8B8B8',
    fontSize: 12
  },
  login_operation_reg: {
    marginLeft: 5,
    color: '#363334',
    fontSize: 12
  },
  login_operation_forget: {
    position: 'absolute',
    right: 0,
    color: '#B8B8B8',
    fontSize: 12
  },
  // login_footer: {
  //   width: 255,
  //   height: 48,
  //   borderColor: '#B8B8B8',
  //   borderWidth: 0.5,
  //   position: 'absolute',
  //   left: 30,
  //   bottom: 20,
  //   padding: 2
  // },
  // login_footer_btn:{
  //   backgroundColor:'rgb(184,184,184)',
  //   flex: 1,
  // },
  // login_footer_btn_text: {
  //   textAlign: 'center',
  //   color: '#fff',
  //   lineHeight: 42
  // },
  sp_border: {
    backgroundColor: '#65656D',
    width: ScreenUtils.scaleSize(282),
    height: 10,
    alignSelf:'center'
  },
  source_wrapper: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:35,
    marginBottom: 25
  },
  source_title: {
    paddingLeft: 10,
    paddingRight: 10
  },
  login_footer_thirdparty_wrapper: {
    width: ScreenUtils.scaleSize(250),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
});
