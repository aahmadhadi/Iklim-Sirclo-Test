import React from 'react';
import {Text, View} from 'react-native';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <View>
        {this.props.data.map(data => {
          return (
            <View>
              <Text>{data.dt_txt}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
