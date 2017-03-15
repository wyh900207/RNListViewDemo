import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import Styles from '../Styles/MainStyles'

export default class MovieListCell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={Styles.contentStyle}>
        <Image source={{url: this.props.rowdata.picBig}} style={Styles.imageStyle} />
        <Text style={Styles.centerText}>
          {this.props.rowdata.description}
        </Text>
      </View>
    );
  };
}