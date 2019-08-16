const initialState = {
  results: [],
  isLoading: false,
  isError: false,
};

// create a reducer for getting network from API
export default (weather = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER_PENDING': // in case when loading get data
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_WEATHER_REJECTED': // in case error network/else
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_WEATHER_FULFILLED': // in case successfuly get data
      return {
        ...state,
        isLoading: false,
        isError: false,
        results: action.payload.data,
      };
    default:
      return state;
  }
});
