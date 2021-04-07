import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../redux/listPokemonSlice"




export default function Header() {

  

  return (
    <header>
      <h1>Poke-Info Redux</h1>
    </header>
  )
}
