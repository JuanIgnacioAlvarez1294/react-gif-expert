import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
 
describe('Pruebas en <GifExpertApp />', () => {
 
    const newCategory = 'gatitos';
    const arrayCategories = ['perritos', 'capibaras'];
 
    test('Agregar nuevas categorias', () => {
 
        render( <GifExpertApp /> );
        
        // Obtenemos campos
        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('form');
        // Disparamos los eventos
        arrayCategories.forEach( cat => {
            fireEvent.input( input, { target: { value: cat } } );
            fireEvent.submit( form );
        })
 
        const titleCategories = screen.getAllByRole( 'heading', { level: 3 } );
        // +1 ya que previamente ya existe una categoria por defecto
        expect( titleCategories.length ).toBe( arrayCategories.length + 1 );
 
    });
 
    test('Comprobar no se agregue una categoria repetida', () => {
 
        render( <GifExpertApp /> );
 
        // Obtenemos campos
        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('form');
        // Disparamos los eventos agregando la misma categoria inicial
        fireEvent.input( input, { target: { value: newCategory } } );
        fireEvent.submit( form );
 
        const categories = screen.getAllByText('gatitos');
        expect( categories.length ).toBe(1);
 
    });
 
});