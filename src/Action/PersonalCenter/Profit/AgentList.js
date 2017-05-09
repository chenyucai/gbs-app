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
  Dimensions,
  ListView
} from 'react-native'

import ScreenUtils from '../../../Utils/ScreenUtils/ScreenUtils';
import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AgentListItem from './AgentListItem';
import ApiConst from '../../../Base/Urls/ApiConst';
const { width, height } = Dimensions.get('window');

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: 1,
          name: '12312'
        },
        {
          id: 1,
          name: '12312'
        },
        {
          id: 1,
          name: '12312'
        },
      ]),
      type: 0,
    };
  }
  componentDidMount() {
    this.getProxyList();

  }
  //区别几级代理
  changeAgentlist({i}) {
    if (i == 0) {
     alert("0");
      var ast = new Promise.resolve()
      ast.then(() => {
        this.setState({
          type: 0
        });
      }).then(()=>{this.getProxyList();
      })
    }
    if (i == 1) {
      alert("1");
      var ast = new Promise.resolve()
      ast.then(() => {
        this.setState({
          type: 1
        });
      }).then(()=>{this.getProxyList();
      })
    }
    if (i == 2) {
      alert("2");
      var ast = new Promise.resolve()
      ast.then(() => {
        this.setState({
          type: 2
        });
      }).then(()=>{this.getProxyList();
    })
    }
  }
  //获取代理人列表
  getProxyList() {
      let formData = new FormData();
      formData.append("UserId", "992a9405-be08-4c74-bbcc-a57cf6df84c3");
      fetch(ApiConst.Versions().BaseUrl + '/AppPersonal/GetInviteList',
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
              // switch(this.state.type){
              //       case 0 :
              //       this.setState({
              //           dataSource:json.InviteListLevel1
              //       });
              //       alert("0");
              //       break;
              //       case 1 :
              //       this.setState({
              //           dataSource:json.InviteListLevel2
              //       });
              //       alert("1");
              //       break;
              //       case 2 :
              //       this.setState({
              //           dataSource:json.InviteListLevel3
              //       });
              //       alert("2");
              //       break;
              // }
              alert(this.state.type);
              if(this.state.type == 0){
               
                 this.setState({
                        dataSource:json.InviteListLevel1
                     });
              }
              if(this.state.type == 1){
                
                 this.setState({
                        dataSource:json.InviteListLevel2
                     });
              }
              if(this.state.type == 2){
                
                 this.setState({
                        dataSource:json.InviteListLevel3
                     });
              }
          }
          ).catch((error) => {
              console.error(error);
          });
  }
  renderRow(rowData) {
    return (
      <View style={styles.item}>
        <AgentListItem nav={this.props.nav} />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <BaseNavigationBar
          data={{
            title: "代理人",
            leftbtn: {
              type: BaseNavigationBar.TYPE._IMG,
              onClick: () => {
                this.props.nav.pop();
              }
            },
          }}
        />
        <ScrollableTabView
          tabBarUnderlineStyle={{
            backgroundColor: '#23232E'
          }}
          tabBarBackgroundColor='#23232E'
          tabBarActiveTextColor='#ffffff'
          tabBarInactiveTextColor='#45454E'
          tabBarTextStyle={{ fontSize: 14, fontWeight: '400' }}
          onChangeTab={this.changeAgentlist.bind(this)}
        >
          <View tabLabel='一级代理人' style={{ flex: 1 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{ flex: 1 }}
            />
          </View>

          <View tabLabel='二级代理人' style={{ flex: 1 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{ flex: 1 }}
            />
          </View>

          <View tabLabel='三级代理人' style={{ flex: 1 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{ flex: 1 }}
            />
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EFF5'
  },
});
