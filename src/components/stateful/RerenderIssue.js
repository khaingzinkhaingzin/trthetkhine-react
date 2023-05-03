import React from 'react'
import { useState } from 'react'

const RerenderIssue = () => {
    let [ todo, setTodo ] = useState({
        title: 'Task1',
        completed: false,
    });

    let changeStatus = () => {
        // todo.completed = true;
        // setTodo(todo); // will not change // coz mutable // you should treate obj as immutable in react // so create difference obj and then replace it 
        
        setTodo({...todo, completed: true}); // different object of org object
    };
  return (
    <div>
        <h3>{todo.title}</h3>
        <h4>Completed: {todo.completed + ''}</h4>
        <button 
            className={'btn btn-success'}
            onClick={changeStatus}
        >
            done
        </button>
    </div>
  )
}

export default RerenderIssue