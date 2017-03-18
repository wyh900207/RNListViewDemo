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
  TabBarIOS,
} from 'react-native'; 
import Tabbar from './Components/Tabbar'

export default class RNListViewDemo extends Component {
  render() {
    return(
      <Tabbar />
    );
  }
}

AppRegistry.registerComponent('RNListViewDemo', () => RNListViewDemo);
  