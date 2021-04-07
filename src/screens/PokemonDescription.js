import React from 'react'

export default function PokemonDescription(props) {
  console.log(props.location.state)


  return (
    <div>
      <h2>PokemonDescription</h2>
      <h3>{props.location.state.name}</h3>
    </div>
  )
}
