import React from 'react';
import { NavLink } from "react-router-dom"

export default function Pokemon(props) {

  console.log(props)

  return (
    
    <li>
      <NavLink
      to={{
        pathname: "/pokemonDescription",
        state: props
          ? {
              name: props.name,
              pokemonUrl: props.url, 
            }
          : {},
      }}
      >
        {props.name}
      </NavLink>
    </li>
    
  )
}
