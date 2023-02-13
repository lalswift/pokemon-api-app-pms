export const baseURL = `https://pokeapi.co/`;

export const getPokemonApiEndpoint = (limit, offset) => `api/v2/pokemon?limit=${limit}&offset=${offset}`;

export const getPokemonDetailsEndpoint = (id) => `api/v2/pokemon/${id}`;

export const getPokemonImages = (url) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url}.svg`;
