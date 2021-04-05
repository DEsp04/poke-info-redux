import { POKEMON_URL } from "./constants";
import axios from "axios";




export async function fetchPokemonsList() {
  const pokemonList = `${POKEMON_URL}/pokemon/?offset=20&limit=20`;

  const results = await axios.get(pokemonList).then(
    ({ data }) => {
      console.log(data)
    }
  );

  return results;
}