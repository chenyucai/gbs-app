/**
 * page 关注该产品对用户
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav';
import UserListItemComponent from '../common/UserListItem';

export default class ProductFocusUsersComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: ds.cloneWithRowsAndSections({
        'section1': ['1','2','3','4'],
        'section2': ['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2']
      })
    };
  }

  _renderSectionHeader(data, sectionID) {
    if (sectionID === 'section1') {
      return (
        <View style={styles.section}>
          <Text style={styles.section_title}>发现你的好友</Text>
        </View>
      );
    }
    if (sectionID === 'section2') {
      return (
        <View style={styles.section}>
          <Text style={styles.section_title}>其他用户</Text>
        </View>
      );
    }
  }

  _renderRow(rowData, sectionID, rowID){
    if (sectionID === 'section1') {
      return (
        <View style={styles.item}>
          <UserListItemComponent navigator={this.props.navigator} btnType="nor"/>
        </View>
      )
    }
    if (sectionID === 'section2') {
      return (
        <View style={styles.item}>
          <UserListItemComponent navigator={this.props.navigator} btnType="dis"/>
        </View>
      )
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavComponent title="关注该产品对用户" navigator={this.props.navigator}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          // contentContainerStyle={styles.list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1
  },
  section:{
    height:30,
    backgroundColor:'#F0EFF5',
    paddingLeft:12,
    justifyContent:'center'
  },
  section_title:{
    fontSize:10,
    color:'#656565'
  },
  item:{
    borderBottomWidth:0.5,
    borderColor:'#d7d7d7',
    paddingRight: 12,
    marginLeft: 12,
    backgroundColor:'#fff'
  },
});
