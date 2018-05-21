import * as eventbrite from '../../../eventbrite';

import { chnageLocation, doFetchFailed } from './mapActions';

const searchInMap = id => (dispatch) => {
  eventbrite
    .fetchOneEvent(id)
    .then(({ ok, venue }) => {
      if (ok) {
        dispatch(chnageLocation(venue.latitude, venue.longitude));
      } else dispatch(doFetchFailed('cannot fetch event1'));
    })
    .catch(() => dispatch(doFetchFailed('cannot fetch event2')));
};

export default searchInMap;
