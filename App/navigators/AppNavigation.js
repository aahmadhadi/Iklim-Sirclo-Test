import {createAppContainer, createStackNavigator} from 'react-navigation';

import RootScreen from '../containers/Root/RootScreen';
import WeatherScreen from '../containers/WeatherScreen/WeatherScreen';

const StackNavigator = createStackNavigator(
  {
    RootScreen,
    WeatherScreen,
  },
  {
    initialRouteName: 'RootScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
