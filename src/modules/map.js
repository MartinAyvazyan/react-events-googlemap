import * as eventbrite from '../eventbrite';

const initialState = {
  latitude: '40.17',
  longitude: '44.29',
  error: '',
};

const FETCH_SUCCESS_1 = 'map/FETCH_SUCCESS_1';
const FETCH_FAILED = 'map/FETCH_FAILED';

const chnageLocation = (latitude, longitude) => ({
  type: FETCH_SUCCESS_1,
  latitude,
  longitude,
});
const doFetchFailed = error => ({
  type: FETCH_FAILED,
  error,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_1:
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

export const searchInMap = id => (dispatch) => {
  console.log(id);
  eventbrite
    .fetchOneEvent(id)
    .then(({ ok, venue }) => {
      if (ok) {
        //console.log( typeof (venue.latitude));
        dispatch(chnageLocation(venue.latitude, venue.longitude));
      } else dispatch(doFetchFailed('cannot fetch event1'));
    })
    .catch(() => dispatch(doFetchFailed('cannot fetch event2')));
};
