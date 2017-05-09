'use strict';
import React, { PropTypes, Component, } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('window');
import ApiConst from '../../../Base/Urls/ApiConst';
class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: this.props.isCheck, data: this.props.data }

  }
  componentWillReceiveProps(next) {
    this.props = next;
    this.setState({
      isChecked: this.props.isCheck,
      data: this.props.data
    })
  }
  onChange() {
    this.props.onPress(!this.state.isChecked)
    this.setState({ isChecked: !this.state.isChecked })
  }
  render() {
    const { data } = this.state
    let container;
    if (this.state.isChecked) {
      container = <Image style={styles.header_headicon_imgdg} source={require('../../aimage/gouxuan.png')} />;
    } else {
      container = <Image style={styles.header_headicon_imgdg} source={require('../../aimage/weigouxuan.png')} />;
    }
    return (
      <TouchableOpacity style={styles.wrapper} onPress={() => this.onChange()}>
        {container}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper2: {
    backgroundColor: '#F0EFF5',
    flex: 1,
  },

  item: {
    marginBottom: 10,
  },
  tilimg: {
    width: 20,
    height: 20,

  },
  rightbtn: {
    position: 'absolute',
    top: 13,
    right: 15
  },
  titel: {
    fontSize: 14,
    marginLeft: width * 0.7,
    color: '#bbb',
    marginTop: 10
  },

  wrapper: {
    alignItems: 'center',

  },
  header: {

    height: 85,
    width: width * 0.9,
    marginTop: 10
  },
  headercon: {
    flexDirection: 'row',
    height: 65,
    width: width * 0.85,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 10
  },
  header_headicon: {
    width: 50,
    height: 70,
    marginLeft: 20,
  },
  header_headicon2: {
    width: 50,
    height: 70,
    marginLeft: 20,
    position: 'absolute',
    zIndex: 2,
  },
  header_headicon_img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 5,
    marginTop: 6
  },
  header_headicon_imgdg: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 5,
    marginTop: 25
  },
  titel2: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'center',
    marginTop: 5,
  },
  headerright: {
    height: 65,
    marginLeft: 20
  },
  headerrightup: {
    height: 20,
    flexDirection: 'row',
    marginTop: 8
  },
  smimg: {
    width: 20,
    height: 20
  },
  titel3: {
    fontSize: 14,
    marginLeft: 10,
    color: '#ddd',
  },
  goodlist: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: width,
    height: 75,
    backgroundColor: '#fff'
  },
  goodlistleft: {
    width: width * 0.8,
    height: 75,
    flexDirection: 'row',
  },
  goodlistright: {
    width: width * 0.2,
    height: 75,
  }
});
module.exports = CheckBox;