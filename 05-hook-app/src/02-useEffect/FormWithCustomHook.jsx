import React, { useState,useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {


  //Aqui esta el custom hook de useForm, que le envia 
  const {formState,onInputChange,onResetForm} = useForm ({
     username: '',
     email: '',
     password :''
  });    


  const {username,email,password} = formState;

  return (
    <>
       <h1>02-Formulario con  Custom Hook</h1>

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
            placeholder='Email'
            name = "email"
            value={email}
            onChange={onInputChange}
       />
         <input 
            type='password'
            className='form-control mt-2'
            placeholder='Contraseña'
            name = "password"
            value={password}
            onChange={onInputChange}
       />

        <button onClick = {onResetForm } className='btn btn-primary mt-2'>Borrar</button>
       <hr />
    </>
   
  )
}
