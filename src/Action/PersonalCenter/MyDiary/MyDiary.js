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
  Dimensions
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ApiConst from '../../../Base/Urls/ApiConst';
import MyModal from '../MyModal/MyModal';
import DiaryListItem from '../../../BaseView/DiaryListItem/DiaryListItem';
const { width, height } = Dimensions.get('window');
export default class MyDiary extends Component {
  static defaultProps = {

  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['', '', ''
      ]),
      userId: '89dae63a-168b-4729-bf6f-6eee51a9caba',
      buildstate: false,
      liststate: false,
      keyValue: '',
      title: '',
      goodIds: '',
    };
  }
  componentDidMount() {
    // let params = {
    //   page: 1,
    //   rows: 10,
    //   sidx: 'CreatorTime',
    //   sord: 'asc',
    //   userId: '5dcb9236-6394-465a-9f69-aa669cfa6745',
    // }
    // MyModal.GetDiaryGroupList(params, (res) => {
    //   alert(JSON.stringify(res))

    //   if (res.result.flag == 1) {
    //     this.setState({
    //       dataSource: this.ds.cloneWithRows(res.infos),
    //     })
    //   } else {
    //     alert(res.msg)
    //   }
    //   //alert(JSON.stringify(res))
    // });

    //另一种取数据方式
    let formData = new FormData();
    formData.append("page", "1");
    formData.append("rows", "10");
    formData.append("sidx", "CreatorTime");
    formData.append("sord", "asc");
    formData.append("userId", "992a9405-be08-4c74-bbcc-a57cf6df84c3");
    fetch(ApiConst.Versions().BaseUrl + '/AppCommon/GetDiaryGroupList',
      {
        method: 'POST',
        headers: {},
        body: formData,
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((json) => {
        alert(JSON.stringify(json));
        this.setState({
          dataSource: this.ds.cloneWithRows(json),
        })
      }
      ).catch((error) => {
        console.error(error);
      });



  }
  //添加日记本
  Updatediarynote() {
    let params = {
      keyValue: this.state.keyValue,
      title: this.state.title,
      goodIds: this.state.goodIds
    }
    MyModal.SaveDiaryGroup(params, (res) => {
      //alert(JSON.stringify(res))

      if (res.result.flag == 1) {
        alert(res.msg)
        this.setState({
          buildstate: false
        })
      } else {
        alert(res.msg)
      }
    });

  }
  adddiarynote() {

    return (
      <View style={styles.addcover}>
        <View style={styles.bodycen}>
          <Image style={styles.bgimg} source={require('../../aimage/BG.png')} />
          <View style={styles.inputkk}>
            <TextInput
              placeholder={'给日记本起名吧(不超过八个字)'}
              placeholderTextColor={'#ddd'}
              underlineColorAndroid={'transparent'}
              maxLength={8}
              onChangeText={(text) => {
                this.setState({ title: text });
              }}
              style={styles.inputku} />
            <TouchableOpacity
              onPress={() => {
                this.props.nav.push({ id: 'Mygoodlist' })
                {/*this.setState({
                  buildstate:false,
                })*/}
              }}>
              <TextInput
                placeholder={'关联已够产品(最多关联三款)'}
                placeholderTextColor={'#ddd'}
                underlineColorAndroid={'transparent'}
                editable={false}
                onChangeText={(text) => {
                  this.setState({ realname: text });
                }}
                style={styles.inputku} />
              <Image style={styles.iconimg} source={require('../../aimage/icon_Get into.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonkkleft}
            onPress={() => {
              this.setState({

                buildstate: false
              })
            }}>
            <Text style={styles.buttox}>取消</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonkkright}
            onPress={() => {
              this.Updatediarynote()
            }}>
            <Text style={styles.buttod}>完成</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
  renderRow(rowData, sectionID, rowID, highlightRow) {

    return (
      <View style={styles.item}>
        <DiaryListItem nav={this.props.nav} rowData={rowData} />
      </View>
    )

  }

  render() {

    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
          data={{
            title: "我的日记本",
            leftbtn: {
              type: BaseNavigationBar.TYPE._IMG,
              onClick: () => {
                this.props.nav.pop();
              }
            },
          }} />

        <ScrollView>
          <TouchableOpacity style={{
            backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', paddingLeft: 12, marginLeft: 12, marginTop: 5,
            width: ScreenUtils.scaleSize(170),
            height: ScreenUtils.scaleSize(220)
          }} onPress={() => {
            {/*this.props.nav.push({ id: 'PublishDiary' })*/ }
            this.setState({
              buildstate: true
            })
          }}>
            <Image source={require('./assets/icon_add.png')} />
            <Text style={{ fontSize: 14, color: '#b8b8b8', marginTop: 10 }}>新建日记本</Text>
          </TouchableOpacity>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            style={{ flex: 1 }}
            contentContainerStyle={styles.list}
          />
        </ScrollView>
        {this.state.buildstate == true ? this.adddiarynote() : <View></View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    flex: 1
  },
  item: {
    marginBottom: 10
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
  addcover: {
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: 'rgba(96,95,98,0.8)',
    alignItems: 'center',
  },
  bodycen: {
    width: ScreenUtils.scaleSize(260),
    height: ScreenUtils.scaleSize(340),
    backgroundColor: '#fff',
    marginTop: ScreenUtils.scaleSize(100),
  },
  bgimg: {
    width: ScreenUtils.scaleSize(260),
    height: ScreenUtils.scaleSize(340),
    position: 'absolute'
  },
  inputku: {
    width: width * 0.6,
    height: 40,
    marginTop: 21,
    backgroundColor: 'rgb(242,242,242)'
  },
  inputkk: {
    width: ScreenUtils.scaleSize(260),
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150
  },
  iconimg: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 10,
    top: 35
  },
  buttox: {
    fontSize: 16,
    color: '#ddd',
  },
  buttod: {
    fontSize: 16,
    color: 'rgb(255,147,180)',

  },
  buttonkkleft: {
    position: 'absolute',
    left: 45,
    top: 295
  },
  buttonkkright: {
    position: 'absolute',
    right: 45,
    top: 295
  }

});
