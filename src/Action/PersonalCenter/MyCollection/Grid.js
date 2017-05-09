/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.content_list}>
          <TouchableOpacity style={[styles.content_list_item,styles.bottomrightborder]} onPress={() => {
            this.props.nav.push({
              id: 'PersonalInfo'
            })
          }}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_Special.png')}/>
            <Text style={styles.content_list_item_text}>专场</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.content_list_item,styles.bottomrightborder]} onPress={() => {
            this.props.nav.push({
              id: 'MyConcern'
            })
          }}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_purchase.png')}/>
            <Text style={styles.content_list_item_text}>团购</Text>
          </TouchableOpacity>
          <View style={[styles.content_list_item,styles.bottomborder]}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_Package.png')}/>
            <Text style={styles.content_list_item_text}>套餐</Text>
          </View>
          <TouchableOpacity style={[styles.content_list_item,styles.bottomrightborder]} onPress={() => {
            this.props.nav.push({
              id: 'MyCollection'
            })
          }}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_Diary.png')}/>
            <Text style={styles.content_list_item_text}>日记本</Text>
          </TouchableOpacity>
          <View style={[styles.content_list_item,styles.bottomrightborder]}>
            <Image style={styles.content_list_item_img} source={require('./assets/School Center.png')}/>
            <Text style={styles.content_list_item_text}>学堂中心</Text>
          </View>
          <TouchableOpacity style={[styles.content_list_item,styles.bottomborder]} onPress={() => {
            this.props.nav.push({
              id: 'Profit'
            })
          }}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_information.png')}/>
            <Text style={styles.content_list_item_text}>行业资讯</Text>
          </TouchableOpacity>
          <View style={[styles.content_list_item,styles.rightborder]}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_Master.png')}/>
            <Text style={styles.content_list_item_text}>达人活动</Text>
          </View>
          <View style={[styles.content_list_item,styles.rightborder]}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_topics.png')}/>
            <Text style={styles.content_list_item_text}>社区话题</Text>
          </View>
          <View style={styles.content_list_item}>
            <Image style={styles.content_list_item_img} source={require('./assets/icon_news.png')}/>
            <Text style={styles.content_list_item_text}>公司新闻</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff'
  },
  content_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    marginBottom: 10
  },
  content_list_item: {
    alignItems: 'center',
    width: ScreenUtils.scaleSize(124),
    height: 92,
    justifyContent: 'center'
  },
  content_list_item_img: {
    width: ScreenUtils.scaleSize(26),
    height: ScreenUtils.scaleSize(26)
  },
  content_list_item_text: {
    marginTop: 8,
    color: '#363334',
    fontSize: 10
  },
  bottomrightborder: {
    borderBottomWidth:0.5,
    borderBottomColor:"#F0EFF5",
    borderRightWidth:0.5,
    borderRightColor:"#F0EFF5",
  },
  bottomborder: {
    borderBottomWidth:0.5,
    borderBottomColor:"#F0EFF5"
  },
  rightborder: {
    borderRightWidth:0.5,
    borderRightColor:"#F0EFF5",
  }
});
