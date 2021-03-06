import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonsList } from "../services/fetchPokemon";

let nextPrev = 0;

export const fetchList = createAsyncThunk(
  "pokemonList/fetchPokemonsList",

  async (next) => {


    if (next === "next") {
      nextPrev += 20;
    } else if (next === "prev"){
      nextPrev -= 20;
    }

    console.log(nextPrev)
    
    const data = await fetchPokemonsList(nextPrev);
     
    return data;
  }
);





const listSlice = createSlice({
  name: "pokemonList",
  initialState: {
    pokemons: [],
    status: null,
    next: 0,
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
