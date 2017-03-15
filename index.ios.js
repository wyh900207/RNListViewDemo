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
} from 'react-native';
import Styles from './Styles/MainStyles';
import MovieList from './Components/MovieList';
import Dimensions from 'Dimensions';

export default class RNListViewDemo extends Component {
  render() {
    return(
      <MovieList />
    );
  }
}

AppRegistry.registerComponent('RNListViewDemo', () => RNListViewDemo);
  