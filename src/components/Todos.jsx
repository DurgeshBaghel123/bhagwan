import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
    const todos = useSelector((state)=>state.operationsReducer)
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box d-flex'>
        <div className='content d-flex'>
            <input type='checkbox' checked={todo.completed}/>
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:"none"}}>{todo.todo}</p>
        </div>
        <div className='actions-box'>
            <button>delete</button>
            <button>edit</button>
        </div>
    </div>
  ))
}

export default Todos