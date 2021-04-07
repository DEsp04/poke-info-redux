import { POKEMON_URL } from "./constants";
import axios from "axios";




export async function fetchPokemonsList() {
  const pokemonList = `${POKEMON_URL}pokemon/?offset=0&limit=20`;

  const results = await axios.get(pokemonList).then(
    ({ data }) => {
      return data.results;
    }
  );

  return results;
}