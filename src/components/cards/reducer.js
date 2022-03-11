export const pokeReducer = {
    IS_LOADING: '@pokeReducer/IS_LOADING',
    SET_POKEMON_LIST: '@pokeReducer/SET_POKEMON_LIST',
    ASYNC_GET_POKEMON_LIST: '@PpokeReducer/ASYNC_GET_POKEMON_LIST',
};

const INITIAL_STATE = {
    loading: false,
    pokemonList: [],
    pokemonToSearch: '',
};

function reducer(state = INITIAL_STATE, { type, payload }) {
    switch(type) {
        case pokeReducer.IS_LOADING:
            return {...state, loading: payload};
        case pokeReducer.SET_POKEMON_LIST:
            return {...state, pokemonList: payload};
        case pokeReducer.ASYNC_GET_POKEMON_LIST:
            return {...state, pokemonList: payload};
        default:
            return state;
    }
}

export default reducer;