import React, { useState, useEffect } from 'react';  

const State06 = () => {  
  const [name, setName] = useState('');  
  const [persons, setPersons] = useState([]);  
  const [edit, editMod] = useState(false);  
  const [personId, setPersonId] = useState(null);  
  const [search, setSearch] = useState('');  
  const [show, setShow] = useState([]);  
  const [image, setImage] = useState(null); // State for the selected image  

  const handleInput = (e) => {  
    setName(e.target.value);  
  };  

  const handleImageChange = (e) => {  
    const file = e.target.files[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onloadend = () => {  
        setImage(reader.result); // Store the image URL  
      };  
      reader.readAsDataURL(file); // Read the file as a data URL  
    }  
  };  

  const handleSave = () => {  
    if (name !== '') {  
      if (edit) {  
        handleUpdate(personId);  
      } else {  
        setPersons([...persons, { name, image }]); // Store image with the name  
      }  
      setName('');  
      setImage(null); // Clear the image after saving  
    }  
  };  

  const handleDelete = (id) => {  
    if (confirm("Do you want to delete this?")) {  
      setPersons(persons.filter((_, key) => key !== id));  
    }  
  };  

  const handleEdit = (id, item) => {  
    editMod(true);  
    setName(item.name);  
    setPersonId(id);  
    setImage(item.image); // Set the current image for editing  
  };  

  const handleUpdate = (id) => {  
    setPersons(persons.map((value, pId) => id === pId ? { name, image } : value));  
    setName('');  
    setImage(null); // Clear the image after updating  
    editMod(false);  
    setPersonId(null);  
  };  

  const handleCancel = () => {  
    editMod(false);  
    setName('');  
    setImage(null); // Clear the image on cancel  
  };  

  const handleSearch = (e) => {  
    setSearch(e.target.value.toLowerCase());  
  };  

  useEffect(() => {  
    if (search) {  
      setShow(persons.filter(value =>  
        value.name.toLowerCase().includes(search)  
      ));  
    } else {  
      setShow(persons);  
    }  
  }, [search, persons]);  

  return (  
    <div>  
      <form className='w-50 mx-auto p-5 border rounded-3'>  
        <div className="form-group mb-3">  
          <label htmlFor="">Username</label>  
          <input  
            value={name}  
            type="text"  
            onInput={handleInput}  
            className="form-control shadow-none"  
            placeholder='Enter person name'  
          />  
        </div>  
        <div className="form-group mb-3">  
          <label htmlFor="">Upload Image</label>  
          <input  
            type="file"  
            accept="image/*"  
            onChange={handleImageChange}  
            className="form-control shadow-none"  
          />  
          {image && <img src={image} alt="Uploaded" className="mt-2" width="100" />} {/* Display selected image */}  
        </div>  

        <button type='button' onClick={handleSave} className='btn btn-success'>  
          {edit ? 'Update' : 'Add+'}  
        </button>  

        <button onClick={handleCancel} className='btn btn-danger ms-3' type='reset'>Cancel</button>  
      </form>  

      <div className='w-50 mx-auto mb-5 mt-5'>  
        <input  
          type="search"  
          onInput={handleSearch}  
          className="form-control"  
          placeholder='Search here.....'  
        />  
      </div>  

      <div className="show w-50 mx-auto mt-5 border p-5 position-sticky sticky-top">  
        <h3>Person List</h3>  
        <hr className='mb-5' />  

        {(show.length > 0) ? show.map((item, key) => (  
          <div key={key} className='d-flex justify-content-between align-items-center mb-2 border-bottom pb-3'>  
            <h5>ID : {key + 1}</h5>  
            <h5>Name : {item.name}</h5>  
            {item.image && <img src={item.image} alt="Person" className="mx-2" width="50" />} {/* Show uploaded image */}  
            <div>  
              <button onClick={() => handleEdit(key, item)} className='btn btn-primary btn-sm mx-2'>Edit+</button>  
              <button onClick={() => handleDelete(key)} className='btn btn-danger btn-sm'>remove -</button>  
            </div>  
          </div>  
        )) : <p>No persons found.</p>}  
      </div>  
    </div>  
  );  
};  

export default State06;