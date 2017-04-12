/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

export default class CommunityItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={() => {
        this.props.nav.push({
          id: 'TopicDetail'
        })
      }}>
        <View style={styles.header}>
          <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.icon}/>
          <View style={styles.user_box}>
            <View style={styles.name_box}>
              <Text style={styles.name}>Funwear</Text>
              <Image source={styles.level}/>
            </View>
            <Text style={styles.date}>2016.10.20</Text>
          </View>
          <View style={styles.right}>
            <View style={styles.right_item}>
              <Image source={require('./assets/icon_see2.png')} style={styles.right_icon}/>
              <Text style={styles.right_content}>999+</Text>
            </View>
            <View style={styles.right_item}>
              <Image source={require('./assets/icon_see2.png')} style={styles.right_icon}/>
              <Text style={styles.right_content}>999+</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.title} numberOfLines={1}>大家觉得什么样的美甲图案最适合职业装</Text>
          <Text style={styles.content} numberOfLines={2}>每一个爱美的男女，都希望得到旁边的关注和仰慕，现在，光博士启动了新一轮COSPLAY会展，让爱美的你得到最闪耀的关注届...</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'#fff',
    paddingHorizontal:12,
    paddingVertical: 20
  },
  header:{
    flexDirection:'row',
    borderBottomWidth: 0.5,
    borderColor:'#d7d7d7',
    paddingBottom:15
  },
  icon:{
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight:10
  },
  user_box:{
    flex:1,
    justifyContent:"center"
  },
  name:{
    fontSize: 14,
    fontWeight:'500',
    marginBottom:4
  },
  date:{
    fontSize: 12,
    color:'#656565'
  },
  right:{
    flexDirection:'row',
    alignItems:'center'
  },
  right_item:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 15
  },
  right_icon:{
    marginRight:6
  },
  right_content:{
    fontSize: 10
  },
  title:{
    marginTop: 15,
    marginBottom:10,
    fontSize: 16,
    fontWeight:'500'
  },
  content:{
    fontSize: 12,
    color:'#656565',
    lineHeight:20
  }
});
