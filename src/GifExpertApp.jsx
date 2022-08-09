import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // Cuando se quiere almacenar información y esa información tiene que cambiar el HTML se va a necesitar un hook para mantener el estado.

  // Los hooks no se ponen dentro de condiciones.

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    // Validar que sean únicos los campos
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [ ...cat, 'Valorant' ]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories } // Se envía la función del state al componente hijo para que realize la lógica.
        onNewCategory={ value => onAddCategory(value) } // Se envía la función al componente hijo para que este responda con el valor que necesita la función del componente padre para realizar la adición de la categoría.
      />

      {/* Listado de Gif */}

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        )
        )
      }

    </>
  )
}
