import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export async function asyncGetPokemonInformations(name) {
    const response = await api.get(`pokemon/${name}`);
    return response;
}

/**
 * Busca um pokémon específico pelo nome ou ID
 * 
 * @param {string | int} indentification 
 * 
 */
export async function getPokemons(indentification) {
    const response = await api.get(`/pokemon/${indentification}`);
    return response;
}