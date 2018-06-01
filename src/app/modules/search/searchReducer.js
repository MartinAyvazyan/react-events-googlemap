const initialState = {
  error: '',
  events: [],
};

export const ON_QUERY_CHANGE = 'search/ON_QUERY_CHANGE';

export const FETCH_SUCCESS = 'search/FETCH_SUCCESS';
export const FETCH_FAILED = 'search/FETCH_FAILED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
export default reducer;
