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
  Dimensions
} from 'react-native'

export default class HomeSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _cancel(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.header_left}>
            <View style={styles.input_wrapper}>
              <Image source={require('./image/icon_search2.png')} style={{
                marginLeft:10, marginRight:10
              }}/>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="输入您心仪的产品试试看"
              />
            </View>
          </View>
          <View style={styles.header_right}>
            <TouchableOpacity onPress={this._cancel.bind(this)}>
              <Text style={styles.cancel}>取消</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.body}>
          <View style={styles.block}>
            <Text style={styles.block_title}>大家都在搜索</Text>
            <View style={styles.block_content}>
              <TouchableHighlight style={styles.item}>
                <Text style={styles.item_text}>美甲</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.block}>
            <Text style={styles.block_title}>最近在搜</Text>
            <View style={styles.block_content}>
              <TouchableHighlight style={styles.item}>
                <Text style={styles.item_text}>美甲</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.item}>
                <Text style={styles.item_text}>美甲</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.item}>
                <Text style={styles.item_text}>美甲</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.clear}>
            <TouchableOpacity style={styles.clear_btn}>
              <Text style={styles.clear_btn_text}>清空搜索记录</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1
  },
  header:{
    height: 64,
    backgroundColor:'#23232E',
    flexDirection:'row',
    paddingTop: 28
  },
  header_left:{
    flex:1,
  },
  header_right:{
    width: 50
  },
  cancel:{
    color:'#fff',
    fontSize:14,
    alignSelf:'center',
    paddingTop:7
  },
  input_wrapper:{
    backgroundColor:'#fff',
    flexDirection:'row',
    height:28,
    marginLeft:12,
    alignItems:'center'
  },
  input:{
    flex:1,
    color:'#B8B8B8',
    fontSize:14,
    height:28
  },
  block:{
    paddingLeft:12,
    marginBottom:10
  },
  block_title:{
    fontSize:10,
    color:'#B8B8B8',
    marginTop: 15
  },
  block_content:{
    flexDirection:'row',
    paddingTop:15
  },
  item:{
    borderWidth: 0.5,
    borderColor: '#656565',
    marginRight:20,
    marginBottom:20
  },
  item_text:{
    fontSize:14,
    color:'#656565',
    paddingHorizontal: 16,
    paddingTop:5,
    paddingBottom:5
  },
  clear: {
    width:Dimensions.get('window').width - 60,
    height: 48,
    borderColor: '#B8B8B8',
    borderWidth: 0.5,
    padding: 2,
    marginTop:30,
    alignSelf:'center'
  },
  clear_btn:{
    backgroundColor:'#FF6D99',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  clear_btn_text: {
    textAlign: 'center',
    color: '#fff'
  },
});
