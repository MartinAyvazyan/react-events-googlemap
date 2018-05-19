import { combineReducers } from 'redux';

import { reducer as search } from './search';
import { reducer as map } from './map';


export default combineReducers({
  search,
  map,
});
