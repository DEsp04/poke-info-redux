import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonByUrl } from "../services/fetchByUrl";


export const fetchUrl = createAsyncThunk(
  "pokemonUrl/fetchUrl",
  async (url) => {
    console.log(url)
    const data = await fetchPokemonByUrl(url);

    return data;
  }
);



const pokemonUrlSlice = createSlice({
  name: "pokemonUrl",
  initialState: {
    pokemonInfo: [],
    status: null,
  },

  extraReducers: {
    [fetchUrl.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUrl.fulfilled]: (state, { payload }) => {
      state.pokemonInfo = payload;
      state.status = "success";
    },
    [fetchUrl.rejected]: (state, actions) => {
      state.status = "failed";
    },
  },
});


export default pokemonUrlSlice.reducer;