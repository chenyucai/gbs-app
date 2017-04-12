/**
  个人中心
**/
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
  StatusBar
} from 'react-native'

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';

export default class PersoncenterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goOrderstatus() {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'OrderList',
      });
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <StatusBar
                    barStyle={'light-content'}
                />
        <View style={styles.header}>
          <Image style={styles.header_img} source={require('./assets/BG.png')}/>
          <View style={styles.header_signin_box}>
            <Image style={styles.header_signin} source={require('./assets/btn_n_Sign.png')}/>
            <Text style={styles.header_signin_text}>签到：<Text>24次</Text></Text>
          </View>
          <Image style={styles.header_setup} source={require('./assets/icon_evaluate.png')}/>
          <View style={styles.header_headicon}>
            <Image style={styles.header_headicon_img} source={require('../../../../img/g.jpg')}/>
          </View>
          <Text style={styles.header_name}>小太阳的朋友</Text>
          <View style={styles.header_levelsex}>
            <View style={styles.level}>
              <Image style={styles.level_img} source={require('../../Beauty/assets/icon_Grade2.png')}/>
              <Text style={styles.level_text}>V8</Text>
            </View>
            <Image style={styles.sex_img} source={require('../../Beauty/assets/icon_female.png')}/>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.content_header_box}>
            <View style={styles.content_header}>
              <View style={styles.content_header_list}>
                <TouchableOpacity style={styles.content_header_list_item} onPress={this._goOrderstatus.bind(this)}>
                  <Image source={require('./assets/icon_allOrder.png')}/>
                  <Text style={styles.content_header_list_item_text}>全部订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content_header_list_item} onPress={this._goOrderstatus.bind(this)}>
                  <Image source={require('./assets/icon_Not start.png')}/>
                  <Text style={styles.content_header_list_item_text}>未开始</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content_header_list_item} onPress={this._goOrderstatus.bind(this)}>
                  <Image source={require('./assets/icon_evaluate.png')}/>
                  <Text style={styles.content_header_list_item_text}>进行中／评价</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content_header_list_item} onPress={this._goOrderstatus.bind(this)}>
                  <Image source={require('./assets/icon_complete.png')}/>
                  <Text style={styles.content_header_list_item_text}>已完成</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content_header_list_item} onPress={this._goOrderstatus.bind(this)}>
                  <Image source={require('./assets/icon_refund.png')}/>
                  <Text style={styles.content_header_list_item_text}>退款订单</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.content_header_balancepoint}>
                <View style={styles.content_header_balance}>
                  <Text style={styles.content_header_balance_top}>50.00</Text>
                  <Text style={styles.content_header_balance_bottom}>余额</Text>
                </View>
                <View style={styles.content_header_point}>
                  <Text style={styles.content_header_point_top}>1224</Text>
                  <Text style={styles.content_header_point_bottom}>积分</Text>
                </View>
              </View>
            </View>
          </View>
          <ScrollView style={styles.content_list_box}>
            <View style={styles.content_list}>
              <TouchableOpacity style={[styles.content_list_item,styles.bottomrightborder]} onPress={() => {
                this.props.nav.push({
                  id: 'PersonalInfo'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_information.png')}/>
                <Text style={styles.content_list_item_text}>个人信息</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.content_list_item,styles.bottomrightborder]} onPress={() => {
                this.props.nav.push({
                  id: 'MyConcern'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_follow.png')}/>
                <Text style={styles.content_list_item_text}>我的关注</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.content_list_item,styles.bottomborder]} onPress={() => {
                this.props.nav.push({
                  id: 'MyDiary'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_Diary.png')}/>
                <Text style={styles.content_list_item_text}>我的日记本</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.content_list_item,styles.bottomrightborder]} onPress={() => {
                this.props.nav.push({
                  id: 'MyCollection'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_Collection.png')}/>
                <Text style={styles.content_list_item_text}>我的收藏</Text>
              </TouchableOpacity>
              <View style={[styles.content_list_item,styles.bottomrightborder]}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_Coupon.png')}/>
                <Text style={styles.content_list_item_text}>我的优惠券</Text>
              </View>
              <TouchableOpacity style={[styles.content_list_item,styles.bottomborder]} onPress={() => {
                this.props.nav.push({
                  id: 'Profit'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_share.png')}/>
                <Text style={styles.content_list_item_text}>分享·获利</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.content_list_item,styles.rightborder]} onPress={() => {
                this.props.nav.push({
                  id: 'MyTopic'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_conversation.png')}/>
                <Text style={styles.content_list_item_text}>我的话题</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.content_list_item,styles.rightborder]} onPress={() => {
                this.props.nav.push({
                  id: 'MyComment'
                })
              }}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_comment.png')}/>
                <Text style={styles.content_list_item_text}>我的评论</Text>
              </TouchableOpacity>
              <View style={styles.content_list_item}>
                <Image style={styles.content_list_item_img} source={require('./assets/icon_news.png')}/>
                <Text style={styles.content_list_item_text}>我的消息</Text>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: ScreenUtils.scaleSize(375),
    height: ScreenUtils.scaleSize(180)
  },
  header_img: {
    width:Dimensions.get('window').width,
    position:'absolute',
    left:0,
    top:0
  },
  header_signin_box: {
    marginTop: 30,
    marginLeft: 12
  },
  header_signin_text: {
    position: 'absolute',
    left: 33,
    top: 5,
    color: '#fff',
    fontSize: 12
  },
  header_setup: {
    position: 'absolute',
    right: 12,
    top: 32,
    width: ScreenUtils.scaleSize(20),
    height: ScreenUtils.scaleSize(20)
  },
  header_headicon: {
    alignSelf: 'center',
    marginTop: 8,
    width: ScreenUtils.scaleSize(52),
    height: ScreenUtils.scaleSize(52),
    borderRadius: 28,
    backgroundColor: '#fff'
  },
  header_headicon_img: {
    width: ScreenUtils.scaleSize(52),
    height: ScreenUtils.scaleSize(52),
    borderRadius: 28,
  },
  header_name: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 5
  },
  header_levelsex: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  level_text: {
    position: 'absolute',
    marginLeft: 3,
    marginTop: 1,
    fontSize: 8,
    color: '#fff'
  },
  sex_img: {
    marginLeft: 10
  },
  // content: {
  //   flex: 1,
  //   backgroundColor: '#f0eff5'
  // },
  content_header_box: {
    width: ScreenUtils.scaleSize(375),
    height: ScreenUtils.scaleSize(150),
    backgroundColor: '#f0eff5',
    paddingBottom: 10
  },
  content_header: {
    width: ScreenUtils.scaleSize(375),
    height: ScreenUtils.scaleSize(140),
    backgroundColor: '#fff',
    paddingHorizontal: 12
  },
  content_header_list: {
    height: 90,
    borderBottomWidth:0.5,
    borderBottomColor:"#b8b8b8",
    flexDirection: 'row',
  },
  content_header_list_item_text: {
    color: '#b8b8b8',
    fontSize: 10,
    marginTop: 6
  },
  content_header_list_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_header_balancepoint: {
    height: 50,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  content_header_balance: {
    flex: 1,
    borderRightWidth:0.5,
    borderRightColor:"#b8b8b8",
    alignItems: 'center',
  },
  content_header_point: {
    flex: 1,
    alignItems: 'center',
  },
  content_header_balance_top: {
    color: '#363334',
    fontSize: 16
  },
  content_header_balance_bottom: {
    color: '#B8B8B8',
    fontSize: 10
  },
  content_header_point_top: {
    color: '#363334',
    fontSize: 16
  },
  content_header_point_bottom: {
    color: '#B8B8B8',
    fontSize: 10
  },
  content_list_box: {
    backgroundColor: '#f0eff5'
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
