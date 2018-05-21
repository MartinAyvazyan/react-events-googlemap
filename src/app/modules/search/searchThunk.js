import * as eventbrite from '../../../eventbrite';
import { doQueryChange, doFetchSucces, doFetchFailed } from './searchActions';


const search = query => (dispatch) => {
  dispatch(doQueryChange(query));
  if (query) {
    eventbrite
      .fetchEventsByQuery(query)
      .then(({ ok, events }) => {
        if (ok) {
          dispatch(doFetchSucces(events));
        } else dispatch(doFetchFailed('cannot fetch Events'));
      })
      .catch(() => dispatch(doFetchFailed('cannot fetch Events')));
  }
};
export default search;
