"use client"
import { create } from '@/src/actions/create-board'
import { Button } from '@/src/components/ui/button'
import React from 'react'
import { useFormState } from 'react-dom'
import FormInput from './form-input'
import FormButton from './form-button'

const Form = () => {
    
    const initialState = {message : '' , error: {}}
    const [state, dispatch] = useFormState(create, initialState);
  return (
    <div>
        <form action={dispatch}>
            <div className='flex flex-col space-y-2'>
       
           <FormInput errors={state?.errors}/>
       
        
        </div>

       <FormButton />

      </form>
    </div>
  )
}

export default Form