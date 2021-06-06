import React, {useState} from 'react';
import './style.css';

function TodoForm(props) {
    const [task, setTask] = useState('');

    const handleChange = e => {
        setTask(e.target.value);
        
    }

      const handleSubmit = (e) => {
         e.preventDefault();
         if(!task) return;
          props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: task
         })
        
         setTask('');
     }

    return (
        
         <form onSubmit={handleSubmit} className='todo-form'>
            <input 
            type='text' 
            value={task} 
            name='text' 
            placeholder='Enter Task'
            onChange={handleChange} 
            className='input-field'
            />

            <button className='btn' type='submit'>ADD</button>
         </form>
    )
}

export default TodoForm;
