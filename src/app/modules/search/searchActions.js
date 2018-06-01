import { ON_QUERY_CHANGE, FETCH_SUCCESS, FETCH_FAILED } from './searchReducer';

export const onQueryChange = query => ({
  type: ON_QUERY_CHANGE,
  query,
});

export const doFetchSucces = events => ({
  type: FETCH_SUCCESS,
  events,
});

export const doFetchFailed = error => ({
  type: FETCH_FAILED,
  error,
});
