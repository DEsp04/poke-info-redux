import React from 'react'
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMove } from "../redux/pokemonMoveSlice";
import axios from "axios";



export default function Moves(props) {
  const [moveDescrip, setMoveDescrip] = useState(undefined);

  let moveUrl = props.move.url;
  // console.log(moveUrl)

  const fetchDescription = async () => {
    const response = await axios.get(moveUrl);
    setMoveDescrip(response.data)
  }

  useEffect(() => { 
    fetchDescription();
  }, [])

  // console.log(moveDescrip)

//Below is the code using redux tool kit but we get double of move
  // const requestPokemonMove = useSelector((state) => {
  //   return state.move.pokemonMove
  // })

  // const status = useSelector((state) => {
  //   return state.move.status
  // })

  // console.log(requestPokemonMove)


  // function moveInfo () {
  //   if (status === "success") {
  //     let info = requestPokemonMove.effect_entries[0].effect;
      
  //     return info;
  //   }
  // }

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMove(moveUrl))
  // }, [])



  

  
  if (moveDescrip !== undefined) {
  return (
    <li>{props.move.name}: {moveDescrip.effect_entries[0].effect}</li>
  ) } else { 
    return (
      <div></div>
    )
  }
}
