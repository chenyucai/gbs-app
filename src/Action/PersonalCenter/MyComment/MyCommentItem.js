import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class MyCommentItem extends Component {
  static defaultProps = {

  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{flex:1,fontSize:12,fontWeight:'300'}}>2016.10.31</Text>
            <Image source={require('./assets/icon_Fabulous.png')}/>
            <Text style={{fontSize:12,fontWeight:'300',marginRight:12}}>999+</Text>
          </View>
          <View>
            <Text style={{fontWeight:'300',marginTop:12}} numberOfLines={1}>润白颜水光针2ml + 伊肤泉无菌修复美颜 + 伊肤无菌修... </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    paddingLeft:12,
  },
  box:{
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5,
    paddingVertical:15
  }
});
