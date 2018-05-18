import { combineReducers } from 'redux';

import { reducer as search } from './search';

export default combineReducers({
  search,
});
