import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../redux/searchPokemonSlice";


export default function PokemonList() {
  const pokemonListRequest = useSelector((state) => {
    return state
  })
  
  console.log(pokemonListRequest);

  return (
    <div>
      <h2>Pokemon List</h2>
    </div>
  )
}
