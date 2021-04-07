import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl } from "../redux/pokemonByUrlSlice";


export default function PokemonDescription(props) {
  console.log(props.location.state)
  console.log(props.location.state.pokemonUrl)

  const pokemonUrl = props.location.state.pokemonUrl;

  const requestPokemonInfo = useSelector((state) => {
    return state.pokemonInfo
  })
  const status = useSelector((state) => {
    return state.pokemonInfo.status
  })

  console.log(status)
  // console.log(requestPokemonInfo.pokemonInfo)
  // console.log(requestPokemonInfo.pokemonInfo.types)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUrl(pokemonUrl))
  }, [dispatch])


  const renderPokemonInfo = () => {
    if (status === "success") {
      return (
      <div>
        <h2>PokemonDescription</h2>
        <h3>#{requestPokemonInfo.pokemonInfo.id} {props.location.state.name}</h3>
        <img
          src={requestPokemonInfo.pokemonInfo.sprites.front_default}
        />
      </div>
      )
    }
  }

  return (
    <div>
      {renderPokemonInfo()}
    </div>  
  )
}
