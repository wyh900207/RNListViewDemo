import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class GoddessDayCell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={ styles.container }>
        <Text style={{padding: 10}}>
          { this.props.rowData.name }
        </Text>
        <Image style={{ flex: 1, width: 300, height: 170 }} source={{uri: this.props.rowData.picSmall}} />
      </View>
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
  imageStyle: {
    paddingLeft: 10,
    width: 300,
    height: 170,
  },
});