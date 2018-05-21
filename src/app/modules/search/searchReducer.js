const initialState = {
  query: '',
  error: '',
  events: [],
};

export const QUERY_CHANGE = 'search/QUERY_CHANGE';

export const FETCH_SUCCESS = 'search/FETCH_SUCCESS';
export const FETCH_FAILED = 'search/FETCH_FAILED';


const reducer = (state = initialState, action) => {
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
export default reducer;

