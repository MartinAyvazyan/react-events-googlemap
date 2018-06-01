const initialState = {
  latitude: '40.17',
  longitude: '44.29',
  buttonCLicked: false,
  error: '',
};
export const ON_BUTTON_CLICK = 'map/ON_BUTTON_CLICK';
export const FETCH_EVENT_SUCCESS = 'map/FETCH_EVENT_SUCCESS';
export const FETCH_FAILED = 'map/FETCH_FAILED';

const reducer = (state = initialState, action) => {
  // ATTEMPT_FETCH_EVENTS
  switch (action.type) {
    case ON_BUTTON_CLICK:
      return {
        ...state,
        buttonCLicked: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        buttonCLicked: false,
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        buttonCLicked: false,
      };
    default:
      return state;
  }
};

export default reducer;
