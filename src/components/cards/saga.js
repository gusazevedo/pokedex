import { all, put, takeLatest, call } from 'redux-saga/effects';
import { asyncGetPokemonInformations, getPokemons } from '../../services/api';
import { pokeReducer } from './reducer';

function* asyncGetPokemons({ payload }) {
    try {
        yield put({ type: pokeReducer.IS_LOADING, payload: true });
        const { data } = yield getPokemons(payload);
        const results = yield all(
            data.results.map((e) => call(asyncGetPokemonInformations, e.name))
        );
        const pokeList = results.map((e) => e.data);
        yield put({ type: pokeReducer.SET_POKEMON_LIST, payload: pokeList });
    } catch (err) {
        console.log('erro ao montar lista de pokémons', err);
    } finally {
        yield put({ type: pokeReducer.IS_LOADING, payload: false });
    }
}

export default function* mySaga() {
    yield all([
        takeLatest(pokeReducer.ASYNC_GET_POKEMON_LIST, asyncGetPokemons),
    ]);
}
