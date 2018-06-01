import { call, put, takeLatest } from 'redux-saga/effects';
import * as eventbrite from '../../../eventbrite';
import { chnageLocation, doFetchFailed } from './mapActions';
import { ON_BUTTON_CLICK } from './mapReducer';

function* fetchData({ id }) {
  try {
    const data = yield call(eventbrite.fetchOneEvent, id);
    yield put(chnageLocation(data.venue.latitude, data.venue.longitude));
  } catch (error) {
    console.log(error);
    yield put(doFetchFailed(error));
  }
}

export default function* map() {
  yield takeLatest(ON_BUTTON_CLICK, fetchData);
}
