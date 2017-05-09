import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform
} from 'react-native'

import HomeSearchComponent from './HomeSearch';

export default class HomeHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goSearch(){
    if (this.props.navigator) {
      this.props.navigator.push({
        name:'homeSearch',
        component: HomeSearchComponent
      })
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.location}>
          <Text style={styles.location_text}>上海</Text>
          <Image source={require('./image/icon_down.png')} style={styles.location_icon}/>
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image source={require('./image/logo.png')}/>
        </View>
        <TouchableOpacity style={styles.search} onPress={this._goSearch.bind(this)}>
          <Image source={require('./image/icon_search.png')}/>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    height: 65,
    backgroundColor:'#fff',
    paddingTop:34
  },
  location: {
    position: 'absolute',
    left:12,
    bottom: 17,
    flexDirection: 'row'
  },
  location_text: {
    fontSize: 12
  },
  location_icon:{
    marginTop:5,
    marginLeft:4
  },
  logo: {
    alignSelf: 'center'
  },
  search: {
    position: 'absolute',
    right:12,
    bottom: 12,
  }
});
