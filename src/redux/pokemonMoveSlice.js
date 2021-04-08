import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonMoves } from "../services/fetchMoves";



export const fetchMove = createAsyncThunk(
  "pokemonMove/fetchMove",
  async (url) => {
    const data = await fetchPokemonMoves(url);

    console.log(url)
    console.log("hello")

    return data;
    }
);


const pokemonMovesSlice = createSlice({
  name: "pokemonMove",
  initialState: {
    pokemonMove: [],
    status: null,
  },
  extraReducers: {
    [fetchMove.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMove.fulfilled]: (state, { payload }) => {
      state.pokemonMove = payload;
      state.status = "success";
    },
    [fetchMove.rejected]: (state, actions) => {
      state.status = "failed";
    },
  },
  }
);


export default pokemonMovesSlice.reducer;