/**
 * page 日程安排
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

import TopNavComponent from '../common/TopNav';
import CalendarComponent from '../common/Calendar';
import ScheduleItemComponent from './ScheduleItem';

export default class ScheduleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="行程" navigator={this.props.navigator}/>

        <View style={styles.header}>
          <View style={styles.header_item}>
            <View style={[styles.header_item_icon, {borderColor:'#B8B8B8',borderWidth:1}]}></View>
            <Text style={styles.header_item_text}>已过期预约</Text>
          </View>
          <View style={styles.header_item}>
            <View style={[styles.header_item_icon, {backgroundColor: '#B8B8B8'}]}></View>
            <Text style={styles.header_item_text}>今日</Text>
          </View>
          <View style={styles.header_item}>
            <View style={[styles.header_item_icon, {backgroundColor:'#FF6D99'}]}></View>
            <Text style={styles.header_item_text}>查看预约</Text>
          </View>
          <View style={styles.header_item}>
            <View style={[styles.header_item_icon, {backgroundColor:'#D9BD8C'}]}></View>
            <Text style={styles.header_item_text}>未过期预约</Text>
          </View>
        </View>

        <ScrollView style={{flex: 1}}>
          <CalendarComponent />

          <View style={styles.detail_wrapper}>
            <View style={styles.detail_header}>
              <Text style={styles.detail_title}>已预约（2）</Text>
            </View>
            <View style={styles.detail_body}>
              <View style={styles.detail_item}>
                <ScheduleItemComponent />
              </View>
              <View style={styles.detail_item}>
                <ScheduleItemComponent />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'#F0EFF5'
  },
  header:{
    height: 40,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#23232E'
  },
  header_item:{
    flexDirection:"row",
    alignItems:'center'
  },
  header_item_icon:{
    width: 10,
    height:10,
    borderRadius: 5,
    marginRight:5
  },
  header_item_text:{
    fontSize: 12,
    color:'#fff'
  },
  detail_wrapper:{
    marginTop: 10,
    marginBottom:10
  },
  detail_header:{
    height: 40,
    paddingLeft: 12,
    justifyContent:'center',
    backgroundColor:'#fff',
    borderBottomColor:'#d7d7d7',
    borderBottomWidth: 0.5
  },
  detail_title:{
    fontSize: 14
  },
  detail_item:{
    backgroundColor:'#fff'
  }
});
