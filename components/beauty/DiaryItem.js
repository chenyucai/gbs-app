import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import ScreenUtils from '../../utils/ScreenUtils';

export default class DiaryItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return(
      <View style={styles.diary_wrapper}>
        <View style={styles.diary_header}>
          <View style={styles.diary_header_left}>
            <Image style={styles.diary_header_left_img} source={require('./image/g.jpg')} />
          </View>
          <View style={styles.diary_header_content}>
            <Text style={styles.diary_header_content_top}>美丽青春站第一章</Text>
            <Text style={styles.diary_header_content_bottom}>面部整形</Text>
          </View>
          <View style={styles.diary_header_right}>
            <Text style={styles.diary_header_right_top}>[上海美丽行]</Text>
          </View>
        </View>
        <View style={styles.diary_content}>
          <Image style={styles.diary_content_img} source={require('./image/g.jpg')} />
          <Image style={styles.diary_content_img} source={require('./image/g.jpg')} />
          <Image style={styles.diary_content_img} source={require('./image/g.jpg')} />
        </View>
        <View style={styles.diary_footer}>
          <View style={styles.diary_footer_left}>
            <Image style={styles.diary_footer_left_img} source={require('./image/icon_see.png')}/>
            <Text style={styles.diary_footer_left_text}>234</Text>
          </View>
          <View style={[styles.diary_footer_left,styles.diary_footer_left_ts]}>
            <Image style={styles.diary_footer_left_img} source={require('./image/icon_Fabulous.png')}/>
            <Text style={styles.diary_footer_left_text}>999+</Text>
          </View>
          <View style={[styles.diary_footer_left,styles.diary_footer_left_ts]}>
            <Image style={styles.diary_footer_left_img} source={require('./image/icon_message.png')}/>
            <Text style={styles.diary_footer_left_text}>234</Text>
          </View>
          <View style={styles.diary_footer_right}>
            <Text style={styles.diary_footer_right_text}>2017.3.27</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  diary_wrapper: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 20
  },
  diary_header: {
    flexDirection: 'row',
  },
  diary_header_left: {
    width: ScreenUtils.scaleSize(34),
    height: ScreenUtils.scaleSize(34),
    borderRadius: 50,
    overflow: 'hidden'
  },
  diary_header_left_img: {
    width: ScreenUtils.scaleSize(34),
    height: ScreenUtils.scaleSize(34)
  },
  diary_header_content: {
    flex: 1,
    marginLeft: 10
  },
  diary_header_right: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-start'
  },
  diary_header_content_top: {
    fontSize: 16,
    color: '#363334'
  },
  diary_header_content_bottom: {
    fontSize: 12,
    color: '#FF6D99',
    marginTop: 5
  },
  diary_header_right_top: {
    fontSize: 12,
    color: '#b8b8b8'
  },
  diary_content: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  diary_content_img: {
    width: ScreenUtils.scaleSize(114),
    height: ScreenUtils.scaleSize(124)
  },
  diary_footer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  diary_footer_left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  diary_footer_left_text: {
    marginLeft: 6,
    color: '#363334',
    fontSize: 12
  },
  diary_footer_left_ts: {
    marginLeft: 20
  },
  diary_footer_right: {
    position: 'absolute',
    right: 0,
    top: 3
  },
  diary_footer_right_text: {
    fontSize: 12,
    color: '#363334'
  }
});
