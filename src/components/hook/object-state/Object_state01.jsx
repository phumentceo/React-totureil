import React, { useState } from 'react'

const Object_state01 = () => {
  const [student,setStudent] = useState({
        name : 'Reaksa',
        gender : 'Male',
        age  : 18,
    });

  const handleChangeName = () => {
    setStudent({...student,name : "Panha"});
  }

  const handleChangeGender = () => {
    setStudent({...student,gender : "Female"});
  }

  const handleChangeAge = () => {
    setStudent({...student,age : 20});
  }

  const handleUpdateStudent = () => {
    setStudent({name:"Lika",gender: "Female",age: 18})
  }
 
  return (
    <div>
        <h1>Student info</h1>
        <h4>Student Name : {student.name}</h4>
        <h4>Student Gender : {student.gender}</h4>
        <h4>Student Age : {student.age}</h4>

        <button onClick={handleChangeName}>chang name</button>
        <button onClick={handleChangeGender}>change gender</button>
        <button onClick={handleChangeAge}>change age</button>  <br />
        <button onClick={handleUpdateStudent}>update student</button>  <br />
    </div>
  )
}

export default Object_state01