import React, { useState } from 'react';



export const AddCategoryV1 = ({SetCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
     e.preventDefault();  // para que no se refresque la pagina    
     if(inputValue.trim().length <=1) return;
     SetCategories(x =>[inputValue,...x]);     
     setInputValue('');
  }

  return (
    //el form es para que acepte el enter y el preventDefault para que no se refresque el formulario
    <form onSubmit={onSubmit}>  
      <input
        type='text'
        placeholder='Buscar gif'
        value={inputValue}
       // onChange={(e) =>onInputChange (e)} // ES LO MISMO QUE ABAJO POR QUE ES EL MISMO e que se ENVIA
         onChange={onInputChange}
      ></input>
    </form>
      
    )
}
