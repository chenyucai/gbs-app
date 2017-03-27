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

  render () {
    return (
      <TouchableOpacity>
        <Image source={require('./image/icon_Return2.png')}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

});
