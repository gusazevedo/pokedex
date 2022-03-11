import { all } from 'redux-saga/effects';
import CardsSaga from '../components/cards/saga';

export default function* RootSaga() {
    yield all([
        CardsSaga()
    ]);
}