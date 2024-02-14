import React from 'react'
import {ToDoItem} from './ToDoItem';

export const ToDos = (props) => {
  return (
    <div>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0? "No todos to display": 
      props.todos.map((todo)=>{
        return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}
