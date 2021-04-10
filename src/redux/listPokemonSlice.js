import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonsList } from "../services/fetchPokemon";

let nextPrev = 0;

export const fetchList = createAsyncThunk(
  "pokemonList/fetchPokemonsList",

  async (next) => {

    console.log(next)
    console.log(nextPrev)
    
  

    if (next === "next") {
      nextPrev += 20;
    } else if (next === "prev"){
      nextPrev -= 20;
    }

    const data = await fetchPokemonsList(nextPrev);
     
    return data;
  }
);





const listSlice = createSlice({
  name: "pokemonList",
  initialState: {
    pokemons: [],
    status: null,
  },
  
  extraReducers: {
    [fetchList.pending]: (state, action) => {
      state.status = "loading pokemons...";
    },
    [fetchList.fulfilled]: (state, { payload }) => {
      state.pokemons = payload;
      state.status = "success!!!";
    },
    [fetchList.rejected]: (state, action) => {
      state.status = "error fail to load pokemons!"
    }
  }
});




export default listSlice.reducer;
