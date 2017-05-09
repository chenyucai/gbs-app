import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class BackIconComponent extends Component {
  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _back(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={this._back.bind(this)}>
        <Image source={require('./image/icon_Return2.png')}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

});
