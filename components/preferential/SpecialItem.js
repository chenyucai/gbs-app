import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';
import ProductDetailComponent from '../beauty/ProductDetail'

export default class SpecialItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goProductDetail(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'productDetail',
        component: ProductDetailComponent
      });
    }
  }

  render () {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this._goProductDetail.bind(this)}>
        <Image style={styles.item_img} source={require('../../img/888.png')}/>
        <View style={styles.item_right_box}>
          <Text style={styles.item_right_top}>
            <Text style={styles.item_right_topL}>【紧肤系列】
              <Text style={styles.item_right_topR}>润白颜水光针+伊肤泉无菌修复美颜</Text>
            </Text>
          </Text>
          <View style={styles.price_box}>
            <Text style={styles.price_new}>¥998</Text>
            <Text style={styles.price_old}>¥3599.00</Text>
            <Text style={styles.purchased}>已购买1234</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  item_img: {
    width: ScreenUtils.scaleSize(130),
    height: ScreenUtils.scaleSize(114)
  },
  item_right_box: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  item_right_top: {
    flexDirection: 'row',
    flex: 1,
    lineHeight: 22
  },
  price_box: {
    flexDirection: 'row',
    marginTop: 14,
    alignItems: 'flex-end'
  },
  price_new: {
    fontSize: 16,
    color: '#FF6D99'
  },
  price_old: {
    fontSize: 11,
    color: '#C9C6C6',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    flex: 1
  },
  purchased: {
    fontSize: 12,
    color: '#363334'
  },
  item_right_topL: {
    fontSize: 14,
    color: '#363334'
  },
  item_right_topR: {
    fontSize: 14,
    color: '#363334'
  }
});
