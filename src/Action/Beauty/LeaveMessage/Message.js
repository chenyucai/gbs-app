/**
 * page 在线留言
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native'
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';

export default class defaultComponent extends Component {
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
                title: "在线留言",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>

        <ScrollView style={{flex:1,paddingHorizontal:15, paddingVertical:15}}>
          <View style={styles.item_left}>
            <Image source={require('../../../../img/WX20170329-103150@2x.png')} style={styles.item_icon}/>
            <View style={styles.item_left_content_container}>
              <Text style={styles.item_left_name}>光博士客服</Text>
              <Text style={styles.item_left_content}>您好！谢谢您对于光博士的喜爱。现在您可以在这里留言。写出您的疑问或者需求。我们会尽快予以回复。</Text>
            </View>
          </View>
          <View style={styles.item_right}>
            <View style={styles.item_right_content_container}>
              <Text style={styles.item_right_content}>恩恩！</Text>
            </View>
            <Image source={require('../../../../img/WX20170329-103150@2x.png')} style={styles.item_icon}/>
          </View>
        </ScrollView>

        <View style={styles.input_box}>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="请输入您的留言"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'#F2F2F2'
  },
  input_box:{
    height:50,
    borderBottomWidth:0.5,
    borderTopWidth: 0.5,
    borderColor:'#D7D7D7',
    backgroundColor:'#F7F7F7',
    paddingHorizontal:12,
    paddingVertical:8
  },
  input:{
    flex:1,
    fontSize: 12,
    borderColor:'#d7d7d7',
    borderWidth:0.5,
    paddingLeft:10
  },
  item_left:{
    flexDirection:'row',
    marginBottom:40
  },
  item_icon:{
    width:40,
    height:40,
    borderRadius:20,
    borderColor:'#d7d7d7',
    borderWidth:0.5
  },
  item_left_content_container:{
    flex:1,
    marginLeft:10
  },
  item_left_name:{
    color:'#656565',
    fontSize:12,
    marginBottom:5
  },
  item_left_content:{
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:'#fff',
    marginRight:50,
    fontSize:14,
    lineHeight:20
  },
  item_right:{
    flexDirection:'row',
    marginBottom:40,
    justifyContent:'flex-end'
  },
  item_right_content:{
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:'#fff',
    fontSize:14,
    lineHeight:20,
    backgroundColor:'#FF6D99',
    color:'#fff',
    marginLeft:50,
    marginRight:10
  }
});
