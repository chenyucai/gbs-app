/**
 * 网上社区
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native'

import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from './../../BaseView/BaseNavigationBar/BaseNavigationBar';

import ButtonComponent from '../../BaseView/Button/Button';

export default class CommunityComponent extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "86天6个疗程",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <ScrollView style={{flex:1}}>
          <View style={{
            backgroundColor:'#fff'
          }}>
            <View style={styles.title_box}>
              <TextInput
                style={styles.title}
                placeholder="日记标题"
                placeholderTextColor="#D7D7D7"
                multiline={true}
                // numberOfLines={1}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.content_box}>
              <TextInput
                style={styles.content}
                placeholder="详细写下体验经历，传播给更多的光博士用户"
                placeholderTextColor="#D7D7D7"
                underlineColorAndroid="transparent"
                multiline={true}
              />
            </View>
            <View style={styles.images_box}>
              <View style={styles.images_header}>
                <Text style={{fontSize:12, color:'#656565'}}>可点击上传图片，一共可以上传9张</Text>
              </View>
              <View style={styles.images_body}>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
              </View>
            </View>
          </View>

          <View style={{
            marginHorizontal: 12,
            marginTop:50,
            marginBottom:30
          }}>
            <ButtonComponent />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  title_box:{
    height:50,
    backgroundColor:'#f2f2f2',
    marginHorizontal:12,
    marginTop:12,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    height:50,
    justifyContent:'center',
    paddingTop:12,
    fontSize:14,
    paddingLeft: 10,
    flex:1,
    width:Dimensions.get('window').width - 12*3
  },
  content_box:{
    height:164,
    backgroundColor:'#f2f2f2',
    marginHorizontal:12,
    marginTop:12,
    marginBottom:10,
  },
  content:{
    height:164,
    paddingTop:12,
    fontSize:14,
    paddingLeft: 10,
    width:Dimensions.get('window').width - 12*3
  },
  images_box:{
    marginVertical: 18
  },
  images_header:{
    marginHorizontal: 12,
    marginBottom:18
  },
  images_body:{
    paddingLeft:12,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  images_item:{
    width:80,
    height:80,
    marginRight:10,
    marginBottom:10
  }
});
