import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listPokemonSlice";
import urlReducer from "./pokemonByUrlSlice";
import moveReducer from "./pokemonMoveSlice";
import counterReducer from "./counterSplice";


export default configureStore({
  reducer: {
    list: listReducer,
    pokemonInfo: urlReducer,
    move: moveReducer,
    counter: counterReducer,
  }
})