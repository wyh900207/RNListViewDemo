'use strict'
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';
import Dimensions from 'Dimensions';
import Styles from '../Styles/MainStyles';
import LoadingView from './LoadingView';
import MovieListCell from './MovieListCell';
import MovieDetail from './MovieDetail';

// 请求的URL
const REQUEST_URL = 'http://www.imooc.com/api/teacher?type=4&num=30';

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
    fetch(REQUEST_URL)
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
  showDetail(rowData) {
    self.props.navigator.push({
      title: '子页面',
      component: <MovieDetail />
    });
  }
  _renderRow(rowdata) {
    return(
      <MovieListCell rowdata={rowdata} selectedRow={() => this.showDetail(rowdata)} selectedRow={() => this._onPressRow(rowdata)} />
    );
  }
  _onPressRow(rowdata) {
    this.props.navigator.push({
      title: rowdata.name,
      component: MovieDetail,
      passProps: {rowdata}
    });
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