import { deleteBoard } from '@/src/actions/delete-board';
import { Button } from '@/src/components/ui/button';
import React from 'react'
import FormDelete from './form-delete';


interface BoardProps {
    id: string;
    title: string;
}
const Board = ({
    title, id
    }: BoardProps) => {
        
     const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <div >
        <form action={deleteBoardWithId}
         className='flex items-center gap-x-2 '>
            <p>
        Board title: {title}
        </p>

        <FormDelete />
        
        </form>
    </div>
  )
}

export default Board