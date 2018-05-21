import { FETCH_EVENT_SUCCESS, FETCH_FAILED } from './mapReducer';

export const chnageLocation = (latitude, longitude) => ({
  type: FETCH_EVENT_SUCCESS,
  latitude,
  longitude,
});
export const doFetchFailed = error => ({
  type: FETCH_FAILED,
  error,
});
