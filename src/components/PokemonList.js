import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../redux/listPokemonSlice";
import Pokemon from "../components/Pokemon"

export default function PokemonList() {

  const pokemonListRequest = useSelector((state) => {
    return state.list.pokemons
  })
  
  console.log(pokemonListRequest)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch])


  const renderPokemonList = () => {
    return pokemonListRequest.map((pokemon, index) => {
      return <Pokemon {...pokemon} key={index} />
    });
  }


  
  return (
    <div>
      <h2>Pokemon List</h2>
      <div className="prevNextButtons">
        <button>Prev</button>
        <button>Next</button>
        
      </div>
      <ul>
        {renderPokemonList()}
      </ul>
    </div>
  )
}
