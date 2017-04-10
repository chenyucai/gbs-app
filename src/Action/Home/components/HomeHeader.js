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

export default class HomeHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goSearch(){
    if (this.props.nav) {
      this.props.nav.push({
        id:'HomeSearch'
      })
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.location}>
          <Text style={styles.location_text}>上海</Text>
          <Image source={require('../assets/icon_down.png')} style={styles.location_icon}/>
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <TouchableOpacity style={styles.search} onPress={this._goSearch.bind(this)}>
          <Image source={require('../assets/icon_search.png')}/>
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
