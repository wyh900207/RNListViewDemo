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
  ListView,
  TouchableOpacity,
} from 'react-native';
import MovieList from './Components/MovieList';
import Dimensions from 'Dimensions';

export default class RNListViewDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <MovieList />
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
});

AppRegistry.registerComponent('RNListViewDemo', () => RNListViewDemo);
  