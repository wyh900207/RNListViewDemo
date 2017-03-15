import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';
import Dimensions from 'Dimensions'
import Styles from '../Styles/MainStyles'
import LoadingView from './LoadingView'
import MovieListCell from './MovieListCell'

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 
    this.state = {
      dataSource: ds,
      loaded: false
    };
  }
  fetchData() {
    let url = 'http://www.imooc.com/api/teacher?type=4&num=30';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.data),
        loaded: true
      });
    })
    .done();
  }
  componentDidMount() {
    this.fetchData();
  }
  _renderRow(rowdata) {
    return(
      <MovieListCell rowdata={rowdata} />
    );
  }
  _renderLoadingView() {
    return(
      <LoadingView />
    );
  }
  render() {
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }
    return(
      <View style={Styles.container}>
        <ListView dataSource={this.state.dataSource}
                  renderRow={(rowdata) => this._renderRow(rowdata)}
                  style={Styles.listStyle}
                  />
      </View>
    );
  }
}