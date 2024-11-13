import React, { useEffect, useState } from 'react';

const State05 = () => {

  const [name,setName] = useState('');
  const [persons, setPersons] = useState([]);
  const [edit,editMod] = useState(false);
  const [personId,setPersonId] = useState(null);
  const [search,setSearch] = useState('');
  const [showPerson,setShowPerson] = useState([]);
  

  const handleInput = (e) => {
    setName(e.target.value);
  }

  const handleSave = () => {

    if(name != ''){

        if(edit){
           handleUpdate(personId)
        }else{
          setPersons([...persons,name]);
        }
        setName(''); 
    }
  }

  const handleDelete = (id) => {
    if(confirm("Do you want to delete this?")){
      setPersons(persons.filter((value,key) => key != id));
    }
  }


  //Edit
  const handleEdit = (id,item) => {
    editMod(true)
    setName(item)
    setPersonId(id)
  }


  //Update
  const handleUpdate = (id) => {
        setPersons(persons.map((value,pId) => id === pId ? name : value ))
        setName('')
        editMod(false);
        setPersonId(null);

  }

  //Cancel
  const handleCancel = () => {
    editMod(false)
    setName('')
  }

  //Search
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  //Search with effect
  useEffect(() => {
    if(search != ''){
      setShowPerson(persons.filter(PersonName => {
        return PersonName.toLowerCase().replace(/\s+/g, '').includes(search.replace(/\s+/g, ''))
      }));
    }else{
      setShowPerson(persons);
    }
  },[search,persons]);

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
            <input type="search" onInput={handleSearch} className=" form-control" placeholder='Search here.....' />
         </div>

         <div className="show w-50 mx-auto mt-5 border p-5 position-sticky sticky-top">
            <h3>Person List</h3>
            <hr className=' mb-5' />

            {
                (showPerson.length != 0) ? showPerson.map((item,key) => (
                    <div key={key} className=' d-flex justify-content-between align-items-center mb-2 border-bottom pb-3'>
                        <h5>ID :   {key+1}</h5>
                        <h5>Name : {item}</h5>

                        <div className="">
                            <button onClick={() => handleEdit(key,item)} className=' btn btn-primary btn-sm mx-2'>Edit+</button>
                            <button onClick={() => handleDelete(key)} className=' btn btn-danger btn-sm '>remove -</button>
                        </div>
                        
                    </div>
                ))
                : <h4>No Person Found.</h4>
            }
            

         </div>
    </div>
  )
}

export default State05