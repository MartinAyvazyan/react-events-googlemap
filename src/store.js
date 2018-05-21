import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './app/modules/reducer';

// Redux Dev Tools
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

if (module.hot) {
  module.hot.accept('./app/modules/reducer', () => {
    store.replaceReducer(reducer);
  });
}
