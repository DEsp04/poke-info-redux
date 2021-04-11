import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../redux/listPokemonSlice";
import { increment, decrement } from "../redux/counterSplice"
import Pokemon from "../components/Pokemon"

export default function PokemonList() {

  const pokemonListRequest = useSelector((state) => {
    return state
  })

  const nextList = useSelector((state) => state.counter);
  
  console.log(pokemonListRequest)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList());
  }, [])


  const renderPokemonList = () => {
    return pokemonListRequest.list.pokemons.map((pokemon, index) => {
      return <Pokemon {...pokemon} key={index} />
    });
  }

  const handleNextList = () => {
    dispatch(fetchList("next"));
    dispatch(increment(20));
  }

  const handlePrevList = () => {
    dispatch(fetchList("prev"));
    dispatch(decrement(20));
  }

  console.log(nextList)

  // const buttons = () => {
  //   if (next > 0) {
  //     return (
  //       <div className="prevNextButtons">
  //         <button onClick={handlePrevList}>Prev</button>
  //         <button onClick={handleNextList}>Next</button>
  //       </div>
  //     ) 
  //   }
  //   else if (next === 1100) {
  //     return (
  //       <div className="prevNextButtons">
  //         <button onClick={handlePrevList}>Prev</button>
  //       </div>
  //     )
  //   } else if (next === 0) {
  //       return (
  //         <div className="prevNextButtons">
  //           <button onClick={handleNextList}>Next</button>
  //         </div>
  //       )
  //   } 
  // }

  
  
  return (
    <div>
      <h2>Pokemon List</h2>
      {/* {buttons()} */}
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
