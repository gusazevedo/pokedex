import { pokeReducer } from "./reducer";

export const asyncMakePokemonList = (payload) => ({
    type: pokeReducer.ASYNC_GET_POKEMON_LIST,
    payload,
});