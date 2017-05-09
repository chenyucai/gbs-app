import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import RequiredpackagesItemComponent from './components/RequiredpackagesItem'

export default class RequiredpackagesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "必点套餐",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <ScrollView>
          <View>
            <RequiredpackagesItemComponent/>
          </View>
          <View style={{marginTop: 10}}>
            <RequiredpackagesItemComponent/>
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
  top: {
    backgroundColor: '#23232E',
    flexDirection: 'row',
    height: 55,
    paddingTop: 15
  },
  top_nav: {
    flex: 1,
    alignItems: 'center'
  },
  top_nav_text: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.5
  },
  active: {
    opacity: 1,
    marginBottom: 8
  },
  border_bottom: {
    width: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5
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
  list_box: {
    marginTop: 12,
    marginHorizontal: 12
  }
});
