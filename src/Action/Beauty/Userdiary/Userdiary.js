import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import DiaryItemComponent from '../Diary/DiaryItem'
/**
 * 接口
 */
import Model from '../Model/Model';

const USERID = '';

export default class UserdiaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    this.GetDiaryList();
  }

  GetDiaryList() {
    var params = {
      userId: USERID,
      Type: 1
    };
    Model.GetDiaryList(params,(res)=>{
      // this.setState({SchoolList:res.SchoolList})
    });
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: this.props.params.title,
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>分类</Text>
            <Image style={styles.header_item_img} source={require('../assets/icon_drop-down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>浏览量</Text>
            <Image style={styles.header_item_img} source={require('../../Home/assets/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>点赞量</Text>
            <Image style={styles.header_item_img} source={require('../../Home/assets/icon_down.png')}/>
          </View>
          <View style={styles.header_item}>
            <Text style={styles.header_item_text}>评论量</Text>
            <Image style={styles.header_item_img} source={require('../../Home/assets/icon_down.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <DiaryItemComponent/>
          </View>
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
  header: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff'
  },
  header_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  header_item_text: {
    fontSize: 14,
    color: '#363334',
    marginRight: 5
  },
});
