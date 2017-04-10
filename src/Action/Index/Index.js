import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';
import HomeComponent from '../Home/Home'
import HomeSaleListComponent from '../../../components/home/HomeSaleList';
import ShopcartComponent from '../ShopCart/ShopCart';
import ScheduleComponent from '../Schedule/Schedule'
import PersoncenterComponent from '../PersonalCenter/PersonalCenter/PersonalCenter'

import BaseBack from '../../Utils/BaseBack/BaseBack';

export default class BottomTabsComponent extends Component {
  constructor(props) {
    super(props);
    BaseBack.HardwareExit();
    this.state = {
      selectedTab:'home'
    };
  }

  render () {
    return (
      <View style={{
        flex:1
      }} >
        <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="索菲尔"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./assets/icon_dis_Butterfly.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./assets/icon_n_Butterfly.png")} />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <HomeComponent nav={this.props.nav}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'cart'}
                title="购物车"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./assets/icon_dis_Cart.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./assets/icon_n_Cart.png")} />}
                onPress={() => this.setState({ selectedTab: 'cart' })}>
                <ShopcartComponent nav={this.props.nav}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'release'}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./assets/icon_Release.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./assets/icon_Release.png")} />}
                // onPress={() => this.setState({ selectedTab: 'release' })}
                >
                <HomeSaleListComponent nav={this.props.nav} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'schedule'}
                title="日程安排"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./assets/icon_dis_schedule.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./assets/icon_n_schedule.png")} />}
                onPress={() => this.setState({ selectedTab: 'schedule' })}>
                <ScheduleComponent nav={this.props.nav} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'personal'}
                title="个人中心"
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={require("./assets/icon_dis_personal.png")} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={require("./assets/icon_n_personal.png")} />}
                onPress={() => this.setState({ selectedTab: 'personal' })}>
                <PersoncenterComponent nav={this.props.nav} />
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
});
