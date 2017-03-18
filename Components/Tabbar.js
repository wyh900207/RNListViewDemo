'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TabBarIOS,
} from 'react-native';
import Styles from '../Styles/MainStyles';
import Dimensions from 'Dimensions';
import Icons from '../Assert/Icons';
import Featured from './Featured';
import MostView from './MostView'

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state={
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
                          })
                        }}
                        >
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={{uri: Icons.mostViewed, scale: 4.6}}
                        title='第二个'
                        selected={this.state.selectedTab === 'most-viewed'}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'most-viewed'
                          });
                        }}
                        >
          <MostView />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}