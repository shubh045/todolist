import React, {useState} from 'react';
import Todo from './Todo';

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
        <div>
            <Todo 
            todos={todos} 
            removeTodo={removeTodo} 
            onItemClick={handleTodo} 
            removeDoneTodo={removeDoneTodo} 
            updateTodo={updateTodo}
            doneTodo={doneTodo}  
            />

            <h1>Completed Task</h1>
            {/* {
                todos.map( event => (
                    <div onSubmit={handleClick}>
                    {event.text}
                    </div>
                ) )
            } */}
            
           { [...doneTodo].map((item, index)  => (
               
                <ul key={index}>
                    <li>
                        {item}
                        <button type='button' onClick={() => removeDoneTodo(index)}>X</button>
                    </li>
                </ul>
        ))}
          </div>
          
)}
           
export default RemovedTodo;
