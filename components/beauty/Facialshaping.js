import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import ModalDropdown from 'react-native-modal-dropdown';

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav'
import ProductItemComponent from '../common/ProductItem';

export default class FacialshapingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _back(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render () {
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height: ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        {/* <TopNavComponent title={this.props.title} navigator={this.props.navigator}/> */}

        <TouchableOpacity style={styles.back} onPress={this._back.bind(this)}>
          <Image source={require('../common/image/icon_Return.png')} />
        </TouchableOpacity>

        <ModalDropdown
          options={['全部', '面部塑形', '皮肤管理', '身体塑形']}
          defaultIndex={1}
          defaultValue="面部塑形"
          style={{
            height:44,
            backgroundColor: '#23232E',
            justifyContent: 'center',
          }}
          textStyle={{
            fontSize: 18,
            color: '#fff',
            textAlign:'center'
          }}
          dropdownStyle={{
            width:Dimensions.get('window').width,
            height:47*4
          }}
          renderRow={(option) => {
            return <View style={{
              height:47,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#23232E',
            }}>
              <Text style={{
                color:'#fff',
                fontSize:16
              }}>{option}</Text>
            </View>
          }}
        >

        </ModalDropdown>

        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>分类</Text>
            <Image style={styles.header_item_img} source={require('./image/icon_drop-down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>价格</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>购买数</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={styles.hot_body}>
            <View style={styles.hot_item}>
              <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
            </View>
            <View style={styles.hot_item}>
              <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
            </View>
            <View style={styles.hot_item}>
              <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
            </View>
            <View style={styles.hot_item}>
              <ProductItemComponent {...ProductItemInfo} navigator={this.props.navigator}/>
            </View>
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
  header: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff'
  },
  header_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  header_item_text: {
    fontSize: 14,
    color: '#363334',
    marginRight: 5
  },
  hot_body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  hot_item: {
    marginBottom: 10
  },
  back: {
    position: 'absolute',
    left: 10,
    top:12,
    zIndex:10
  },
});
