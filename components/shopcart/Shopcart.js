/**
 * page 购物车
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import ShopcartItemComponent from '../common/ShopcartItem';
import SubmitOrderComponent from './SubmitOrder'

export default class ShopcartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods:[
        {
          id: 1,
          selected: false
        },
        {
          id: 2,
          selected: true
        },
        {
          id: 3,
          selected: false
        },
      ],
      goods2:[
        {
          id: 1,
          selected: false
        },
        {
          id: 2,
          selected: true
        },
        {
          id: 3,
          selected: false
        },
      ]
    };

    // this._renderProduct = this._renderProduct.bind(this);
  }

  _select(i){
    var goods = this.state.goods;
    goods[i].selected = !goods[i].selected;
    this.setState({goods: goods});
  }

  _select2(i){
    var goods = this.state.goods2;
    goods[i].selected = !goods[i].selected;
    this.setState({goods2: goods});
  }

  _renderProduct(){
    let items = [];
    for (var i = 0; i < this.state.goods.length; i++) {
      items.push(
        <TouchableOpacity style={styles.item} key={i} onPress={this._select.bind(this,i)}>
          <ShopcartItemComponent selected={this.state.goods[i].selected}/>
        </TouchableOpacity>
      )
    }
    return items;
  }

  _renderProduct2(){
    let items = [];
    for (var i = 0; i < this.state.goods2.length; i++) {
      items.push(
        <TouchableOpacity style={styles.item} key={i} onPress={this._select2.bind(this,i)}>
          <ShopcartItemComponent selected={this.state.goods2[i].selected}/>
        </TouchableOpacity>
      )
    }
    return items;
  }

  _buy() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name:'submitOrder',
        component: SubmitOrderComponent
      })
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.header_text}>购物车</Text>
        </View>

        <ScrollView style={{flex:1, paddingTop:10}}>
          <View style={styles.blocks}>
            <View style={styles.block}>
              <View style={styles.block_header}>
                <Text style={styles.block_header_title}>光电产品</Text>
                <Image source={require('../beauty/image/icon_message2.png')}/>
                <Text style={styles.block_header_edit}>编辑</Text>
              </View>
              <View style={styles.block_list}>
                {this._renderProduct()}
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.block_header}>
                <Text style={styles.block_header_title}>微整形产品</Text>
                <Image source={require('../beauty/image/icon_message2.png')}/>
                <Text style={styles.block_header_edit}>编辑</Text>
              </View>
              <View style={styles.block_list}>
                {this._renderProduct2()}
              </View>
            </View>
          </View>

          <View style={styles.buy_wrapper}>
            <Text style={styles.buy_count}>
              合计：
              <Text style={{fontSize: 16, color:'#FF6D99'}}>¥ 998.00</Text>
            </Text>
            <TouchableOpacity style={styles.buy_btn} onPress={this._buy.bind(this)}>
              <Text style={{fontSize:16, color:'#fff'}}>确认购买</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'#F0EFF5',
    flex:1
  },
  header:{
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    height: 43,
    borderBottomWidth: 0.5,
    borderColor:'#d7d7d7'
  },
  header_text:{
    fontSize: 18,
    fontWeight:'400'
  },
  block:{
    backgroundColor:'#fff',
    marginBottom:10
  },
  block_header:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d7d7d7'
  },
  block_header_title:{
    fontSize: 14,
    flex:1
  },
  block_header_edit:{
    fontSize: 14,
    color:'#FF5D94',
    marginLeft:6
  },
  item:{
    marginLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d7d7d7'
  },
  buy_wrapper:{
    backgroundColor:'#fff',
    flexDirection:'row',
    height: 50,
    marginTop: 10,
    marginBottom: 20
  },
  buy_count:{
    flex:1,
    fontSize: 14,
    alignSelf:'center',
    paddingLeft: 12
  },
  buy_btn:{
    width: 124,
    backgroundColor:'#FF6D99',
    alignItems:'center',
    justifyContent:'center'
  }
});
