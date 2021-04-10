import { POKEMON_URL } from "./constants";
import axios from "axios";




export async function fetchPokemonsList(next) {
  const pokemonList = `${POKEMON_URL}pokemon/?offset=${next}&limit=20`;

  const results = await axios.get(pokemonList).then(
    ({ data }) => {
      return data.results;
    }
  );

  return results;
}