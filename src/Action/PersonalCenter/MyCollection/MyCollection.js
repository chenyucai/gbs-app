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
import ProductListItem from '../../../BaseView/ProductListItem/ProductItem';
import StoreListItem from '../../../BaseView/StoreListItem/StoreItem';
import DiaryListItem from '../../../BaseView/DiaryListItem/DiaryListItem';
import Grid from './Grid';

const { width, height } = Dimensions.get('window');

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {id:1,name:'12312'},
        {id:1,name:'12312'},
        {id:1,name:'12312'},
        {id:1,name:'12312'},
        {id:1,name:'12312'},
      ])
    };
  }

  renderProductRow(rowData){
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(180)
    }
    return (
      <View style={{marginBottom:10}}>
        <ProductListItem nav={this.props.nav} {...ProductItemInfo}/>
      </View>
    )
  }

  renderStoreRow(rowData){
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(180)
    }
    return (
      <View style={{marginBottom:10}}>
        <StoreListItem nav={this.props.nav} {...ProductItemInfo}/>
      </View>
    )
  }

  renderDiaryRow(rowData){
    return (
      <View style={{marginBottom:10}}>
        <DiaryListItem nav={this.props.nav}/>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <BaseNavigationBar
            data={{
                title: "我的收藏",
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
          <View tabLabel='单品(12)' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderProductRow.bind(this)}
              style={{flex:1}}
              contentContainerStyle={styles.list}
            />
          </View>

          <View tabLabel='门店(3)' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderStoreRow.bind(this)}
              style={{flex:1}}
              contentContainerStyle={styles.list}
            />
          </View>

          <View tabLabel='日记(3)' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderDiaryRow.bind(this)}
              style={{flex:1}}
              contentContainerStyle={styles.list}
            />
          </View>

          <View tabLabel='其他' style={{flex:1}}>
            <Grid nav={this.props.nav}/>
            {/* <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            /> */}
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
