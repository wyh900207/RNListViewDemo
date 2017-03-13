import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class LoadingButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <TouchableOpacity style={ styles.buttonStyle } onPress={ this.props.touchup }>
        <Text style={ styles.textStyle }>
          { this.props.titleText }
        </Text>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 150,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
});