import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listStyle: {
    width: width,
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
  }
});