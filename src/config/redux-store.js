import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
)(createStore)(rootReducer);

sagaMiddleware.run(RootSaga);
export default store;
