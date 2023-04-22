import React, { useState,useEffect } from 'react'

export const SimpleForm = () => {

  const [formState, setformState] = useState ({
    username: 'segundocarlos',
    email: 'segundocarlos@hotmail.com'
  })

  const {username,email} = formState;

  // del evento va directamente destructurado el target
  const onInputChange = ({target}) => {

    const {name,value} = target;
    setformState({...formState,
        [name]:value
    });

  }

  useEffect(() => {
   console.log('siempre se ejecuta')
  })
  
  useEffect(() => {
    console.log('se ejecuta una sola vez')
   },[])

   useEffect(() => {
    console.log('solo si esta variable de estado username cambia')
   },[username])


  return (
    <>
       <h1>02-Formulario Simple</h1>

       <input 
            type='text'
            className='form-control'
            placeholder='Username'
            name = "username"
            value={username}
            onChange={onInputChange}
       />
        <input 
            type='email'
            className='form-control mt-2'
            placeholder='segundocarlos@hotmail.com'
            name = "email"
            value={email}
            onChange={onInputChange}
       />

       <hr />
    </>
   
  )
}
