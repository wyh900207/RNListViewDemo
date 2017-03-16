import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import Styles from '../Styles/MainStyles';
import MovieList from './MovieList';

export default class Featured extends Component {
  render() {
    return(
      <NavigatorIOS style={{backgroundColor: '#F5FCFF', flex: 1}} titleTextColor='white' barTintColor='darkslateblue' shadowHidden={true} initialRoute={{
        title: '推荐电影',
        component: MovieList
      }} />
    );
  };
}