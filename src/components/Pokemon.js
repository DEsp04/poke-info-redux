import React from 'react';
import { NavLink } from "react-router-dom";
import Image from "./Image"

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
        <Image {...props} />
        {props.name}
      </NavLink>
    </li>
    
  )
}
