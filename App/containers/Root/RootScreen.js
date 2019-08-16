import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

export default class RootScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          id: 1,
          name: 'Jakarta',
        },
        {
          id: 2,
          name: 'Bandung',
        },
      ],
    };
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          numColumns={2}
          data={this.state.cities}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
