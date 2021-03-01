import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonByName } from '../actions';




function PokemonInfo(props) {
  console.log(props)


  useEffect(() => { 
    fetchPokemonByName();
  }, [])


  // const pokemonInfo = props.pokemonInfo.info;

  // if (!pokemonInfo) { 
  //   return null;
  // }

  function renderInfo() { 
    // if (loading) return <p>Loading Pokémon info...</p>
    // if (hasErrors) return <p>Unable to display Pokémon</p>
    return (
      <div>
        <h2>info.name</h2>
      </div>
    )
  }



  return (
    <div>{renderInfo()}</div>
  )
}

//each time we select a pokemon, the json keeps adding up to the array in the reducer
// const mapStateToProps = (state) => {
//   return {pokemonInfo: state.pokemonInfo }
// }


const mapStateToProps = (state) => ({
  loading: state.pokemonInfo.loading,
  info: state.pokemonInfo.info,
  hasErrors: state.pokemonInfo.hasErrors
})


export default connect(mapStateToProps, { fetchPokemonByName: fetchPokemonByName })(PokemonInfo);