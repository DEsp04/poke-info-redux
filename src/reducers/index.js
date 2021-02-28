import { combineReducers } from "redux";
import pokemonsReducers from "./pokemonsReducers";
import pokeInfoReducer from "./pokeInfoReducer";



export default combineReducers({
  pokemonLists: pokemonsReducers,
  pokemonInfo: pokeInfoReducer
})



