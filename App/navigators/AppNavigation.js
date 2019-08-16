import {createAppContainer, createStackNavigator} from 'react-navigation';

import RootScreen from '../containers/Root/RootScreen';
import SplashScreen from '../containers/SplashScreen/SplashScreen';

const StackNavigator = createStackNavigator(
  {
    SplashScreen,
    RootScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
