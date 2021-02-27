import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';






function PokemonList(props) { 

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
        <div>
          <p key={pokemon.name}>{pokemon.name}</p>
        </div>
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


export default connect(mapStateToProps, {fetchPokemons: fetchPokemons})(PokemonList);