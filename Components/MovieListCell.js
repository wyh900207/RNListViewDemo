'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import Styles from '../Styles/MainStyles'
import Dimensions from 'Dimensions'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class MovieListCell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <TouchableHighlight style={Styles.container} onPress={this.props.selectedRow} underlayColor='rgba(34, 26, 38, 0.1)'>
        <View>
          <View style={Styles.contentStyle}>
            <Image source={{url: this.props.rowdata.picBig}} style={Styles.imageStyle} />
            <Text style={Styles.centerText}>
              {this.props.rowdata.description}
            </Text>
          </View>
          <View style={{width: width, height: 1, backgroundColor:'rgba(34, 26, 38, 0.1)'}}></View>
        </View>
      </TouchableHighlight>
    );
  };
}