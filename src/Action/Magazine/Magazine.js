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

import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from './../../BaseView/BaseNavigationBar/BaseNavigationBar';
import MagazineItemComponent from './MagazineItem';

export default class MagazineComponent extends Component {
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
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(130)
    }
    return (
      <View style={styles.item}>
        <MagazineItemComponent nav={this.props.nav}/>
      </View>
    )
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "日记本",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <View style={styles.tabs}>
          <Text style={styles.tab}>行业资讯</Text>
          <Text style={styles.tab}>学堂中心</Text>
          <Text style={styles.tab}>公司信息</Text>
        </View>
        <View style={styles.tabs_second}>
          <Text style={styles.tab_second}>公司新闻</Text>
          <Text style={styles.tab_second}>公司介绍</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={{flex:1,paddingTop:10}}
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
  item:{
    marginBottom:10,
    paddingHorizontal:12
  },
});
