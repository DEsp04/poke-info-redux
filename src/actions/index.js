import jsonApiCall from "../apis/jsonApiCall";



export const fetchPokemons = () => { 




  

  return async (dispatch) => { 
    const response = await jsonApiCall.get('pokemon/');


    dispatch({type: "FETCH_POKEMONS", payload: response.data})
  }
}