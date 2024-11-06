import React, { useState } from 'react'

const Object_state03 = () => {
 const [teacher,setTeacher] = useState({
    name : 'null',
    gender : 'null',
    contact : {
        email : 'null',
        phone : 'null',
        address : 'null',
    }
 });

 const handleChage = (e) => {
    

    if(e.target.name === 'name' || e.target.name == 'gender'){
        setTeacher((prev) => (
            {
                ...prev, 
                [e.target.name]:e.target.value,
            }
        ))
    }else{
        setTeacher((preve) => (
            {
                ...preve,
                contact:{
                    ...preve.contact,
                    [e.target.name]:e.target.value,
                }
            }
        ))
    }
 }

  return (
    <div>

        <input type="text" name="name" onChange={handleChage} id="" />
        <br /><br />
        <select onChange={handleChage} name="gender" placeholder='Enter your gender'>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <br /><br />
        <input type="email" name="email" onChange={handleChage} placeholder='Enter your Email' />
        <br /><br />

        <input type="text" name="phone" onChange={handleChage} placeholder='Enter your Phone' />

        <h1>Teacher Detail</h1>

        <p>------------------------------------------</p>
        <p>Teacher Name   : {teacher.name}</p>
        <p>Teacher Gender : {teacher.gender} </p>
        <p>Teacher Email  : {teacher.contact.email}</p>
        <p>Teacher Phone  : {teacher.contact.phone}</p>
        <p>Teacher Address : {teacher.contact.address}</p>

        <p>------------------------------------------</p>


    </div>
  )
}

export default Object_state03