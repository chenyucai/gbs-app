import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import ScreenUtils from '../../../../Utils/ScreenUtils/ScreenUtils';

export default class PhotoelectricschoollistPhotoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.list_img_box}>
          <Image style={styles.list_img} source={{uri: this.props.Img}}/>
        </View>
        <View style={styles.list_text_box}>
          <Text style={styles.list_text} numberOfLines={2}>
            {this.props.Title}
          </Text>
          <View style={styles.list_text_box_footer_item}>
            <Image source={require('../../assets/icon_time.png')}/>
            <Text style={{marginLeft: 6}}>2017.3.28</Text>
            <Image style={{marginLeft: 30}} source={require('../../assets/icon_see2.png')}/>
            <Text style={{marginLeft: 6}}>{this.props.Click}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list_img: {
    width: ScreenUtils.scaleSize(375),
    height: ScreenUtils.scaleSize(430)
  },
  list_text_box: {
    backgroundColor: '#fff',
    paddingTop: 18,
    paddingHorizontal: 24
  },
  list_text: {
    fontSize: 22,
    color: '#363334',
    textAlign: 'center'
  },
  list_text_box_footer_item: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30
  }
});
