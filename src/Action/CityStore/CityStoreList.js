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

import BaseNavigationBar from '../../BaseView/BaseNavigationBar/BaseNavigationBar';
import StoreItemComponent from '../../BaseView/StoreListItem/StoreItem';

export default class CityStoreList extends Component {
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
        <StoreItemComponent {...ProductItemInfo} nav={this.props.nav}/>
      </View>
    )
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "同城门店",
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
    marginBottom:10
  },
});
