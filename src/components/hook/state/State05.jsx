import React, { useState } from 'react';

const State05 = () => {

  const [name,setName] = useState('');
  const [persons, setPersons] = useState([]);
  const [edit,editMod] = useState(false);

  const [personId,setPersonId] = useState(null);

  const handleInput = (e) => {
    setName(e.target.value);
  }

  const handleSave = () => {
    if(name != ''){
        setPersons([...persons,name]);
        setName('');
    }
  }

  const handleDelete = (index) => {
    if(confirm("Do you want to delete this?")){
      setPersons(persons.filter((value,key) => key != index));
    }
  }


  //Edit
  const handleEdit = (index,item) => {
    editMod(true)
    setName(item)
    setPersonId((value) => value + index)

    console.log(personId);
  }

  const handleCancel = () => {
    editMod(false)
    setName('')
  }

  return (
    <div>
         <form className=' w-50 mx-auto p-5 border rounded-3'>
            <div className="form-group mb-3">
                <label htmlFor="">Username</label>
                <input value={name} type="text" name="" onInput={handleInput} className=" form-control shadow-none" placeholder='Enter person name' />
            </div>

            <button type='button' onClick={handleSave} className=' btn btn-success'>
              { edit == true ? 'Update' : 'Add+'}
            </button>

            <button onClick={handleCancel} className=' btn btn-danger ms-3' type='reset'>Cancel</button>
         </form>

         <div className=' w-50 mx-auto mb-5 mt-5'>
            <input type="search" name="" className=" form-control" placeholder='Search here.....' />
         </div>

         <div className="show w-50 mx-auto mt-5 border p-5 position-sticky sticky-top">
            <h3>Person List</h3>
            <hr className=' mb-5' />

            {
                persons.map((item,index) => (
                    <div key={index} className=' d-flex justify-content-between align-items-center mb-2 border-bottom pb-3'>
                        <h5>ID :   {index+1}</h5>
                        <h5>Name : {item}</h5>

                        <div className="">
                            <button onClick={() => handleEdit(index,item)} className=' btn btn-primary btn-sm mx-2'>Edit+</button>
                            <button onClick={() => handleDelete(index)} className=' btn btn-danger btn-sm '>remove -</button>
                        </div>
                        
                    </div>
                ))
            }
            

         </div>
    </div>
  )
}

export default State05