import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodos = todo => {
        setTodos([todo, ...todos]);
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if(todo.id === id) {
              todo.isComplete = !todo.isComplete
          }
          return todo;
      })
      setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Tasks to do</h1>
            <TodoForm onSubmit={addTodos} />
            <Todo todos={todos} onclick={completeTodo} />
        </div>
    )
}

export default TodoList;
