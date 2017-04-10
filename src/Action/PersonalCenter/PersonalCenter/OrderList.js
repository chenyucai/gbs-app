import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import BaseNavigationBar from '../../../BaseView/BaseNavigationBar/BaseNavigationBar';
import OrderstatusItem from './OrderListItem'

export default class OrderstatusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, state:'nostartpayment1'},
        {id:1, state:'nostartpayment2'},
        {id:1, state:'nostartconsume1'},
        {id:1, state:'nostartconsume2'},
        {id:1, state:'conduct'},
        {id:1, state:'completed1'},
        {id:1, state:'completed2'},
        {id:1, state:'refund1'},
        {id:1, state:'refund2'},
      ]
    };
  }

  renderItem(){
    var items = [];
    for (var i = 0; i < this.state.data.length; i++) {
      var item;

      // if (i % 2 == 0) {
      //   item = <OrderstatusItem key={i} nav={this.props.nav} state={'open'}/>
      // } else {
      //   item = <OrderstatusItem key={i} nav={this.props.nav} state={'close'}/>
      // }
      item = <OrderstatusItem key={i} nav={this.props.nav} state={this.state.data[i].state}/>
      items.push(
        item
      )
    }
    return items;
  }

  changeNostart(){
    this.setState({
      data: [
        // {id:1, state:'nostartpayment1'},
        // {id:1, state:'nostartpayment2'},
        {id:1, state:'nostartconsume1'},
        {id:1, state:'nostartconsume2'},
      ],
      test: true
    })
  }

  changeConduct(){
    this.setState({
      data: [
        {id:1, state:'conduct'},
        {id:1, state:'conduct'},
      ],
      test: false
    })
  }

  changeCompleted(){
    this.setState({
      data: [
        {id:1, state:'completed1'},
        {id:1, state:'completed2'},
      ],
      test: false
    })
  }

  changeRefund(){
    this.setState({
      data: [
        {id:1, state:'refund1'},
        {id:1, state:'refund2'},
      ],
      test: false
    })
  }

  changeAll(){
    this.setState({
      data: [
        {id:1, state:'nostartpayment1'},
        {id:1, state:'nostartpayment2'},
        {id:1, state:'nostartconsume1'},
        {id:1, state:'nostartconsume2'},
        {id:1, state:'conduct'},
        {id:1, state:'completed1'},
        {id:1, state:'completed2'},
        {id:1, state:'refund1'},
        {id:1, state:'refund2'},
      ],
      test: false
    })
  }

  changeNostartpayment(){
    this.setState({
      data: [
        {id:1, state:'nostartpayment1'},
        {id:1, state:'nostartpayment2'},
      ],
    })
  }

  changeNostartconsume(){
    this.setState({
      data: [
        {id:1, state:'nostartconsume1'},
        {id:1, state:'nostartconsume2'},
      ],
    })
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <BaseNavigationBar
            data={{
                title: "订单列表",
                leftbtn: {
                    type: BaseNavigationBar.TYPE._IMG,
                    onClick: ()=> {
                        this.props.nav.pop();
                    }
                },
            }}/>

        <View style={styles.top}>
          <TouchableOpacity style={styles.top_nav} onPress={this.changeAll.bind(this)}>
            <Text style={[styles.top_nav_text,styles.active]}>全部订单</Text>
            <View style={styles.border_bottom}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.top_nav} onPress={this.changeNostart.bind(this)}>
            <Text style={styles.top_nav_text}>未开始</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.top_nav} onPress={this.changeConduct.bind(this)}>
            <Text style={styles.top_nav_text}>进行中(评价)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.top_nav} onPress={this.changeCompleted.bind(this)}>
            <Text style={styles.top_nav_text}>已完成</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.top_nav} onPress={this.changeRefund.bind(this)}>
            <Text style={styles.top_nav_text}>退款单</Text>
          </TouchableOpacity>
        </View>
        {this.state.test == true
          ? <View style={styles.header}>
            <TouchableOpacity style={styles.header_item} onPress={this.changeNostartpayment.bind(this)}>
              <Text style={styles.header_item_text}>待付款</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_item} onPress={this.changeNostartconsume.bind(this)}>
              <Text style={styles.header_item_text_active}>待消费</Text>
              <View style={styles.border_bottom_active}></View>
            </TouchableOpacity>
          </View>
          : null
        }
        <ScrollView>
          <View>
            {/* <OrderstatusItem nav={this.props.nav}/> */}
            {this.renderItem()}
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
  top: {
    backgroundColor: '#23232E',
    flexDirection: 'row',
    height: 55,
    paddingTop: 15
  },
  top_nav: {
    flex: 1,
    alignItems: 'center'
  },
  top_nav_text: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.5
  },
  active: {
    opacity: 1,
    marginBottom: 8
  },
  border_bottom: {
    width: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5
  },
  border_bottom_active: {
    width: 10,
    borderBottomColor: '#363334',
    borderBottomWidth: 0.5,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    // marginBottom: 10
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 0.5,
  },
  header_item: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flex: 1
  },
  header_item_text: {
    fontSize: 12,
    color: '#b8b8b8',
    marginRight: 5
  },
  header_item_text_active: {
    fontSize: 14,
    color: '#363334',
    marginRight: 5
  },
  list_box: {
    marginTop: 12,
    marginHorizontal: 12
  }
});
