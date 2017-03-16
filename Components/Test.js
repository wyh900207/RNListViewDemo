import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import Styles from '../Styles/MainStyles'

export default class Test extends Component {
  render() {
    return(
      <View style={Styles.container}>
        <Text>React Native</Text>
      </View>
    );
  }
}