import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

  // Mantener el estado del input
  const [inputValue, setInputValue] = useState('')

  // Manejar cuando el input cambia y agregar el nuevo valor
  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  // Manejar el evento submit del formulario
  const onSubmit = ( e ) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    
    setCategories( categories => [ inputValue, ...categories ]);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue } // Vincular el valor del input con el estado
        onChange={ onInputChange } // Añadir función cuando cambia el valor del campo
      />
    </form>
  )
}