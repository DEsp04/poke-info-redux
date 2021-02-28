import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';
import { fetchPokemonByName } from '../actions';
import { Link } from "react-router-dom";





function PokemonList(props) {
  console.log(props)

  useEffect(() => { 
    props.fetchPokemons();
  }, [])


  const pokemons = props.pokemons.results;

  //pokemon is empty array return null
  if (!pokemons) { 
    return null
  }

  function renderList(){
    return pokemons.map(pokemon => { 
      return (
        <Link to="/pokemon-info">
          <p onClick={() => props.fetchPokemonByName(pokemon.name)} key={pokemon.name}>{pokemon.name}</p>
        </Link>
      )
    })
  }




  return (
    <div>{renderList()}</div>
  )
}




const mapStateToProps = (state) => { 
  return {pokemons: state.pokemonLists}
}


export default connect(mapStateToProps, {fetchPokemons: fetchPokemons, fetchPokemonByName: fetchPokemonByName})(PokemonList);