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

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav';
import ButtonComponent from '../common/Button';

export default class CommunityComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderRow(rowData){
    return (
      <View style={styles.item}>
        <CommunityItemComponent navigator={this.props.navigator}/>
      </View>
    )
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="86天6个疗程" navigator={this.props.navigator}/>
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
                numberOfLines={1}
              />
            </View>
            <View style={styles.content_box}>
              <TextInput
                style={styles.content}
                placeholder="详细写下体验经历，传播给更多的光博士用户"
                placeholderTextColor="#D7D7D7"
                multiline={true}
              />
            </View>
            <View style={styles.images_box}>
              <View style={styles.images_header}>
                <Text style={{fontSize:12, color:'#656565'}}>可点击上传图片，一共可以上传9张</Text>
              </View>
              <View style={styles.images_body}>
                <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
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
    paddingLeft: 10
  },
  content_box:{
    height:164,
    backgroundColor:'#f2f2f2',
    marginHorizontal:12,
    marginTop:12,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'
  },
  content:{
    height:164,
    justifyContent:'center',
    paddingTop:12,
    fontSize:14,
    paddingLeft: 10
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
