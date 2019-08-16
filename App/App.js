import React, {Component} from 'react';
import AppNavigation from './navigators/AppNavigation';
import store from './public/redux/store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
