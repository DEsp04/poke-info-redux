import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonsList } from "../services/fetchPokemon";


export const fetchList = createAsyncThunk(
  "pokemonList/fetchPokemonsList",

  async (next) => {
    console.log(next)

    const data = await fetchPokemonsList(next);
     
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
