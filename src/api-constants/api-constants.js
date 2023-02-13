
export const baseURL = `https://pokeapi.co/`;
export const getPokemonApiEndpoint = (limit, offset) => `api/v2/pokemon?limit=${limit}&offset=${offset}`;
export const getPokemonDetailsEndpoint = (id) => `api/v2/pokemon/${id}`;
