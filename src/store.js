import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from './app/modules/reducer';
import rootSaga from './app/modules/sagas';
// Redux Dev Tools
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;

if (module.hot) {
  module.hot.accept('./app/modules/reducer', () => {
    store.replaceReducer(reducer);
  });
}
