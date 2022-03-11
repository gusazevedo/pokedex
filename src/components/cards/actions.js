import { pokeReducer } from "./reducer";

export const asyncMakePokemonList = (payload) => {
    console.log('actions');
    return {
        type: pokeReducer.ASYNC_GET_POKEMON_LIST,
        payload,
    }
};