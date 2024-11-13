import React, { useEffect, useState } from 'react';  

const TodoList = () => {  


  const [todos, setTodos] = useState(() => {  
    const savedTodos  = localStorage.getItem('todos');  
    return savedTodos ? JSON.parse(savedTodos) : []; 
  });


  const [inputValue, setInputValue] = useState('');  

  useEffect(() => {  
    localStorage.setItem('todos', JSON.stringify(todos));  
  }, [todos]);  

  const handleAddTodo = () => {  
    if (inputValue.trim() !== '') {  
      setTodos([...todos, { text: inputValue, completed: false }]);  
      setInputValue('');  
    }  
  };  

  const handleToggleTodo = (index) => {  
    const updatedTodos = todos.map((todo, i) => {  
      if (i === index) {  
        return { ...todo, completed: !todo.completed };  
      }  
      return todo;  
    });  
    setTodos(updatedTodos);  
  };  

  const handleDeleteTodo = (index) => {  
    const updatedTodos = todos.filter((_, i) => i !== index);  
    setTodos(updatedTodos);  
  };  

  return (  
    <div>  
      <h1>To-Do List</h1>  
      <input   
        type="text"   
        value={inputValue}   
        onChange={(e) => setInputValue(e.target.value)}   
        placeholder="Add a new task"  
      />  
      <button onClick={handleAddTodo}>Add</button>  
      <ul>  
        {todos.map((todo, index) => (  
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>  
            <span onClick={() => handleToggleTodo(index)}>{todo.text}</span>  
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default TodoList;