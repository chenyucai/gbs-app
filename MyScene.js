import React, { Component } form 'react'
import {
  View,
  Text
} from 'react-native'

export default class MyScene extends Component {
  static defaultProps = {
    title: 'MyScene'
  }

  render () {
    return (
      <View>
        <Text>
          hi my name is {this.props.title}.
        </Text>
      </View>
    )
  }
}
