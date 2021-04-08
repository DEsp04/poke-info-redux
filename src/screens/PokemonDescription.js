import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl } from "../redux/pokemonByUrlSlice";
import Move from "../components/Move";


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
  console.log(requestPokemonInfo.pokemonInfo)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUrl(pokemonUrl))
  }, [dispatch])

  const pokemonType = () => {
    if (status === "success") {
      return requestPokemonInfo.pokemonInfo.types.map((type, index) => {
        return <li key={index}>{type.type.name}</li>
      })
    }
  }

  const pokemonStat = () => {
    if (status === "success") {
      return requestPokemonInfo.pokemonInfo.stats.map((stat, index) => {
        return <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
      })
    }
  }

  


  const pokemonMoves = () => {
    if (status === "success") {
      return requestPokemonInfo.pokemonInfo.moves.map((move, index) => {
        console.log(move)
        return <Move {...move} key={index} />
      })
    }
  }

  const renderPokemonInfo = () => {
    if (status === "success") {
      return (
      <div>
        <h2>PokemonDescription</h2>
        <h3>#{requestPokemonInfo.pokemonInfo.id} {props.location.state.name}</h3>
        <div className="heighWeight">
          <p>Height: {requestPokemonInfo.pokemonInfo.height / 10}m</p>
          <p>Weight: {requestPokemonInfo.pokemonInfo.weight / 10}kg</p>
        </div>
        <img
          src={requestPokemonInfo.pokemonInfo.sprites.front_default}
          />
        <div className="pokemonType">
          <p>Type:</p>
          <ul>{pokemonType()}</ul>
        </div>
        <div className="pokemonStat">
          <p>Stats:</p>
          <ul>{pokemonStat()}</ul>
        </div>
        <div className="pokemonMoves">
          <p>Moves:</p>
          <ul>{pokemonMoves()}</ul>
        </div>
      </div>
      )
    }
  }

  return (
    <div>
      {renderPokemonInfo()}
      <div>
      </div>
    </div>  
  )
}
