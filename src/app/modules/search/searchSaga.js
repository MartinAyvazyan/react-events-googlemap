import { call, put, takeLatest } from 'redux-saga/effects';
import * as eventbrite from '../../../eventbrite';
import { doFetchSucces, doFetchFailed } from './searchActions';
import { ON_QUERY_CHANGE } from './searchReducer';

function* fetchData({ query }) {
  try {
    const data = yield call(eventbrite.fetchEventsByQuery, query);
    yield put(doFetchSucces(data.events));
  } catch (error) {
    yield put(doFetchFailed(error));
  }
}

export default function* search() {
  yield takeLatest(ON_QUERY_CHANGE, fetchData);
}
