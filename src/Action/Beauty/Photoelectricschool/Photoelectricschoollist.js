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
import PhotoelectricschoollistPhotoComponent from './components/PhotoelectricschoollistPhoto'

export default class PhotoelectricschoollistComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goPhotoelectricschooldetail(title) {
    const { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'Photoelectricschooldetail',
        title: title
      });
    }
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
        </View>
        <ScrollView>
          <TouchableOpacity style={{marginTop: 10}} onPress={this._goPhotoelectricschooldetail.bind(this, '微整形学堂详情')}>
            <PhotoelectricschoollistPhotoComponent/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10}}>
            <PhotoelectricschoollistPhotoComponent/>
          </TouchableOpacity>
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
