import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMove } from "../redux/pokemonMoveSlice";



export default function Moves(props) {

  const moveUrl = props.move.url;
  console.log(moveUrl)

  const requestPokemonMove = useSelector((state) => {
    return state.move.pokemonMove
  })

  const status = useSelector((state) => {
    return state.move.status
  })

  console.log(requestPokemonMove)

  function moveInfo () {
    if (status === "success") {
      let info = requestPokemonMove.effect_entries[0].effect;
      
      return info;
    }
  }

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMove(props.move.name))
  // }, [dispatch])


  
  
  return (
    <li>{props.move.name}: </li>
  )
}
