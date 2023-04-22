import React from 'react'
import { useFetch } from '../hooks/useFetch'
import useCounter from '../hooks/useCounter';


export const MultipleCustomHook = () => {
    
  const {counter,add} = useCounter(1);

  const url = `https://fakestoreapi.com/products/${counter}`;

  const {data,isLoading,hasError} = useFetch(url);


  return (
    <>
        <h1>03-Multiple Custom Hook</h1>

        {
            isLoading
                ?(
                    <div className='alert alert-info text-center'>
                    Loading...
                    </div>    
                 ): (
                    <blockquote className='blockquote text-center'>                  
                   
                    <h4> {data.title} </h4>

                    <p className='mb-1'> {data.title} </p>
                    
                    <footer className='blockquote-flooter text-end'>Carlos Figueroa</footer>
                </blockquote>
                 )
        }

        <button 
            className='btn btn-primary' 
            onClick={() => add (1)} 
            disabled = {isLoading}>
            Next Item
        </button>
        <p className='mb-1'> Maximo hasta 20 itrem </p>
        <hr />
   </>
  )
}
