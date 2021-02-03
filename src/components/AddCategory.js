import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    //Cambia el valor de un input de al teclear sobre el
    //al dar Enter intedra el nombre en el listado.

    const [inputValue, setInputValue] = useState('');

    const handleInputChage = (e) =>{
        setInputValue( e.target.value );
    }

    const hanleSubmit = (e) => {
        //para prevenir el comportamiento de refrescar el navegador
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategorias(cats => [inputValue , ...cats ]);
            setInputValue('');
        }

      //  console.log(inputValue);
        
    }

    return (
        <form onSubmit={hanleSubmit}>
            <input 
                type="text" 
                value= { inputValue }
                onChange={ handleInputChage }
                />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}