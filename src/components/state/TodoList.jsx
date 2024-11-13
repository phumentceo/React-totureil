import React, { useState, useEffect } from 'react';  

const TodoList = () => {  
  const [task, setTask] = useState(''); // State for the new task input.  
  const [tasks, setTasks] = useState([]); // State for the list of tasks.  

  // Load tasks from localStorage when the component mounts.  
  useEffect(() => {  
    const storedTasks = localStorage.getItem('tasks'); // Get stored tasks.  
    if (storedTasks) {  
      setTasks(JSON.parse(storedTasks)); // Parse and set tasks if they exist.  
    }  
  }, []);  

  // Save tasks to localStorage whenever tasks state changes.  
  useEffect(() => {  
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Convert tasks to JSON and save.  
  }, [tasks]);  

  // Handle input changes in the task input.  
  const handleInputChange = (event) => {  
    setTask(event.target.value); // Update task state with input value.  
  };  

  // Add a new task to the list.  
  const handleAddTask = () => {  
    if (task.trim() !== '') { // Check for non-empty input.  
      setTasks((prevTasks) => [...prevTasks, task]); // Add new task to list.  
      setTask(''); // Clear the input after adding.  
    }  
  };  

  // Delete a task based on index.  
  const handleDeleteTask = (index) => {  
    if (window.confirm('Do you want to delete this task?')) {  
      const updatedTasks = tasks.filter((_, i) => i !== index); // Filter out the task to delete.  
      setTasks(updatedTasks); // Update the task list.  
    }  
  };  

  return (  
    <div style={{ margin: '20px' }}>  
      <h1>ToDo List</h1>  
      <div>  
        <input  
          type="text"  
          value={task}  
          onChange={handleInputChange} // Update state on input change.  
          placeholder="Enter your task"  
          style={{ marginRight: '10px' }}  
        />  
        <button onClick={handleAddTask}>Add Task</button>  
      </div>  
      <ul style={{ padding: '0' }}>  
        {tasks.map((t, index) => (  
          <li key={index} style={{ listStyleType: 'none', margin: '5px 0' }}>  
            {t}  
            <button onClick={() => handleDeleteTask(index)} style={{ marginLeft: '10px' }}>Delete</button>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default TodoList;