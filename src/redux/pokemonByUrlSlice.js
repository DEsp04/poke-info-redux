import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonByUrl } from "../services/fetchByUrl";


export const fetchUrl = createAsyncThunk();



const pokemonUrlSlice = createSlice({})