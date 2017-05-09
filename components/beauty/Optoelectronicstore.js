import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav';
import StoreItemComponent from '../common/StoreItem'
import StoreDetailComponent from './StoreDetail'

export default class OptoelectronicstoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goStoreDetail() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'StoreDetail',
        component: StoreDetailComponent
      });
    }
  }

  static defaultProps = {
    title: '光电门店'
  };

  render () {
    let testData = {
      width: ScreenUtils.scaleSize(170),
      height: ScreenUtils.scaleSize(130)
    }
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title={this.props.title} navigator={this.props.navigator}/>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>距离</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>星级</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>预约数</Text>
            <Image style={styles.header_item_img} source={require('./image/icon_upper.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={styles.store_content}>
            <TouchableOpacity style={styles.storeitem_box} onPress={this._goStoreDetail.bind(this)}>
              <StoreItemComponent {...testData} navigator={this.props.navigator}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeitem_box} onPress={this._goStoreDetail.bind(this)}>
              <StoreItemComponent {...testData} navigator={this.props.navigator}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeitem_box} onPress={this._goStoreDetail.bind(this)}>
              <StoreItemComponent {...testData} navigator={this.props.navigator}/>
            </TouchableOpacity>
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
  store_content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#fff'
  },
  storeitem_box: {
    marginBottom: 10
  }
});
