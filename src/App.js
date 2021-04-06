import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./screens/Home";
import PokemonDescription from "./screens/PokemonDescription";




const App = () => { 
  return (
    <div>
      <h1>Poke-Info Redux</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemonDescription">
            <PokemonDescription />
          </Route>
        </Switch>
    </div>
  )
}

export default App;