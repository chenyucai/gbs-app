/**
 * 评价页面
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'

import TopNavComponent from '../common/TopNav';
import CommentItemComponent from '../common/CommentItem'

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="评价"/>

        <ScrollView>
          <View style={styles.item}><CommentItemComponent /></View>
          <View style={styles.item}><CommentItemComponent /></View>
          <View style={styles.item}><CommentItemComponent /></View>
          <View style={styles.item}><CommentItemComponent /></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  item:{
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#B8B8B8',
    paddingVertical: 20
  }
});
