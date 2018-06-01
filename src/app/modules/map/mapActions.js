import { FETCH_EVENT_SUCCESS, FETCH_FAILED, ON_BUTTON_CLICK } from './mapReducer';

export const onButtonCLick = id => ({
  type: ON_BUTTON_CLICK,
  id,
});

export const chnageLocation = (latitude, longitude) => ({
  type: FETCH_EVENT_SUCCESS,
  latitude,
  longitude,
});
export const doFetchFailed = error => ({
  type: FETCH_FAILED,
  error,
});
