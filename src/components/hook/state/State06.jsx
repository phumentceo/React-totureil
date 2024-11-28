import React, { useEffect, useState } from 'react';  

const State06 = () => {  


  const [persons,setPersons]  = useState(() => {
    return JSON.parse(localStorage.getItem('personStore')) || [];
  });
  const [edit,setEdit] = useState(null);


  //Effec for insert to localStare 
  useEffect(()=> {
    localStorage.setItem('personStore',JSON.stringify(persons));
  },[persons]);


  //Effect for select person for localStorage
  useEffect(() => {
    const storedPersons = JSON.parse(localStorage.getItem('personStore')) || [];
    setPersons(storedPersons);
  },[]);


  //Handle Save 
  const handleSubmit = (e) => {
    e.preventDefault();
    let personData = new FormData(e.target);

    let personObj = {
      'id' : edit != null ? edit.id :  Date.now(),
      'username' : personData.get('username'),
      'gender'   : personData.get('gender'),
      'phone'    : personData.get('phone')
    }

    if(edit != null){
      setPersons(persons.map(item => item.id === edit.id ? personObj : item));
      setEdit(null);
    }else{
      setPersons([...persons,personObj]);
    }

    e.target.reset();

  }

  //Handle Delete 
  const handleDelete = (id) => {
       if(confirm("Do you want to delete this?")){
           let personFilter = persons.filter(item => item.id != id);
           setPersons(personFilter);
       }
  }

  const handleEdit = (person) => {
    setEdit(person);
  }


  const handleReset = () => {
    setEdit(null);
  }

  return (  
    <div className='w-50 container'>  

      <form onSubmit={handleSubmit} className='p-4 border'>  
        <div className="form-group mb-3">  
          <label>Username</label>  
          <input type="text" name="username" defaultValue={edit !=null ? edit.username : '' } className="form-control"/>  
        </div>  
        <div className="form-group mb-3">  
          <label>Gender</label>  
          <select name="gender" className="form-control">  
            <option >Select Gender</option>  
            <option value="male">Male</option>  
            <option value="female">Female</option>  
            <option value="other">Other</option>  
          </select>  
        </div>  
        <div className="form-group mb-3">  
          <label>Phone Number</label>  
          <input type="text" name="phone" defaultValue={edit !=null ? edit.phone : '' } className=' form-control'/>  
        </div>  
        <button type="submit" className="btn btn-primary me-2">{ edit !=null ? 'update' : 'save' }</button>  
        <button type='reset' onClick={handleReset} className=' btn btn-danger'>Reset</button>
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

                {
                  persons.map((item,key)=> (
                    <tr key={key}>  
                      <td>U-{ item.id }</td>  
                      <td>{item.username}</td>  
                      <td>{item.gender}</td>  
                      <td>{item.phone}</td>  
                      <td>  
                        <button onClick={() => handleEdit(item)} className='btn btn-primary btn-sm mx-2'>Edit</button>  
                        <button onClick={() => handleDelete(item.id)} className='btn btn-danger btn-sm'>Delete</button>  
                      </td>  
                    </tr>  
                  ))
                }
             
                
             
            </tbody>  
         </table>  
      </div>  

    </div>  
  );  
};  

export default State06;