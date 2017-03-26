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
  Dimensions
} from 'react-native'

import ScreenUtils from '../../utils/ScreenUtils';

import TopNavComponent from '../common/TopNav';
import ProductItemComponent from '../common/ProductItem';

export default class SpecialColumnComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderRow(rowData){
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(130)
    }
    return (
      <View style={styles.item}>
        <StoreItemComponent {...ProductItemInfo}/>
      </View>
    )
  }

  render () {
    let ProductItemInfo = {
      width: ScreenUtils.scaleSize(170),
      height:ScreenUtils.scaleSize(150)
    }
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.header}>
            <Image source={require('./image/8832F62B-2070-45C5-96E3-2BCB4F5CBE3F.png')}
              style={{
                width: ScreenUtils.scaleSize(375),
                height: ScreenUtils.scaleSize(230)
              }}
            />
            <View style={styles.header_title_wrapper}>
              <Text style={styles.header_title}>华丽变身</Text>
            </View>
            <Text style={styles.header_content}>十二款搭配教你各类服装鞋子搭配的方案,打造属于你自己的魔鬼身材, 完美身材。</Text>
          </View>

          <View style={styles.body}>
            <View style={styles.body_item}>
              <ProductItemComponent {...ProductItemInfo}/>
            </View>
            <View style={styles.body_item}>
              <ProductItemComponent {...ProductItemInfo}/>
            </View>
            <View style={styles.body_item}>
              <ProductItemComponent {...ProductItemInfo}/>
            </View>
            <View style={styles.body_item}>
              <ProductItemComponent {...ProductItemInfo}/>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0EFF5',
    height: Dimensions.get('window').height
  },
  header:{
    backgroundColor:'#fff',
    paddingBottom:20
  },
  header_title_wrapper:{
    borderBottomWidth:0.5,
    borderTopWidth: 0.5,
    borderColor: '#363334',
    width: 80,
    paddingTop:5,
    paddingBottom:5,
    marginLeft:12,
    marginTop:20,
    marginBottom:20
  },
  header_title:{
    fontSize: 18,
    fontWeight: '500',
    textAlign:'center'
  },
  header_content:{
    fontSize: 12,
    color: '#656565',
    lineHeight: 20,
    paddingHorizontal: 12
  },
  body:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:12,
    paddingRight:12,
    paddingTop:10,
    paddingBottom:10,
  },
  body_item:{
    marginBottom:10
  },
});
