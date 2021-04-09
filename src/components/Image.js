import React, { useEffect, useState } from 'react';
import axios from "axios";



export default function Image(props) {

  const [image, setImage] = useState(undefined);
  const pokemonUrl = props.url


  const fetchImage = async () => {
    const response = await axios.get(pokemonUrl);
    setImage(response.data)
  }

  useEffect(() => { 
    fetchImage();
  }, [])

  // console.log(image.sprites.front_default)

  if (image !== undefined) {
    return (
      <img src={image.sprites.front_default} />
    ) } else { 
      return (
        <div></div>
      )
    }
  }
  
