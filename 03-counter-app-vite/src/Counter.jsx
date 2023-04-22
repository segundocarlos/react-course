
import { useState } from 'react'
import React from 'react'


export const Counter = () => {

   const [counter,setCounter] = useState (0); 

   const handleAdd = ()=>{
    setCounter(counter + 1)
   }

   const handleSustract = ()=>setCounter(counter - 1) 

   const handleReset = ()=>setCounter(0) 

  return (
    <>
       
        <p>Soy una calculador de la nasa</p>
        <button onClick={handleAdd} >+1</button> 
        <button onClick={handleSustract} >-1</button> 
        <button onClick={handleReset} >Reset</button> 
        <h2> {counter} </h2>
    </>
  )
}

