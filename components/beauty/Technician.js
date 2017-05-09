/**
 * page 技师
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
import TechnicianItemComponent from '../common/TechnicianItem';

export default class TechnicianListComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id:1,
          name:'12312'
        },
        {
          id:1,
          name:'12312'
        },
        {
          id:1,
          name:'12312'
        },
        // {
        //   id:1,
        //   name:'12312'
        // }
      ])
    };
  }

  renderRow(rowData){
    let itemInfo = {
      width: ScreenUtils.scaleSize(142),
      height:ScreenUtils.scaleSize(142)
    }
    return (
      <View style={styles.item}>
        <TechnicianItemComponent {...itemInfo}/>
      </View>
    )
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <TopNavComponent title={this.props.title} navigator={this.props.navigator}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          contentContainerStyle={styles.list}
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
  list:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:12,
    paddingRight:12,
    paddingTop:5,
    paddingBottom:5,
  },
  item:{
    marginBottom:10,
    paddingHorizontal:12,
    paddingVertical: 12
  },
});
