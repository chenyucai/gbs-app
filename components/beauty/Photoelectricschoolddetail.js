import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

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
        <View style={styles.header}>
          <View style={styles.header_title}>
            <Text style={styles.header_title_text}>秋季卸妆方法不对，皮肤老十岁？</Text>
          </View>icon_Fabulous2
          <View style={styles.header_icon}>

          </View>
          <View style={styles.header_timesource}>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header_title_text: {
    fontSize: 20,
    color: '#363334',
    marginTop: 20,
    alignSelf: 'center'
  },
  header_icon: {
    marginTop: 20,
  }
});
