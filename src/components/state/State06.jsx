import React, { useState } from 'react';  

const State05 = () => {  
  const [name, setName] = useState('');  
  const [searchQuery, setSearchQuery] = useState('');  
  const [data, setData] = useState([]);  

  // state for edit and create statement  
  const [editMode, setEditMode] = useState(false);  
  const [itemToEdit, setItemToEdit] = useState(null);
 
  
  const handleInput = (e) => {  
    setName(e.target.value);  
  };  

  const handleClick = () => {  
    if (name) {  
      if (editMode) {  
        // If in edit mode, update the item  
        handleUpdate(itemToEdit);  
      } else {  
        // Else, create a new item  
        setData([...data, name]);  
      }  
      setName('');  
      setEditMode(false);  
      setItemToEdit(null);  
    }  
  };  

  const handleDelete = (itemToDelete) => {  
    setData(data.filter(item => item !== itemToDelete));  
  };  

  const handleSearch = (e) => {  
    setSearchQuery(e.target.value.toLowerCase());  
  };  

  const filteredData = data.filter(item =>  
    item.toLowerCase().replace(/\s+/g, '').includes(searchQuery.replace(/\s+/g, ''))  
  );  

  // Edit  
  const handleEdit = (item) => {  
    setName(item);
    setEditMode(true);
    setItemToEdit(item); 
  };  

  // Update  
  const handleUpdate = (itemToUpdate) => {  
    setData(data.map(item => (item === itemToUpdate ? name : item)));  
    setName('');  
    setEditMode(false);  
    setItemToEdit(null);  
  };  

  return (  
    <div className='w-50 mx-auto'>  
      <div>  
        <input  
          type="text"  
          value={name}  
          onChange={handleInput}  
          placeholder='Enter name'  
          className='form-control mb-3'  
        />  
        <button className='btn btn-primary mb-5' onClick={handleClick}>  
          {editMode ? 'Update' : 'Create'}  
        </button>  
      </div>  

      <div>  
        <input  
          type="text"  
          value={searchQuery}  
          onChange={handleSearch}  
          placeholder='Search by name'  
          className='form-control mb-3'  
        />  
      </div>  

      <div>  
        <div>  
          <h1>Show User</h1>  
        </div>  
        {filteredData.map((item, index) => (  
          <div key={index} className='d-flex justify-content-between align-items-center my-3 p-3 border-bottom'>  
            <h6>{item}</h6>  
            <div>  
              <button className='btn btn-info ms-2' onClick={() => handleEdit(item)}>Edit</button>  
              <button className='btn btn-danger ms-2' onClick={() => handleDelete(item)}>Delete</button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default State05;