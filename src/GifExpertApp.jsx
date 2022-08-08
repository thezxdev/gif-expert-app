import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  // Cuando se quiere almacenar información y esa información tiene que cambiar el HTML se va a necesitar un hook para mantener el estado.

  // Los hooks no se ponen dentro de condiciones.

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    setCategories([ 'Valorant', ...categories ]);
    // setCategories( cat => [ ...cat, 'Valorant' ]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        setCategories={ setCategories }
      />

      {/* Listado de Gif */}
      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
        {/* Gif Item */}
    </>
  )
}
