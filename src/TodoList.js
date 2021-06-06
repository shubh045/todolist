import React, {useState} from 'react'
import RemovedTodo from './RemovedTodo';
//  import Todo from './Todo';
import TodoForm from './TodoForm';
 import './style.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // const handleClick = ({target}) => {
    //  const item = target.value;
    //  handleTodo(item)
    // }

    const addTodos = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
         if(!newValue.text) return;
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
}

    // const completeTodo = id => {
    //   let updatedTodos = todos.map((todo) => {
    //       if(todo.id === id) {
    //           todo.isComplete = !todo.isComplete;
    //       }
    //       return todo;
    //   })
    //   return setTodos(updatedTodos);
    // }

    


    return (
        
        <div className='todo-list'>
            <h1 className='h1'>Tasks to do</h1>
            <TodoForm onSubmit={addTodos} />
            <RemovedTodo 
            todos={todos} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo}  
            />

        </div>
        
    )
}

export default TodoList;
