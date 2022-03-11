import { createStore, compose, applyMiddleware } from 'redux';
import RootSaga from './root-saga';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
    rootReducer
);

sagaMiddleware.run(RootSaga);
export default store;
