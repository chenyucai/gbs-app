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
import UserListItem from '../../../BaseView/UserListItem/UserListItem';
import ApiConst from '../../../Base/Urls/ApiConst';

const { width, height } = Dimensions.get('window');

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
      ]),
       dataSource2: ds.cloneWithRows([
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
      ]),
      num:0
    };
  }
  componentDidMount() {
  
    //  this.getConcernList();
     this.getFansList();

  }
  // //获取关注列表
  // getConcernList(){
  //    let params = {
  //     userId: "89dae63a-168b-4729-bf6f-6eee51a9caba",
  //   };
  //   Model.GetConcernList(params, (res) => {
      
  //     // this.setState({
  //     //    dataSource:res.infos
  //     // });
  //   //   if (res.result.flag == 1) {

  //   //   } else {
  //   //     alert(res.result.msg);
  //   //   }
  //     }, (err) => {
  //           alert("55");
  //    });
  // }
  //获取关注列表
  getConcernList(){
     let formData = new FormData();
        formData.append("userId", "992a9405-be08-4c74-bbcc-a57cf6df84c3");
        fetch(ApiConst.Versions().BaseUrl + '/AppPersonal/MyCommentList',
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
              //   this.setState({
                 
              //   });
            }
            ).catch((error) => {
                console.error(error);
            });

}
 //获取粉丝列表
  getFansList(){
     let formData = new FormData();
        formData.append("userId", "992a9405-be08-4c74-bbcc-a57cf6df84c3");
        // formData.append("pagination", {page:1,rows:10,sidx:CreatorTime,sord:asc,});
        fetch(ApiConst.Versions().BaseUrl + '/AppPersonal/MyFansList',
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
              //   this.setState({
                 
              //   });
            }
            ).catch((error) => {
                console.error(error);
            });

}
  // //获取粉丝列表
  // getFansList(){
  //    let params = {
  //     userId: "89dae63a-168b-4729-bf6f-6eee51a9caba",
  //   };
  //   Model.GetConcernList(params, (res) => {
  //     alert(JSON.stringify(res));
  //     // this.setState({
  //     //    dataSource:res.infos
  //     // });
  //   //   if (res.result.flag == 1) {

  //   //   } else {
  //   //     alert(res.result.msg);
  //   //   }
  //     }, (err) => {
  //           alert("55");
  //    });
  // }
  renderRow(rowData){
    return (
      <View style={styles.item}>
        <UserListItem nav={this.props.nav}/>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <BaseNavigationBar
            data={{
                title: "我的关注",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}
        />
        <ScrollableTabView
          tabBarUnderlineStyle={{
            backgroundColor:'#23232E'
          }}
          tabBarBackgroundColor='#23232E'
          tabBarActiveTextColor='#ffffff'
          tabBarInactiveTextColor='#45454E'
          tabBarTextStyle={{fontSize: 14,fontWeight:'400'}}
        >
          <View tabLabel='关注(12)' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            />
          </View>

          <View tabLabel='粉丝(3)' style={{flex:1}}>
            <ListView
              dataSource={this.state.dataSource2}
              renderRow={this.renderRow.bind(this)}
              style={{flex:1}}
            />
          </View>

        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F0EFF5'
  },
});
