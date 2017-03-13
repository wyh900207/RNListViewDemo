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
  ActivityIndicator,
} from 'react-native';
import GoddessDayCell from './GoddessDayCell'
import LoadingButton from './LoadingButton'
import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      loaded: false
    }
  }
  fetchData() {
    let url = 'http://www.imooc.com/api/teacher?type=4&num=30';
    fetch(url)
    .then((response) => response.json())
    .then((resonpseJson) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resonpseJson.data),
        loaded: true
      });
    })
    .done();
  }
  componentDidMount() {
    this.fetchData();
  }
  renderLoadingView() {
    return(
      <ActivityIndicator size='large' style={styles.container} />
    );
  }
  _renderRow(rowData) {
    return(
      <GoddessDayCell rowData={ rowData } />
    );
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <View style={styles.container}>
        <ListView style={ styles.listView } 
                  dataSource={ this.state.dataSource } 
                  renderRow={ (rowData) => this._renderRow(rowData) }
                  />
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
  listView: {
    marginTop: 20,
    width: width,
  },
});