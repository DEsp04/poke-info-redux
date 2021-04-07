import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl } from "../redux/pokemonByUrlSlice";


export default function PokemonDescription(props) {
  console.log(props.location.state)
  console.log(props.location.state.pokemonUrl)

  const pokemonUrl = props.location.state.pokemonUrl;

  const requestPokemonInfo = useSelector((state) => {
    return state
  })

  console.log(requestPokemonInfo)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUrl(pokemonUrl))
  }, [dispatch])


  return (
    <div>
      <h2>PokemonDescription</h2>
      <h3>{props.location.state.name}</h3>
    </div>
  )
}
