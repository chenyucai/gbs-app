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
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';

import DiaryListItem from '../../../BaseView/DiaryListItem/DiaryListItem';

export default class MyDiary extends Component {
  static defaultProps = {

  }
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
      ])
    };
  }

  renderRow(rowData, sectionID, rowID, highlightRow){
    if (rowID == 0) {
      return (
        <TouchableOpacity style={{
          backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
          width: ScreenUtils.scaleSize(170),
          height: ScreenUtils.scaleSize(220)
        }} onPress={() => {
          this.props.nav.push({id: 'PublishDiary'})
        }}>
          <Image source={require('./assets/icon_add.png')}/>
          <Text style={{fontSize:14,color:'#b8b8b8',marginTop:10}}>新建日记本</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.item}>
          <DiaryListItem nav={this.props.nav}/>
        </View>
      )
    }

  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "我的日记本",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
        }}/>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={{flex:1}}
          contentContainerStyle={styles.list}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  item:{
    marginBottom:10
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
  }
});
