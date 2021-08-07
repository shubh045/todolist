import React, {useState} from 'react';
// import RemovedTodo from './RemovedTodo';
 import TodoForm from './TodoForm';
 import './style.css';

function Todo({todos, removeTodo, onItemClick, removeDoneTodo, updateTodo, donetodo}) {
const [edit, setEdit] = useState({
  id: null , 
  value: ''
});

const [values, setValues] = useState(false);
 
    const handleToggle = () => {
      // let val = !values;
      //   setValues(val); 
      
        
        setValues(values => !values); 
      
    }
     

const handleClick = ({target}) => {
  const item = target.value;
  // const ide= target.values.id;
  // if(!values===true) onItemClick(item);
  // else removeDoneTodo(item);
  
    if(!values===true) onItemClick(item);
    else removeDoneTodo(item);
  
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
        
        <div className='todo' id='to-f'>

            <div id={todo.id}>

            <input 
            type='checkBox' 
            key={todo.id} 
            value={todo.text} 
            name='text'
             onClick={handleToggle}
            onChange={handleClick} 
             />

            {todo.text} 
            </div>

          <div className='re-btn'>
              <button id='r-btn' onClick={() => removeTodo(todo.id)}>X</button>

              <button id='e-btn' onClick={() => setEdit({
                id: todo.id,
                value: todo.text
              })}> Edit </button>
          </div>
        </div>
      
        
        </div>
    ))
}

export default Todo;
