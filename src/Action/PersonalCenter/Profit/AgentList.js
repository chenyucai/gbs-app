/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ListView
} from 'react-native'

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AgentListItem from './AgentListItem';

const { width, height } = Dimensions.get('window');

export default class defaultComponent extends Component {
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
        <AgentListItem nav={this.props.nav}/>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <BaseNavigationBar
            data={{
                title: "代理人",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}
        />
        <ScrollableTabView
          tabBarUnderlineStyle={{
            backgroundColor:'#23232E'
          }}
          tabBarBackgroundColor='#23232E'
          tabBarActiveTextColor='#ffffff'
          tabBarInactiveTextColor='#45454E'
          tabBarTextStyle={{fontSize: 14,fontWeight:'400'}}
        >
          <View tabLabel='一级代理人' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            />
          </View>

          <View tabLabel='二级代理人' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            />
          </View>

          <View tabLabel='三级代理人' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            />
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F0EFF5'
  },
});
