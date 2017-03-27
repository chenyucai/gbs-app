import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'

import TopNavComponent from '../common/TopNav';
import StoreItemComponent from '../common/StoreItem'

export default class OptoelectronicstoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="光电门店" navigator={this.props.navigator}/>
        <View style={styles.store_header}>
          <View style={styles.store_header_item}>
            <Text style={styles.store_header_item_text}>距离</Text>
            <Image style={styles.store_header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.store_header_item}>
            <Text style={styles.store_header_item_text}>星级</Text>
            <Image style={styles.store_header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.store_header_item}>
            <Text style={styles.store_header_item_text}>预约数</Text>
            <Image style={styles.store_header_item_img} source={require('./image/icon_upper.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={styles.store_content}>
            <View style={styles.storeitem_box}>
              <StoreItemComponent />
            </View>
            <View style={styles.storeitem_box}>
              <StoreItemComponent />
            </View>
            <View style={styles.storeitem_box}>
              <StoreItemComponent />
            </View>
            <View style={styles.storeitem_box}>
              <StoreItemComponent />
            </View>
            <View style={styles.storeitem_box}>
              <StoreItemComponent />
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
    height: Dimensions.get('window').height
  },
  store_header: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff'
  },
  store_header_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  store_header_item_text: {
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
