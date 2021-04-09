import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl } from "../redux/pokemonByUrlSlice";


export default function Image(props) {

  console.log(props)
  const pokemonUrl = props.url

  const requestPokemonInfo = useSelector((state) => {
    return state.pokemonInfo
  })
  const status = useSelector((state) => {
    return state.pokemonInfo.status
  })


  return (
    
      <p>hello</p>

  )
}
