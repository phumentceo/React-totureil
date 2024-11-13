import React, { useState, useEffect } from 'react';  

const TodoList = () => {  
  const [task, setTask] = useState('');  
  const [tasks, setTasks] = useState([]);  
  const [editMode, setEditMode] = useState(false);  
  const [editTaskId, setEditTaskId] = useState(null);  

  // Load tasks from localStorage on component mount  
  useEffect(() => {  
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];  
    setTasks(storedTasks);  
  }, []);  

  // Save tasks to localStorage whenever the tasks state changes  
  useEffect(() => {  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
  }, [tasks]);  

  const handleInputChange = (e) => {  
    setTask(e.target.value);  
  };  

  const handleAddTask = () => {  
    if (task.trim() !== '') {  
      if (editMode) {  
        handleUpdateTask(editTaskId);  
      } else {  
        // Add new task  
        setTasks([...tasks, task]);  
      }  
      setTask(''); // Clear the input  
      setEditMode(false); // Reset edit mode  
    }  
  };  

  const handleEditTask = (id) => {  
    setEditMode(true);  
    setEditTaskId(id);  
    setTask(tasks[id]); // Set the task in the input for editing  
  };  

  const handleUpdateTask = (id) => {  
    const updatedTasks = tasks.map((t, index) => (index === id ? task : t));  
    setTasks(updatedTasks);  
    setTask(''); // Clear input  
    setEditMode(false); // Reset edit mode  
    setEditTaskId(null); // Reset edit task ID  
  };  

  const handleDeleteTask = (id) => {  
    if (window.confirm('Do you want to delete this task?')) {  
      const updatedTasks = tasks.filter((_, index) => index !== id);  
      setTasks(updatedTasks); // Updated the task list  
    }  
  };  

  return (  
    <div>  
      <h1>ToDo List</h1>  
      <div>  
        <input  
          type="text"  
          value={task}  
          onChange={handleInputChange}  
          placeholder="Enter your task"  
        />  
        <button onClick={handleAddTask}>  
          {editMode ? 'Update Task' : 'Add Task'}  
        </button>  
      </div>  
      <ul>  
        {tasks.map((t, index) => (  
          <li key={index} style={{ margin: '10px 0' }}>  
            {t}   
            <button onClick={() => handleEditTask(index)}>Edit</button>  
            <button onClick={() => handleDeleteTask(index)}>Delete</button>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default TodoList;