import jsonApiCall from "../apis/jsonApiCall";



export const fetchPokemons = () => { 

  return async (dispatch) => { 
    const response = await jsonApiCall.get('pokemon/');

    dispatch({ type: "FETCH_POKEMONS", payload: response.data });
  }
}

export const fetchPokemonByName = (name) => { 

  return async (dispatch) => { 
    const response = await jsonApiCall.get(`pokemon/${name}`)

    dispatch({ type: "FETCH_POKE_INFO", payload: response.data });
  }

}