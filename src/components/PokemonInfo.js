import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonByName } from '../actions';




function PokemonInfo(props) {
  

  useEffect(() => { 
    props.fetchPokemonByName();
  }, [])


  const pokemonInfo = props.pokemonInfo.info;

  if (!pokemonInfo) { 
    return null;
  }

  function renderInfo(){ 
    return (
      <div>
        <h2>{pokemonInfo.name}</h2>
      </div>
    )
  }



  return (
    <div>{renderInfo()}</div>
  )
}

//each time we select a pokemon, the json keeps adding up to the array in the reducer
const mapStateToProps = (state) => {
  return {pokemonInfo: state.pokemonInfo }
}

export default connect(mapStateToProps, { fetchPokemonByName: fetchPokemonByName })(PokemonInfo);