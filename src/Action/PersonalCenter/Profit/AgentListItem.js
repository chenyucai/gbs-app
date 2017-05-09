/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window');

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  detail(){
    this.props.nav.push({
      id: 'UserDetail'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={this.detail.bind(this)}>
          <Image source={require('../../../../img/WX20170329-103150@2x.png')} style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight:10
          }}/>
          <View style={{}}>
            <View style={{flexDirection:'row',marginTop:9}}>
              <Text style={{marginRight:5}}>暮色恋伊人</Text>
              <Image source={require('./assets/icon_Grade2.png')}/>
            </View>
            <Text style={{fontSize:12,color:'#B8B8B8',marginTop:10}}>嫩肤系列   皮肤管理   净肤系列...</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff'
  },
  item:{
    marginLeft:12,
    borderBottomWidth:0.5,
    borderBottomColor:'#d7d7d7',
    flexDirection:'row',
    paddingVertical:15
  }
});
