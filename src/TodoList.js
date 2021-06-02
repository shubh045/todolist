import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodos = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if(todo.id === id) {
              todo.isComplete = !todo.isComplete
          }
          return todo;
      })
      return setTodos(updatedTodos);
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
