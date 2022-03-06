import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export async function getPokemons() {
    const result = await instance.get('pokemon?limit=30&offset=0');
    return result;
}