import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  // Sirve para disparar efectos secundarios
  useEffect( () => {

    // Código a ejecutar
    getGifs( category );

  }, [] );

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}
