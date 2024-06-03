import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div className='px-4'>
    <ul className='list-none'>
        {todos.map((todo) => (
            <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}
            >
                <div className='text-white'>{todo.text}</div>
                <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className='
                text-white bg-red-600 border-0 py-1 px-2 focus:outline-none hover:bg-red-700 rounded text-base
                '>❌</button>
            </li>
            
        ))}

    </ul>

    </div>
  )
}

export default Todos
