import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listPokemonSlice";
import urlReducer from "./pokemonByUrlSlice";


export default configureStore({
  reducer: {
    list: listReducer,
    pokemonInfo: urlReducer,
  }
})