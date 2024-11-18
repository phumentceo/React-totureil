import React, { useState } from 'react';  

const State06 = () => {  
  return (  
    <div className='w-50 container'>  

      <form className='p-4 border'>  
        <div className="form-group mb-3">  
          <label>Username</label>  
          <input type="text" name="name" className="form-control" required defaultValue={editingPerson ? editingPerson.name : ''}/>  
        </div>  
        <div className="form-group mb-3">  
          <label>Gender</label>  
          <select name="gender" className="form-control" required defaultValue={editingPerson ? editingPerson.gender : ''}>  
            <option value="">Select Gender</option>  
            <option value="male">Male</option>  
            <option value="female">Female</option>  
            <option value="other">Other</option>  
          </select>  
        </div>  
        <div className="form-group mb-3">  
          <label>Phone Number</label>  
          <input type="text" name="phone" className=' form-control'/>  
        </div>  
        <button type="submit" className="btn btn-primary">{editingPerson ? 'Update' : 'Submit'}</button>  
      </form>  

      <div className='py-4'>  
         <h3>User List</h3>  
         <table className=' table table-bordered'>  
            <thead className=' text-center table-dark'>  
              <tr>  
                <th>ID</th>  
                <th>Username</th>
                <th>Gender</th>  
                <th>Phone</th>
                <th>Action</th>  
              </tr>  
            </thead>  
            <tbody className=' text-center align-middle'>  
             
                <tr>  
                  <td>U-1001</td>  
                  <td>Phument007</td>  
                  <td>Male</td>  
                  <td>0978759989</td>  
                  <td>  
                    <button className='btn btn-primary btn-sm mx-2' onClick={() => handleEdit(item)}>Edit</button>  
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>  
                  </td>  
                </tr>  
             
            </tbody>  
         </table>  
      </div>  
      
    </div>  
  );  
};  

export default State06;