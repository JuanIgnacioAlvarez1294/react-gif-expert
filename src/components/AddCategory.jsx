import { useState } from "react";
import PropTypes from 'prop-types'; 

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories( categories = [ inputValue, ...categories] );
    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
// Definir los propTypes para validar las props
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, // Define que onNewCategory es una función y es requerida
  };