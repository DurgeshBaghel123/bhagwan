import React from 'react'
import './App.css'
import Form  from './components/Form'
import Todos from './components/Todos'
import { useDispatch ,useSelector } from 'react-redux'
import { deleteAll } from './redux/todoapp/actions/Index'

function App() {
  const dispatch =useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  return (
    <>
   
    {/* <Form/>
    <Todos/>
    {todos.length > 0 &&(
          <button className='btn btn-danger btn-md delete-all'onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
    )} */}
    <h1>Hello</h1>
    
    </>
  )
}

export default App