import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            {/* called from App.js <TodoList> */}
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            {/* onDelete comes from App.js */}
            {/* onclick renders automatically so we make it a function so it will just pass and when click it will active */}
            <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo.sno)}}>Delete</button>
        </div>
    )
}