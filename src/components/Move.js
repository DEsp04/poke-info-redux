import React from 'react'




export default function Moves(props) {

  console.log(props.move.name)

  
  
  return (
    <li>{props.move.name}</li>
  )
}
