/**
 * 网上社区
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  ListView,
  Dimensions,
  AsyncStorage
} from 'react-native'

import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from './../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ButtonComponent from '../../BaseView/Button/Button';
import MyModal from '../PersonalCenter/MyModal/MyModal';

export default class CommunityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userId : "",
        keyValue : "",
        type : 2,
        title : "",
        content : "",
        categroy : 0,
        imgList : "",
    }
  }

  editTopic(){
    let params = {
        userId:this.state.userId,
        keyValue : this.state.keyValue,
        type : this.state.type,
        title : this.state.title,
        content : this.state.content,
        categroy : this.state.categroy,
        imgList : this.state.imgList
    };
    MyModal.EditTopic(params,(res) => {
      //alert(res);
      if(res == "1" || res == 1){
          alert("编辑话题成功！");
      }else{

      }
    },(err) => {

    });
  }

  componentDidMount() {
      AsyncStorage.getItem("userId",(err,res) => {
        if(res){
          this.setState({
              userId : res,
          });
        }
      })
  }

    // readFile() {
    //
    //     let file = this.files[0]; //获取上传文件列表中第一个文件
    //     if (!/image\/\w+/.test(file.type)) {
    //         alert("文件必须为图片！");
    //         return false;
    //     }
    //
    //     let reader = new FileReader(); //实例一个文件对象
    //     reader.readAsDataURL(file); //把上传的文件转换成url
    //
    //     reader.onload = function(e) {
    //
    //         let data = dealImage(
    //             e.target.result,
    //             {
    //                 width: 100,
    //                 height:100,
    //                 quality: 0.7
    //             },
    //             function(data){
    //                 data = data.split(',');
    //                 let imgUrl = data[1];
    //             }
    //         );
    //     }
    //
    // }

    /**
     * 图片压缩，默认同比例压缩
     * @param {Object} path
     *   pc端传入的路径可以为相对路径，但是在移动端上必须传入的路径是照相图片储存的绝对路径
     * @param {Object} obj
     *   obj 对象 有 width， height， quality(0-1)
     * @param {Object} callback
     *   回调函数有一个参数，base64的字符串数据
     */
    dealImage(path, obj, callback){
        let img = new Image();
        img.src = path;
        img.onload = function(){
            let that = this;
            // 默认按比例压缩
            let w = that.width,
                h = that.height,
                scale = w / h;
            w = obj.width || w;
            h = obj.height || (w / scale);
            let quality = 0.7;  // 默认图片质量为0.7
            //生成canvas
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            // 创建属性节点
            let anw = document.createAttribute("width");
            anw.nodeValue = w;
            let anh = document.createAttribute("height");
            anh.nodeValue = h;
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            ctx.drawImage(that, 0, 0, w, h);
            // 图像质量
            if(obj.quality && obj.quality <= 1 && obj.quality > 0){
                quality = obj.quality;
            }
            // quality值越小，所绘制出的图像越模糊
            let base64 = canvas.toDataURL('image/jpeg', quality );
            // 回调函数返回base64的值
            callback(base64);
            // console.log(base64);
            // return base64;
        }
    }

  render () {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "86天6个疗程",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>
        <ScrollView style={{flex:1}}>
          <View style={{
            backgroundColor:'#fff'
          }}>
            <View style={styles.title_box}>
              <TextInput
                style={styles.title}
                placeholder="日记标题"
                placeholderTextColor="#D7D7D7"
                multiline={true}
                // numberOfLines={1}
                underlineColorAndroid="transparent"
                onChangeText={(text) => {this.setState({
                    title : text,
                })}}
              />
            </View>
            <View style={styles.content_box}>
              <TextInput
                style={styles.content}
                placeholder="详细写下体验经历，传播给更多的光博士用户"
                placeholderTextColor="#D7D7D7"
                underlineColorAndroid="transparent"
                multiline={true}
                onChangeText={(text) => {this.setState({
                    content : text,
                })}}
              />
            </View>
            <View style={styles.images_box}>
              <View style={styles.images_header}>
                <Text style={{fontSize:12, color:'#656565'}}>可点击上传图片，一共可以上传9张</Text>
              </View>
              <View style={styles.images_body}>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
                <Image source={require('../../../img/WX20170329-103150@2x.png')} style={styles.images_item}/>
              </View>
            </View>
          </View>

          <View style={{
            marginHorizontal: 12,
            marginTop:50,
            marginBottom:30
          }}>
            <TouchableOpacity onPress={() => this.editTopic()}>
              <ButtonComponent />
            </TouchableOpacity>
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
  title_box:{
    height:50,
    backgroundColor:'#f2f2f2',
    marginHorizontal:12,
    marginTop:12,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    height:50,
    justifyContent:'center',
    paddingTop:12,
    fontSize:14,
    paddingLeft: 10,
    flex:1,
    width:Dimensions.get('window').width - 12*3
  },
  content_box:{
    height:164,
    backgroundColor:'#f2f2f2',
    marginHorizontal:12,
    marginTop:12,
    marginBottom:10,
  },
  content:{
    height:164,
    paddingTop:12,
    fontSize:14,
    paddingLeft: 10,
    width:Dimensions.get('window').width - 12*3
  },
  images_box:{
    marginVertical: 18
  },
  images_header:{
    marginHorizontal: 12,
    marginBottom:18
  },
  images_body:{
    paddingLeft:12,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  images_item:{
    width:80,
    height:80,
    marginRight:10,
    marginBottom:10
  }
});
