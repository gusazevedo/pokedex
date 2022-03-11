import { all, put, takeLatest } from 'redux-saga/effects';
import { asyncGetPokemonInformations, getPokemons } from '../../services/api';
import { pokeReducer } from './reducer';

function* asyncGetPokemons({ payload }) {
    try {
        yield put({ type: pokeReducer.IS_LOADING, payload: true });
        const { data } = yield getPokemons(payload);
        
        const pokemonList = data.result.forEach((pokemon) => {
            const coisa = () => yield asyncGetPokemonInformations(pokemon);
            console.log(coisa);
        });
        console.log('pokemonList', pokemonList);

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