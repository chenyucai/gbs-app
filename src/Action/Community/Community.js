/**
 * 网上社区
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
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../BaseView/BaseNavigationBar/BaseNavigationBar';

import CommunityItemComponent from './CommunityItem';
import PublishComponent from './PublishDiary'

export default class CommunityComponent extends Component {
  static defaultProps = {
    title: '推荐商家'
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
        // {
        //   id:1,
        //   name:'12312'
        // }
      ])
    };
  }

  renderRow(rowData){
    return (
      <View style={styles.item}>
        <CommunityItemComponent nav={this.props.nav}/>
      </View>
    )
  }

  _goPublish(){
    const nav = this.props.nav;
    if (nav) {
      nav.push({
        id:'PublishDiary'
      })
    }
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "网上社区",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        {/* <View style={styles.tabs}>
          <Text style={styles.tab}>达人活动</Text>
          <Text style={styles.tab}>社区话题</Text>
        </View> */}


        <ScrollableTabView
          tabBarUnderlineStyle={{
            backgroundColor:'#23232E'
          }}
          tabBarBackgroundColor='#23232E'
          tabBarActiveTextColor='#ffffff'
          tabBarInactiveTextColor='#45454E'
          tabBarTextStyle={{fontSize: 14,fontWeight:'400'}}
        >
          <View tabLabel='达人活动' style={{flex:1}}>
            <View style={styles.sec_tabs}>
              <View style={styles.sec_tab}>
                <Text style={styles.sec_tab_title}>浏览量</Text>
                <Image source={require('./assets/icon_down.png')}/>
              </View>
              <View style={styles.sec_tab}>
                <Text style={styles.sec_tab_title}>参与量</Text>
                <Image source={require('./assets/icon_down.png')}/>
              </View>
              <View style={styles.sec_tab}>
                <Text style={styles.sec_tab_title}>最新</Text>
                <Image source={require('./assets/icon_down.png')}/>
              </View>
            </View>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            />

            <TouchableOpacity onPress={this._goPublish.bind(this)} style={{
              width:50,
              height:50,
              position:'absolute',
              bottom:35,
              right:20,
              zIndex: 1000,
              backgroundColor:'#FF6D99',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:50
            }}>
              <Text style={{
                fontSize:30,
                color:'#fff'
              }}>＋</Text>
            </TouchableOpacity>
          </View>

          <Text tabLabel='社区话题'>favorite</Text>
        </ScrollableTabView>

        {/* <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={{flex:1}}
        /> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  tabs:{
    height:55,
    backgroundColor:'#23232E',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  tab:{
    fontSize:14,
    color:'#fff',
    textAlign:'center'
  },
  tabs_second:{
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  tab_second:{
    fontSize:14,
    textAlign:'center'
  },
  sec_tabs:{
    height:40,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5
  },
  sec_tab:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  sec_tab_title:{
    fontSize:14,
    marginRight:5
  },
  item:{
    marginBottom:10,
  },
});
