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

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import MyModal from '../../PersonalCenter/MyModal/MyModal';
import DiaryItemComponent from './DiaryItem';
import ButtonComponent from '../../../BaseView/Button/Button';

export default class DiaryListComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: 1,
          name: '12312'
        },
        {
          id: 1,
          name: '12312'
        },
        {
          id: 1,
          name: '12312'
        },
        // {
        //   id:1,
        //   name:'12312'
        // }
      ])
    };
  }
  renderRow(rowData) {
    return (
      <View style={styles.item}>
        <DiaryItemComponent nav={this.props.nav} />
      </View>
    )
  }
  componentDidMount() {
    this.GetHomeDiscountedGoodsList();

  }
  /**
    * 获取日记列表
    */
  GetHomeDiscountedGoodsList() {
    var params = {
      page: 1,
      rows: 10,
      sidx: 'CreatorTime',
      sord: 'asc',
      type: 1,
      userId: '5dcb9236-6394-465a-9f69-aa669cfa6745'
    };
    MyModal.GetDiaryList(params, (res) => {
      alert(JSON.stringify(res))
      this.setState({
        dataSource: this.ds.cloneWithRows(res),
      })
    });
  }
  render() {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
          data={{
            title: "日记本",
            leftbtn: {
              type: BaseNavigationBar.TYPE._IMG,
              onClick: () => {
                this.props.nav.pop();
              }
            },
          }} />
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              this.props.nav.push({ id: 'PublishDiary' })
              
            }}>
            <View style={styles.wrapper2}>
              <View style={styles.container2}>
                <Text style={styles.text2}>记录我的美丽之旅</Text>
              </View>
            </View>
          </TouchableOpacity>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  item: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#d7d7d7'
  },
  wrapper2: {
    borderColor: '#FF6D99',
    borderWidth: 0.5,
    paddingHorizontal: 3,
    paddingVertical: 3,
    height: 52,
    marginTop: 20,
    marginBottom: 20
  },
  container2: {
    backgroundColor: '#FF6D99',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text2: {
    fontSize: 14,
    color: '#fff'
  }
});
