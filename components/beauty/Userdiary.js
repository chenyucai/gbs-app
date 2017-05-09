import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import TopNavComponent from '../common/TopNav'
import DiaryItemComponent from './DiaryItem'

export default class UserdiaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="用户日记" navigator={this.props.navigator}/>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>分类</Text>
            <Image style={styles.header_item_img} source={require('./image/icon_drop-down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>浏览量</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>点赞量</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>评论量</Text>
            <Image style={styles.header_item_img} source={require('../home/image/icon_down.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
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
});
