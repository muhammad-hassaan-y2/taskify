import { Input } from '@/src/components/ui/input';
import React from 'react'
import { useFormStatus } from 'react-dom';

interface FormInputProps {
    errors?: {
      title?: string[];   
    }
}

const FormInput = ({errors}: FormInputProps) => {

   const { pending } = useFormStatus();

  return (
    <div>
         <Input 
        id="title"
        name="title"
        placeholder="Enter a board title"
        className="border-black border p-1"
        required
        disabled={pending}
        />
        {errors?.title ? (
            <div>
         {errors.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
                {error}
            </p>
         ))}     
            </div>
        ): null}
    </div>
  )
}

export default FormInput