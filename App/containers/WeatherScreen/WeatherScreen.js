import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {getWeather} from '../../public/redux/action';
import {connect} from 'react-redux';

class WeatherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchData = () => {
    this.props.dispatch(getWeather('Jakarta'));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <View>
        <View>
          <Text>{this.props.navigation.getParam('name')}</Text>
        </View>
        <TouchableOpacity onPress={() => console.warn(this.props)}>
          <Text>hehe</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.result,
  };
};

export default connect(mapStateToProps)(WeatherScreen);
