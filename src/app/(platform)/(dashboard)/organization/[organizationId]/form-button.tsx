import { Button } from '@/src/components/ui/button'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const FormButton = () => {
    const { pending } = useFormStatus();
  return (
    <div>
     <Button 
     type="submit" disabled={pending}>

          Submit

    </Button>
    </div>
  )
}

export default FormButton