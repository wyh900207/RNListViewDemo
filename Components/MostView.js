import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import Styles from '../Styles/MainStyles';
import MovieList from './MovieList';

export default class MostView extends Component {
  render() {
    return(
      <NavigatorIOS style={{backgroundColor: '#F5FCFF', flex: 1}} titleTextColor='white' barTintColor='darkslateblue' shadowHidden={true} initialRoute={{
        title: '第二个Tab',
        component: MovieList
      }} />
    );
  };
}