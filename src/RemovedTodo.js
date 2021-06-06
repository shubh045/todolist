import React, {useState} from 'react';
import Todo from './Todo';
 import './style.css';

function RemovedTodo({removeTodo, todos, updateTodo}) {

    const [doneTodo, setDoneTodo] = useState([]);

    const handleTodo = (todo) => {
        setDoneTodo(prev => [todo, ...prev]);
        // completeTodo(todo.id);
    }

    const removeDoneTodo = id => {
        const removeArr = [...doneTodo].filter((todo, index) => index !== id);
        setDoneTodo(removeArr);
    }
    
    return (
        <div className='remove-todo'>
            <Todo 
            todos={todos} 
            removeTodo={removeTodo} 
            onItemClick={handleTodo} 
            removeDoneTodo={removeDoneTodo} 
            updateTodo={updateTodo}
            doneTodo={doneTodo}  
            />

            <h1 className='h1'>Completed Tasks</h1>

           { [...doneTodo].map((item, index)  => (
                <ul key={index} >
                    <div className='r-ul'>
                    <li>
                        {item}
                        <button id='button' type='button' onClick={() => removeDoneTodo(index)}>X</button>
                    </li>
                    </div>
                </ul>
                
        ))}
        
          </div>
          
)}
           
export default RemovedTodo;
