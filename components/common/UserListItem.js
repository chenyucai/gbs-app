/**
 * component 用户列表子项
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

export default class UserListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  static defaultProps = {
    btnType:'nor' // 已关注:nor, 未关注:dis
  }

  render () {
    let renderBtn = this.props.btnType == 'nor'
      ?
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>已关注</Text>
        </TouchableOpacity>
      :
        <TouchableOpacity style={styles.dis_btn}>
          <Text style={styles.dis_btn_text}>＋关注</Text>
        </TouchableOpacity>;

    return (
      <View style={styles.wrapper}>
        <Image source={require('../home/image/C29105FA-A819-40D0-831E-C7AB324AB618.png')} style={styles.icon}/>
        <View style={styles.info}>
          <View style={styles.name_wrapper}>
            <Text style={styles.name} numberOfLines={1}>忆巴黎</Text>
            <Image source={require('../beauty/image/icon_Grade2.png')}/>
          </View>
          <Text style={styles.desc} numberOfLines={1}>嫩肤系列   皮肤管理   净肤系列</Text>
        </View>
        {renderBtn}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 15
  },
  icon:{
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  info:{
    flex:1
  },
  name_wrapper:{
    flexDirection:'row',
  },
  name:{
    fontSize: 14,
    marginRight:3,
    marginBottom: 8
  },
  desc:{
    fontSize: 12,
    color:'#B8B8B8'
  },
  btn:{
    backgroundColor:'#FF6D99',
    width:70,
    height:30,
    alignItems:'center',
    justifyContent:'center'
  },
  btn_text:{
    color:'#fff',
    fontSize: 14
  },
  dis_btn:{
    width:70,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#FF6D99',
    borderWidth:0.5,
  },
  dis_btn_text:{
    color:'#FF6D99',
    fontSize: 14
  }
});
