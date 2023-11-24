"use client"
import { Button } from '@/src/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

const FormDelete = () => {
    const { pending } = useFormStatus();

  return (
    <div>
    <Button 
     disabled={pending}  type='submit' variant={'destructive'} size={'sm'}>

        Delete

    </Button>
    </div>
  )
}

export default FormDelete