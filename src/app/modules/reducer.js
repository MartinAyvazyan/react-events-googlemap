import { combineReducers } from 'redux';

import search from './search/searchReducer';
import map from './map/mapReducer';


export default combineReducers({
  search,
  map,
});
