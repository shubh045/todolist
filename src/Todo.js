import React, {useState} from 'react';
import TodoForm from './TodoForm';

function Todo({todos, completeTodo}) {
const [edit, setEdit] = useState({
    id: null,
    value: ''
})

    return todos.map((todo, index) => {
        <div>
            <div id={todo.id} onclick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
        </div>
    })
}

export default Todo;
