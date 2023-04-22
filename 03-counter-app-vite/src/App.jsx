
import React from 'react'
import { FirstComponent } from './FirstComponent';
import { Counter } from './Counter';

export const App = () => {
  return (
    <>  
        <div>Hola Mundo</div>
        <hr></hr>
        <FirstComponent title = 'el dato pasado de desde una prop' subtitle = 'soy un subtitulo'/>   
        <Counter></Counter>
    </>
  )
}

