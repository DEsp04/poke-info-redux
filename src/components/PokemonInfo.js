import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonByName } from '../actions';
import { Link } from "react-router-dom";



function PokemonInfo(props) {
  // console.log(props)
  
  const loading = props.loading;
  const hasErrors = props.hasErrors;
  const info = props.info;

  useEffect(() => { 
    fetchPokemonByName();
  }, [])


  function renderInfo() { 
    if (loading) return <p>Loading Pokémon info...</p>
    if (hasErrors) return <p>Unable to display Pokémon</p>
    return <div><h2>{info.name}</h2></div>
  }

  return (
    <div>
      <Link to="/">
        Back
      </Link>
      {renderInfo()}
    </div>
  )
}



const mapStateToProps = (state) => ({
  loading: state.pokemonInfo.loading,
  info: state.pokemonInfo.info,
  hasErrors: state.pokemonInfo.hasErrors
})


export default connect(mapStateToProps, { fetchPokemonByName: fetchPokemonByName })(PokemonInfo);