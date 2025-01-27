import PropTypes from 'prop-types'; // Importamos PropTypes para la validación de propiedades
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// Componente GifGrid, que recibe la categoría como prop
export const GifGrid = ({ category }) => {
  // Desestructuramos images e isLoading del custom hook useFetchGifs
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
// Validación de PropTypes para asegurarnos de que la categoría es una cadena
GifGrid.propTypes = {
  category: PropTypes.string.isRequired, // category es requerido y debe ser una cadena
};