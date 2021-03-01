import jsonApiCall from "../apis/jsonApiCall";
import _ from 'lodash';


export const GET_INFO = "GET_INFO";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_FAILURE = "GET_INFO_FAILURE";


export const getInfo = () => ({
  type: GET_INFO
})

export const getInfoSuccess = (info) => ({
  type: GET_INFO_SUCCESS,
  payload: info
})

export const getInfoFailure = () => ({
  type: GET_INFO_FAILURE,
})




export const fetchPokemons = () => { 

  return async (dispatch) => { 
    const response = await jsonApiCall.get('pokemon/');

    dispatch({ type: "FETCH_POKEMONS", payload: response.data });
  }
}

// export const fetchPokemonByName = (name) => { 
//   return async (dispatch) => { 
//     const resp = await jsonApiCall.get(`pokemon/${name}/`)

//     dispatch({ type: "FETCH_POKE_INFO", payload: resp.data });
//   }

// }


export const fetchPokemonByName = (name) => { 

  return async (dispatch) => { 
    dispatch(getInfo())
    
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      const data = await response.json();
    
      dispatch(getInfoSuccess(data));
    } catch(error) { 
      dispatch(getInfoFailure());
    }
  }
}