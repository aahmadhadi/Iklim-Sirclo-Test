import React from 'react';
import {Text, View} from 'react-native';
import styles from './SplashScreenStyle';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('RootScreen');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>IKLIM</Text>
        </View>
      </View>
    );
  }
}
