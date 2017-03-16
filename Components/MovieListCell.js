import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import Styles from '../Styles/MainStyles'

export default class MovieListCell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <TouchableHighlight style={Styles.container} onPress={this.props.selectedRow} underlayColor='rgba(34, 26, 38, 0.1)'>
        <View style={Styles.contentStyle}>
          <Image source={{url: this.props.rowdata.picBig}} style={Styles.imageStyle} />
          <Text style={Styles.centerText}>
            {this.props.rowdata.description}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };
}