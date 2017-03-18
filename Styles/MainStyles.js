'use strict';
import {StyleSheet} from 'react-native';
import ScreenSize from '../Utils/ScreenSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listStyle: {
    flex: 1,
    marginTop: 60,
    marginBottom: 49,
    width: ScreenSize.size.width,
  },
  contentStyle: {
    flexDirection: 'row',
    padding: 10,
  },
  centerText: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 10,
    color: 'rgba(1, 1, 1, 0.6)'
  },
  imageStyle: {
    width: 120,
    height: 68
  },
});