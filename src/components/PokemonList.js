import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../redux/listPokemonSlice";
import Pokemon from "../components/Pokemon"

export default function PokemonList() {

  const [next, setNext] = useState(0)
  const pokemonListRequest = useSelector((state) => {
    return state.list.pokemons
  })
  
  // console.log(pokemonListRequest)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList());
  }, [])


  const renderPokemonList = () => {
    return pokemonListRequest.map((pokemon, index) => {
      return <Pokemon {...pokemon} key={index} />
    });
  }

  const handleNextList = () => {
    // setNext(nextCount => nextCount + 20);
    dispatch(fetchList("next"));
  }

  const handlePrevList = () => {
    // setNext(prevCount => prevCount - 20);
    dispatch(fetchList("prev"));
  }

  
  
  return (
    <div>
      <h2>Pokemon List</h2>
      <div className="prevNextButtons">
        <button onClick={handlePrevList}>Prev</button>
        <button onClick={handleNextList}>Next</button>
        
      </div>
      <ul>
        {renderPokemonList()}
      </ul>
    </div>
  )
}
