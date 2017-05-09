/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.type}>
          <Text style={styles.type_text}>产品</Text>
        </View>

        <View style={styles.info_wrapper}>
          <View style={styles.title_wrapper}>
            <Text style={styles.title} numberOfLines={1}>MISS NEFER月星环球港店</Text>
            <Text style={styles.date}>2016.10.20 10:30</Text>
          </View>
          <Text style={styles.content} numberOfLines={2}>
            【紧肤系列】
            <Text style={{color:'#181516',fontWeight:'300'}}>润白颜水光针2ml+伊肤泉无润白颜水光针2ml+伊肤泉无</Text>
          </Text>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btn_text}>查看订单详情</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    paddingVertical: 20,
    flexDirection:'row',
    marginHorizontal: 12,
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5
  },
  type:{
    width: 50,
    height: 20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF6D99',
    marginRight:10
  },
  type_text:{
    fontSize: 12,
    color:'#fff'
  },
  info_wrapper:{
    flex:1
  },
  title_wrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    flex:1,
    fontSize: 12,
    color:'#B8B8B8'
  },
  date:{
    fontSize: 12,
    color:'#B8B8B8'
  },
  content:{
    marginBottom: 20,
    marginTop:10,
    fontSize: 16
  },
  btn:{
    width:90,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#FF6D99',
    borderWidth: 0.5
  },
  btn_text:{
    color:'#181516',
    fontSize: 12,
    color:'#FF6D99'
  }
});
