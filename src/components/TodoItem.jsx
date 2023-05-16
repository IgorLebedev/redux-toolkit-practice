import React from 'react';
import { removeTodo, toggleComplete } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div className='flex justify-between items-center my-2' key={todo.id}>
            <div 
                className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
                onClick={() => dispatch(toggleComplete(todo.id))}
            >
                    Complete
            </div>
            <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.name}
            </div>
            <div 
                className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                Delete
            </div>
        </div>
    )
}

export default TodoItem
