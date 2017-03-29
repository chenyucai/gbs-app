import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavWithActionsComponent from '../common/TopNavWithActions'

export default class PhotoelectricschoolddetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TopNavWithActionsComponent title="学堂详情" navigator={this.props.navigator}/>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.header_title}>
              <Text style={styles.header_title_text}>秋季卸妆方法不对，皮肤老十岁？</Text>
            </View>
            <View style={styles.header_icon_box}>
              <Image style={styles.header_icon} source={require('./image/icon_see2.png')}/>
              <Text style={{marginLeft: 6}}>999+</Text>
              <Image style={[styles.header_icon,{marginLeft: 16}]} source={require('./image/icon_Fabulous2.png')}/>
              <Text style={{marginLeft: 6}}>213</Text>
            </View>
            <View style={styles.header_timesource}>
              <Text style={{fontSize: 10,color: '#656565'}}>发布时间：2016年9月20</Text>
              <Text style={{fontSize: 10,marginLeft: 10,color: '#656565'}}>来源：美容护肤实验室</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Image style={styles.content_headerimg} source={require('../../img/WX20170329-101844.png')}/>
            <Text style={styles.content_text}>
              如果说不会化妆的女生是折翼的天使，那么，不会卸妆的女生肯定就是脸先着地的天使。虽然很多女生都会陷入“护肤——化妆——卸妆”的恶性循环，但是，看别人的妆容晶莹剔透，自己的妆容却惨不忍睹？别人卸了妆皮肤很紧致，自己卸了妆立马老十岁？
            </Text>
            <Image style={styles.content_headerimg} source={require('../../img/WX20170329-101844.png')}/>
            <Text style={styles.content_text}>
              众所周知，再好的化妆品也不能在我们的肌肤上停留过久，如果卸妆工作没有做好，护肤工作就白费，画上去的妆容甚至导致你开始怀疑人生...其实，是你的方法没有get对。
            </Text>
            <View style={styles.content_footerimg_box}>
              <Image style={styles.content_footerimg} source={require('../../img/WX20170329-103150.png')}/>
              <Image style={styles.content_footerimg} source={require('../../img/WX20170329-103150.png')}/>
            </View>
            <View style={styles.content_footer}>
              <View style={styles.content_footer_header}>
                <View style={{width: 15,height: 15,backgroundColor: '#363334'}}></View>
                <Text style={{marginLeft: 10,fontSize: 14,color: '#2F2F2F'}}>小TIPS</Text>
              </View>
              <View style={styles.content_footer_text_box}>
                <Text style={styles.content_footer_text}>润唇膏特有的黏度和滋润度既可把附着物清理掉，是便捷的唇部卸妆利器;</Text>
                <Text style={[styles.content_footer_text,{marginTop: 30}]}>使用口红之后嘴唇比较敏感，所以使用化妆棉之前要先打湿;</Text>
                <Text style={[styles.content_footer_text,{marginTop: 30}]}>最后要立马涂抹润唇膏保持唇部湿润，以免唇纹加深。</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent: 'flex-end',marginTop: 30}}>
                <Text style={{color: '#656565',fontSize: 14,marginBottom: 10}}>（内容来源：美容护肤实验室）</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={{color: '#B8B8B8',fontSize: 10}}>内容声明</Text>
            <Text style={{color: '#B8B8B8',fontSize: 10,marginTop: 10,lineHeight: 15}}>本学堂部分内容，包括文字／图片／视频等来源于网络，如有涉及个人作品未标明出处，请及时与本平台去的联系</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    marginLeft: 12,
    marginRight: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#b8b8b8'
  },
  header_title_text: {
    fontSize: 20,
    color: '#363334',
    marginTop: 20,
    alignSelf: 'center'
  },
  header_icon_box: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  header_icon: {
    width: ScreenUtils.scaleSize(18),
    height: ScreenUtils.scaleSize(18)
  },
  header_timesource: {
    marginTop: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  content: {
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,

  },
  content_headerimg: {
    width: ScreenUtils.scaleSize(351),
    height: ScreenUtils.scaleSize(200)
  },
  content_text: {
    fontSize: 12,
    color: '#656565',
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 20
  },
  content_footerimg: {
    width: ScreenUtils.scaleSize(170),
    height: ScreenUtils.scaleSize(200)
  },
  content_footerimg_box: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content_footer: {
    marginTop: 34,
    borderBottomWidth: 0.5,
    borderBottomColor: '#b8b8b8'
  },
  content_footer_header: {
    flexDirection: 'row'
  },
  content_footer_text_box: {
    marginTop: 15
  },
  content_footer_text: {
    color: '#656565',
    fontSize: 12
  },
  footer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 12
  }
});
