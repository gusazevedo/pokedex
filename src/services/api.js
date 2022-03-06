import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export async function asyncGetPokemonList() {
    const response = await api.get('/pokemon?limit=20&offset=0');
    return response;
}

export async function asyncGetPokemonInformations(name) {
    const response = await api.get(`pokemon/${name}`);
    return response;
}