import { all } from 'redux-saga/effects';
import search from './search/searchSaga';
import map from './map/mapSaga';

export default function* rootSaga() {
  yield all([search(), map()]);
}
