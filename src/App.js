import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



const App = () => { 
  return (
    <div>
      <h1>Poke-Info Redux</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon-info" component={PokemonInfo} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;