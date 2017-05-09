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

import MyCommentItem from './MyCommentItem';

export default class MyComment extends Component {
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

  renderRow(rowData){
    return (
      <View style={styles.item}>
        <MyCommentItem nav={this.props.nav}/>
      </View>
    )
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "我的评论",
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
});
