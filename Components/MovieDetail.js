import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import Styles from '../Styles/MainStyles'

export default class MovieDetail extends Component {
  render() {
    return(
      <Text style={[Styles.container, {fontSize: 20}]}>
        This is a detail.
      </Text>
    );
  }
}