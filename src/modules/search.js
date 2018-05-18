import * as eventbrite from '../eventbrite';

const initialState = {
  query: '',
  error: '',
  events: [],
};

const QUERY_CHANGE = 'search/QUERY_CHANGE';

const FETCH_SUCCESS = 'search/FETCH_SUCCESS';
const FETCH_FAILED = 'search/FETCH_FAILED';

export const doQueryChange = query => ({
  type: QUERY_CHANGE,
  query,
});

const doFetchSucces = events => ({
  type: FETCH_SUCCESS,
  events,
});

const doFetchFailed = error => ({
  type: FETCH_FAILED,
  error,
});


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_CHANGE:
      return {
        ...state,
        query: action.query,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        events: action.events,
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

export const search = query => (dispatch) => {
  dispatch(doQueryChange(query));
  eventbrite
    .fetchEventsByQuery(query)
    .then(({ ok, events }) => {
      if (ok) {
        dispatch(doFetchSucces(events));
      } else dispatch(doFetchFailed('cannot fetch Events'));
    })
    .catch(() => dispatch(doFetchFailed('cannot fetch Events')));
};
