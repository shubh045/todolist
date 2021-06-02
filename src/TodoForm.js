import React, {useState} from 'react'

function TodoForm(props) {
    const [task, setTask] = useState('');

    const handleChange = e => {
        setTask(e.target.value);
    }

      const handleSubmit = (e) => {
         e.preventDefault();
          props.onSubmit({
             id: Math.floor(Math.random()*1000),
             text: task
          })
        
         setTask('');
     }

    return (
        
         <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={task} 
            name='text' 
            placeholder='Enter Task'
            onChange={handleChange} 
            />

            <button>ADD</button>
         </form>
    )
}

export default TodoForm;