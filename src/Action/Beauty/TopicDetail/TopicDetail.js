/**
 *
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';

import CommentListItem from '../../../BaseView/CommentListItem/CommentItem';

const { width, height } = Dimensions.get('window');

export default class TopicDetail extends Component {
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
        <CommentListItem nav={this.props.nav}/>
      </View>
    )
  }

  renderImg(){
    var imgs = [];
    for (var i = 0; i < 6; i++) {
      imgs.push(
        <Image key={i} source={require('../../../../img/WX20170330-164651@2x.png')} style={styles.img}/>
      )
    }
    return imgs;
  }

  renderComment(){
    var data = [];
    for (var i = 0; i < 6; i++) {
      data.push(
        <View key={i} style={{marginHorizontal:12,paddingVertical:15,borderBottomColor:'#d7d7d7',borderBottomWidth:0.5}}>
          <CommentListItem />
        </View>
      )
    }
    return data;
  }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "话题详情",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
        }}/>

        <ScrollView style={{flex:1}}>
          <View style={styles.body}>
            <View style={styles.img_box}>
              {this.renderImg()}
            </View>
            <Text style={{marginTop:15,marginBottom:10,paddingHorizontal:12,fontSize:16,fontWeight:'600',alignSelf:'center'}} numberOfLines={1}>
              大家觉得什么样的美甲图案最适合职业装？
            </Text>

            <Text style={{paddingHorizontal:12,fontSize:12,fontWeight:'300'}}>
              如果说不会化妆的女生是折翼的天使，那么，不会卸妆的女生肯定就是脸先着地的天使。虽然很多女生都会陷入“护肤——化妆——卸妆”的恶性循环，但是，看别人的妆容晶莹剔透，自己的妆容却惨不忍睹？别人卸了妆皮肤很紧致，自己卸了妆立马老十岁？
            </Text>
          </View>

          <View style={styles.comments}>
            {this.renderComment()}
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
  body:{
    marginBottom:10,
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5,
    backgroundColor:'#fff',
    paddingBottom:20
  },
  comments:{
    backgroundColor:'#fff'
  },
  img_box:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    paddingHorizontal:8,
    marginTop:15
  },
  img:{
    width: width / 3 - 15,
    height: width / 3 - 15,
    resizeMode:'cover',
    marginBottom:10
  }
});
