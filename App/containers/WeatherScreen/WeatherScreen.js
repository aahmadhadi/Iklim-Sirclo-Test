import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';

import {getWeather} from '../../public/redux/action';
import {connect} from 'react-redux';

import Card from '../../components/card/Card';
class WeatherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      city: this.props.navigation.getParam('name'),
    };
  }

  componentDidMount = () => {
    this.props.dispatch(getWeather(this.state.city)).then(result => {
      this.setState({data: this.props.weather});
    });
  };

  weatherList() {
    this.state.data.list.map(data => {
      return (
        <View>
          <Text>{data.dt}a</Text>
        </View>
      );
    });
  }
  render() {
    if (!this.state.data) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <View>
          <Text>{this.state.city}</Text>
        </View>
        <Card data={this.state.data.list} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather.results,
  };
};

export default connect(mapStateToProps)(WeatherScreen);
