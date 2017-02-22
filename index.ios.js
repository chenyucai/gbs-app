/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';

import MyScene from './MyScene'

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ''
    return (
      <Text>{display}</Text>
    )
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{width:200,height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Image source={require('./img/scroll.jpg')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'
    };
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image style={styles.pic} source={pic}>

        </Image>
        <Greeting name="jack"></Greeting>
        <Greeting name="herry"></Greeting>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />

        <FlexDimensionsBasics></FlexDimensionsBasics>

        <PizzaTranslator></PizzaTranslator> */}

        {/* <IScrolledDownAndWhatHappenedNextShockedMe></IScrolledDownAndWhatHappenedNextShockedMe> */}

        <ListViewBasics></ListViewBasics>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic: {
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
