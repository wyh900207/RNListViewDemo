'use strict'
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import Styles from '../Styles/MainStyles'

export default class LoadingView extends Component {
  render() {
    return(
      <ActivityIndicator style={Styles.container} size='large' />
    );
  };
}