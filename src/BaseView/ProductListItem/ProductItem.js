import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

export default class ProductItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: true
    };
  }

  static defaultProps = {
    width: 170,
    height: 150
  };

  _goDetail(){
    var { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'ProductDetail',
        params: {
          id: this.props.Id
        }
      })
    }
  }

  _changeState(){
    // 用this.setState方法去改变state
    this.setState({
      collection: !this.state.collection
    })
  }


  // props 需要传入图片的宽度和高度
  render () {
    const rowData = this.props.rowData;
    //alert(JSON.stringify(rowData));
    return (
      <TouchableOpacity style={[styles.item, {width:this.props.width}]} onPress={this._goDetail.bind(this)}>
        <View style={{
          width: this.props.width,
          height: this.props.height
        }}>
          <Image style={{
            width: this.props.width,
            height: this.props.height
          }} source={{uri: this.props.Image}}/>
        </View>

        <View style={styles.item_content}>
          <View style={styles.item_title}>
            <Text style={styles.item_title_text} numberOfLines={2}>
              <Text style={{color:'#363334'}}>【{this.props.CategoryName}】</Text>
              <Text style={{color:'#292929'}}>{this.props.Title}</Text>
            </Text>
          </View>
          <View style={styles.item_footer}>
            <View style={styles.item_price}>
              <Text style={styles.item_price_now}>￥{this.props.SellPrice}</Text>
              <Text style={styles.item_price_old}>¥{this.props.MarketPrice}</Text>
            </View>
            <View style={styles.item_sale}>
              <Text style={{fontSize:10}}>已售</Text>
              <Text style={styles.item_count}>{this.props.SellCount}</Text>
            </View>
          </View>
        </View>

        <TouchableHighlight style={styles.item_collection} onPress={this._changeState.bind(this)}>
          {this.state.collection
            ? <Image source={require('../assets/icon_n_love.png')} style={styles.collection_img}/>
            : <Image source={require('../assets/icon_dis_love.png')} />
          }
          {/* <Image source={require('../assets/icon_dis_love.png')} /> */}
        </TouchableHighlight>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff'
  },
  item_title:{
    alignSelf:'center',
    marginTop:7,
    paddingHorizontal: 10
  },
  item_title_text:{
    fontSize: 11,
    lineHeight: 16
  },
  item_footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:10,
    paddingRight:10,
    marginBottom: 8,
    marginTop: 21
  },
  item_sale:{
    flexDirection: 'row',
    alignItems:'center'
  },
  item_price:{
    flexDirection: 'row',
    alignItems:'center'
  },
  item_price_now:{
    fontSize:14,
    color:'#FF5D94',
    marginRight:3
  },
  item_price_old:{
    fontSize:10,
    color:'#C9C6C6',
    textDecorationLine: 'line-through'
  },
  item_count:{
    fontSize:10
  },
  item_collection:{
    position: 'absolute',
    right: 10,
    top: 10,
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  collection_img:{
    width: 26,
    height: 26,
    borderRadius: 13,
  }
});
