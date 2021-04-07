import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./screens/Home";
import PokemonDescription from "./screens/PokemonDescription";




const App = () => { 
  return (
    <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/pokemonDescription" render={props => <PokemonDescription {...props} />} />
        </Switch>
    </div>
  )
}

export default App;