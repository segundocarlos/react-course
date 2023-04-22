import React, { useState } from 'react'
import { AddCategoryMejorada } from './components/AddCategoryMejorada'
import { GifGrid } from './components/GifGrid'
//import { AddCategoryV1 } from './components/AddCategoryV1'


export const GifExpertApp = () => {
    
    
    const [categories, SetCategories] = useState(['Dragon Ball'])
   
    //SetCategorias([...categories, 'Nuevo Valor']) // al final 
    //SetCategories(['Nuevo Valor',...categories]) // al inicio

    const onAddCategory = (value) => {

        if ( categories.includes(value)) return; //para no insertar si ya existe

        SetCategories([value,...categories])    
    }

  return (
    <>
         <h1>GifExpertApp</h1>
         {/* version anterior v1 */}
         {/* <AddCategoryV1 SetCategories = {SetCategories}/> */} 
         
         <AddCategoryMejorada onNewCategory={(value) => onAddCategory (value)} /> 

         
        {
            categories.map(category => (
                <GifGrid key = {category} category = {category}/>                    
            ))
        }
        
    </>
   
  )
}


