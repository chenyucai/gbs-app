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
import ProfitDetailItem from './ProfitDetailItem';
import ApiConst from '../../../Base/Urls/ApiConst';
export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id:1,
          name:'12312'
        },
        {
          id:1,
          name:'12312'
        },
        {
          id:1,
          name:'12312'
        },
      ])
    };
  }
  componentDidMount() {
    this.getRedPackageList();

  }
//获取红包列表
   getRedPackageList(){
    let formData = new FormData();
        formData.append("UserId", "992a9405-be08-4c74-bbcc-a57cf6df84c3");
        fetch(ApiConst.Versions().BaseUrl + '/AppPersonal/GetRedPacketList',
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
                //  dataSource:json,
                });
            }
            ).catch((error) => {
                console.error(error);
            });
  }
  //领取红包
  recieveRedPacket(){
    let formData = new FormData();
        formData.append("Id", "992a9405-be08-4c74-bbcc-a57cf6df84c3");
        fetch(ApiConst.Versions().BaseUrl + '/AppPersonal/RecieveRedPacket',
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
                //  dataSource:json,
                });
            }
            ).catch((error) => {
                console.error(error);
            });
  }
  renderRow(rowData){
    return (
      <View style={styles.item}>
        <ProfitDetailItem nav={this.props.nav} rowData={rowData} receive={this.recieveRedPacket.bind(this)}/>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <BaseNavigationBar
            data={{
                title: "奖励红包",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={{flex:1,paddingTop:20}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F2F2F2'
  },
});
