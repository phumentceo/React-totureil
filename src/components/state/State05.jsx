import React, { useState } from 'react';  

const State05 = () => {  
  const [name, setName] = useState('');  
  const [searchQuery, setSearchQuery] = useState('');  
  const [data, setData] = useState([]);  

  const handleInput = (e) => {  
    setName(e.target.value);  
  };  

  const handleClick = () => {  
    if (name) {  
      setData([...data, name]);  
      setName(''); // Clear the input after adding  
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

  return (  
    <div>  
      <div>  
        <input   
          type="text"   
          value={name}   
          onChange={handleInput}   
          placeholder='Enter name'   
        />  
        <button onClick={handleClick}>Add</button>  
      </div>  

      <div>  
        <input   
          type="text"   
          value={searchQuery}   
          onChange={handleSearch}   
          placeholder='Search by name'   
        />  
      </div>  

      <div>  
        <ul>  
          {filteredData.map((item, index) => (  
            <li key={index}>  
              {item}  
              <button onClick={() => handleDelete(item)}>Delete</button>  
            </li>  
          ))}  
        </ul>  
      </div>  
    </div>  
  );  
};  

export default State05;