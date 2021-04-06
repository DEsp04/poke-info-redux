import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchPokemonSlice";


export default configureStore({
  reducer: {
    searches: searchReducer,
  }
})