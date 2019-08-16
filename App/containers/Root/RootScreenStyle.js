import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  cityList: {
    width: width * 0.9,
    height: width * 0.9 * 0.3,
    margin: width * 0.05,
    borderRadius: 5,
    backgroundColor: '#36465D',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  cityName: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFF',
  },
});
