import React, { useState } from 'react';

const State05 = () => {

  const [name,setName] = useState('');
  const [persons, setPersons] = useState([]);

  const handleInput = (e) => {
    setName(e.target.value);
  }

  const handleClick = () => {
    if(name != ''){
        setPersons([...persons,name]);
        setName('');
    }
    
  }

  return (
    <div>
         <form className=' w-50 mx-auto p-5 border bg-secondary rounded-3'>
            <div className="form-group mb-3">
                <label htmlFor="">Username</label>
                <input type="text" name="" onInput={handleInput} className=" form-control shadow-none" placeholder='Enter person name' />
            </div>

            <button type='button' onClick={handleClick} className=' btn btn-success'>Add+</button>
         </form>

         <div className=' w-50 mx-auto mb-5 mt-5'>
            <input type="search" name="" className=" form-control" placeholder='Search here.....' />
         </div>

         <div className="show w-50 mx-auto mt-5 border p-5 position-sticky sticky-top">
            <h3>Person List</h3>
            <hr className=' mb-5' />

            {
                persons.map((item,index) => (
                    <div className=' d-flex justify-content-between align-items-center mb-2 border-bottom pb-3'>
                        <h5>ID :   {index+1}</h5>
                        <h5>Name : {item}</h5>
                        <button className=' btn btn-danger btn-sm '>remove -</button>
                    </div>
                ))
            }
            

         </div>
    </div>
  )
}

export default State05