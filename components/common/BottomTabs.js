import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';
import HomeComponent from '../home/Home'
import HomeSaleListComponent from '../home/HomeSaleList';
import ShopcartComponent from '../shopcart/Shopcart';
import ScheduleComponent from '../schedule/Schedule'

export default class BottomTabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    };
  }

  render () {
    return (
      // <View style={styles.wrapper}>
      //   <View style={styles.item}>
      //     <Image style={styles.item_icon} source={require('./image/icon_n_Butterfly.png')}/>
      //     <Text style={styles.item_title}>索菲尔</Text>
      //   </View>
      //   <View style={styles.item}>
      //     <Image style={styles.item_icon} source={require('./image/icon_dis_Cart.png')}/>
      //     <Text style={styles.item_title}>购物车</Text>
      //   </View>
      //   <View style={styles.item_center}>
      //     <Image style={styles.item_center_icon} source={require('./image/icon_Release.png')}/>
      //   </View>
      //   <View style={styles.item}>
      //     <Image style={styles.item_icon} source={require('./image/icon_dis_schedule.png')}/>
      //     <Text style={styles.item_title}>日程安排</Text>
      //   </View>
      //   <View style={styles.item}>
      //     <Image style={styles.item_icon} source={require('./image/icon_dis_personal.png')}/>
      //     <Text style={styles.item_title}>个人中心</Text>
      //   </View>
      // </View>
      <View style={{
        flex:1
      }} >
        <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="索菲尔"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./image/icon_dis_Butterfly.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/icon_n_Butterfly.png")} />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <HomeComponent navigator={this.props.navigator}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'cart'}
                title="购物车"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./image/icon_dis_Cart.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/icon_n_Cart.png")} />}
                onPress={() => this.setState({ selectedTab: 'cart' })}>
                <ShopcartComponent navigator={this.props.navigator}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'release'}
                // title="消息"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./image/icon_Release.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/icon_Release.png")} />}
                onPress={() => this.setState({ selectedTab: 'release' })}>
                <HomeSaleListComponent navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'schedule'}
                title="日程安排"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./image/icon_dis_schedule.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/icon_n_schedule.png")} />}
                onPress={() => this.setState({ selectedTab: 'schedule' })}>
                <ScheduleComponent navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'personal'}
                title="个人中心"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./image/icon_dis_personal.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/icon_n_personal.png")} />}
                onPress={() => this.setState({ selectedTab: 'personal' })}>
                <HomeSaleListComponent navigator={this.props.navigator} />
            </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabText:{
    fontSize: 10,
    color:'#BBBBC1'
  },
  selectedTabText:{
    fontSize:10,
    color:'#FF6D99'
  }
  // wrapper: {
  //   height: 49,
  //   borderTopWidth: 0.5,
  //   borderTopColor: '#D7D7D7',
  //   flexDirection: 'row',
  //   backgroundColor:'#fff'
  // },
  // item:{
  //   flex:1,
  //   backgroundColor:'#fff'
  // },
  // item_icon: {
  //   alignSelf: 'center',
  //   marginTop: 7,
  //   marginBottom: 4
  // },
  // item_title: {
  //   textAlign: 'center',
  //   fontSize: 10
  // },
  // item_center:{
  //   paddingLeft:10,
  //   paddingRight: 10,
  //   backgroundColor:'#fff'
  // },
  // item_center_icon:{
  //   alignSelf: 'center',
  //   marginTop:7
  // }
});
