import {combineReducers} from 'redux';

import weather from './weather';

const appReducer = combineReducers({
  weather,
});

export default appReducer;
