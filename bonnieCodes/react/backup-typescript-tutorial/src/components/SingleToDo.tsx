import React from 'react'
import { Todo } from './model';
import {AiFillEdit} from 'react-icons/ai'

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleToDo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos-single'>
      <span className='todos-single-text'>
        {todo.todo}
      </span>
      <div>
      <span className='icon'>
        <AiFillEdit />
      </span>
      <span className='icon'></span>
      <span className='icon'></span>
      </div>

    </form>
  )
}

export default SingleToDo