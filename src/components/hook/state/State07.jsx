import React, { useState, useEffect } from 'react';  

const State07 = () => {  
    const [person, setPerson] = useState(() => {
        return JSON.parse(localStorage.getItem('persons')) || [];
      });
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(3);
      const [editingPerson, setEditingPerson] = useState(null);
    
      // Load data from localStorage when the component mounts
      useEffect(() => {
        const storedPersons = JSON.parse(localStorage.getItem('persons')) || [];
        setPerson(storedPersons);
      }, []);
    
      // Update localStorage whenever the person list changes
      useEffect(() => {
        localStorage.setItem('persons', JSON.stringify(person));
      }, [person]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const imageFile = data.get('image');
    
        let imageData = '';
        if (imageFile) {
          const reader = new FileReader();
          reader.onload = (e) => {
            imageData = e.target.result; // Data URL containing image data
          };
          reader.readAsDataURL(imageFile);
          await new Promise(resolve => reader.onload = resolve); // Wait for image reading to finish
        }
    
        const personData = {
          id: editingPerson ? editingPerson.id : Date.now(),
          name: data.get('name'),
          gender: data.get('gender'),
          image: imageData,
        };
    
        if (editingPerson) {
          // Update existing person
          setPerson(person.map((p) => (p.id === editingPerson.id ? personData : p)));
          setEditingPerson(null);
        } else {
          // Add new person
          setPerson([...person, personData]);
        }
    
        e.target.reset();
      };
    
      const handleEdit = (item) => {
        setEditingPerson(item);
      };
    
      const handleDelete = (id) => {
        setPerson(person.filter((item) => item.id !== id));
      };
    
      // Pagination Logic
      const indexOfLastPerson = currentPage * itemsPerPage;
      const indexOfFirstPerson = indexOfLastPerson - itemsPerPage;
      const currentPersons = person.slice(indexOfFirstPerson, indexOfLastPerson);
      const totalPages = Math.ceil(person.length / itemsPerPage);
    
      const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
      };

  return (  
    <div className='container'>  
      <form className='w-50 mx-auto p-4 border' onSubmit={handleSubmit}>  
        <div className="form-group">  
          <label>Username</label>  
          <input type="text" name="name" className="form-control" required defaultValue={editingPerson ? editingPerson.name : ''}/>  
        </div>  
        <div className="form-group">  
          <label>Gender</label>  
          <select name="gender" className="form-control" required defaultValue={editingPerson ? editingPerson.gender : ''}>  
            <option value="">Select Gender</option>  
            <option value="male">Male</option>  
            <option value="female">Female</option>  
            <option value="other">Other</option>  
          </select>  
        </div>  
        <div className="form-group mb-3">  
          <label>Image</label>  
          <input type="file" name="image" className="form-control" accept="image/*" required />  
        </div>  
        <button type="submit" className="btn btn-primary">{editingPerson ? 'Update' : 'Submit'}</button>  
      </form>  

      <div className=' w-50 mx-auto py-4'>  
         <h3>User List</h3>  
         <table className=' table table-bordered'>  
            <thead className=' text-center table-dark'>  
              <tr>  
                <th>ID</th>  
                <th>Profile</th>  
                <th>Name</th>  
                <th>Gender</th>  
                <th>Action</th>  
              </tr>  
            </thead>  
            <tbody className=' text-center align-middle'>  
              {currentPersons.map((item) => (  
                <tr key={item.id}>  
                  <td>{item.id}</td>  
                  <td>  
                    <img src={item.image} alt={item.name} style={{'width': '4rem', 'height' : '4rem', 'objectFit' : 'cover','borderRadius' : '50%'}} />  
                  </td>  
                  <td>{item.name}</td>  
                  <td>{item.gender}</td>  
                  <td>  
                    <button className='btn btn-primary btn-sm mx-2' onClick={() => handleEdit(item)}>Edit</button>  
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
         </table>  
         <nav>  
           <ul className="pagination justify-content-center">  
             {Array.from({ length: totalPages }, (_, index) => (  
               <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>  
                 <button className="page-link shadow-none" onClick={() => handlePageChange(index + 1)}>  
                   {index + 1}  
                 </button>  
               </li>  
             ))}  
           </ul>  
         </nav>  
      </div>  
    </div>  
  );  
};  

export default State07;