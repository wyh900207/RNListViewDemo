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
    fontSize: 15,
    padding: 10,
    paddingTop: 0,
    flexWrap: 'wrap'
  },
  imageStyle: {
    width: 120,
    height: 68
  }
});