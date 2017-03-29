import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav'
import ProductItemComponent from '../common/ProductItem';

export default class FacialshapingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height: ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="面部塑形" navigator={this.props.navigator}/>
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
});
