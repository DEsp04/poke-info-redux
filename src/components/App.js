import React from 'react';
import PokemonList from './PokemonList';
import PokemonInfo from "./PokemonInfo";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



const App = () => { 
  return (
    <Router>
      <Switch>
        <h1>Poke-Info with Redux</h1>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemon-info" component={ PokemonInfo} />
      </Switch>  
    </Router>
  )
}

export default App;