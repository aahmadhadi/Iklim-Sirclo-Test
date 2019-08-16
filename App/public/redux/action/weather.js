import axios from 'axios';
import weather from '../reducers/weather';

const {url, appid} = require('../../../config/config');

export const getWeather = name => {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(
      `${url}mode=json&units=metric&cnt=5&appid=${appid}&q=${name}`,
    ),
  };
};
