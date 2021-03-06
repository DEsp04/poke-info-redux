import axios from "axios";



export async function fetchPokemonByUrl(url) {

  const results = await axios.get(url).then(({ data }) => {
    return data
  });
  return results;
}