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
  TabBarIOS,
} from 'react-native';
import Styles from './Styles/MainStyles';
import MovieList from './Components/MovieList';
import Icons from './Assert/Icons';
import Dimensions from 'Dimensions';
import Featured from './Components/Featured';

export default class RNListViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    }
  }
  render() {
    return(
      <TabBarIOS barTintColor='darkslateblue' tintColor='white'>
        <TabBarIOS.Item icon={{uri: Icons.qrCode, scale: 14}} 
                        title='第一个'
                        selected={this.state.selectedTab === 'featured'} 
                        onPress={() => {
                          this.setState({
                            selectedTab: 'featured'
                          });
                        }}>
         
           <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={{uri: Icons.mostViewed, scale: 4.6}}
                        title='第二个'
                        selected={this.state.selectedTab === 'most-viewed'}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'most-viewed'
                          });
                        }}>
          <MovieList />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('RNListViewDemo', () => RNListViewDemo);
  