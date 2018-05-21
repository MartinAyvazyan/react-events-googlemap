const initialState = {
  latitude: '40.17',
  longitude: '44.29',
  error: '',
};
export const FETCH_EVENT_SUCCESS = 'map/FETCH_EVENT_SUCCESS';
export const FETCH_FAILED = 'map/FETCH_FAILED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
