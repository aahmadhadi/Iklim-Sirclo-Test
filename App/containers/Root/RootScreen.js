import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './RootScreenStyle';
import cities from '../../src/dummy/Cities';

export default class RootScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities,
    };
  }

  _keyExtractor = (item, index) => item.id;

  getDetail = name => {
    this.props.navigation.navigate('WeatherScreen', {name});
  };
  _renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => this.getDetail(item.name)}
      style={styles.cityList}>
      <Text style={styles.cityName}>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CHOOSE THE CITY</Text>
        </View>
        <FlatList
          data={this.state.cities}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
