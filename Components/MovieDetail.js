import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Image
} from 'react-native';
import Styles from '../Styles/MainStyles'

export default class MovieDetail extends Component {
  render() {
    return(
      <View style={Styles.container}>
        <Text style={DetailViewStyle.textStyle}>
          {this.props.rowdata.name}
        </Text>
        <Image source={{url: this.props.rowdata.picBig}} style={DetailViewStyle.imageStyle} />
      </View>
    );
  }
}

const DetailViewStyle = StyleSheet.create({
  textStyle: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  imageStyle: {
    width: 300,
    height: 170,
    marginTop: 20,
  }
});