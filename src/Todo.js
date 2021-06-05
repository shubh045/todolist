import React, {useState} from 'react';
// import RemovedTodo from './RemovedTodo';
 import TodoForm from './TodoForm';

function Todo({todos, removeTodo, onItemClick, removeDoneTodo, updateTodo}) {
const [edit, setEdit] = useState({
  id: null, 
  value: ''
});

const [values, setValues] = useState(false);
 
    const handleToggle = (id) => {
      let val = !values;
        setValues(val); 
    }

const handleClick = ({target}) => {
  const item = target.value;
  if(!values) onItemClick(item);
  else {removeDoneTodo(todos.id)}
   } 

   const submitUpdate = value => {
     updateTodo(edit.id, value);
     setEdit({
       id: null, 
       value: ''
     });
   }

   if(edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

    return todos.map((todo, index) => (
        <div>

            <div id={todo.id}>

            <input 
            type='checkBox' 
            key={todo.id} 
            value={todo.text} 
            name='text'
             onChange={handleToggle}
            onClick={handleClick} 
             />

            {todo.text} 
            </div>

          <div>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>

              <button onClick={() => setEdit({
                id: todo.id,
                value: todo.text
              })}> Edit </button>
          </div>

        </div>
    ))
}

export default Todo;
