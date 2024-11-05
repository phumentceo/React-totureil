import React, { useState } from 'react'

const Object_state02 = () => {
  const [student,setStudent] = useState({
    name : '',
    gender : '',
    age : null,
  });

  const handleChangeName = (e) => {
    const getName = e.target.value;
    setStudent({...student,name: getName.toUpperCase()})
  }

  const handleChangeGender = (e) => {
    setStudent({...student,gender: e.target.value})
  }

  const handleChageAge  = (e) => {
    setStudent({...student,age: parseInt(e.target.value)})
  }

  return (
    <div>
        {/* Student info */}
        <input type="text" name="" onInput={handleChangeName}  placeholder='Input Name' />
        <br />
        <select name="" onChange={handleChangeGender}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
        <br />
        <input type="number" onInput={handleChageAge} name="" placeholder='Input Age' />


        <p>Student Name   : {student.name}</p>
        <p>Student Gender : {student.gender}</p>
        <p>Student Age    : { student.age != null ? student.age : 0}</p>

    </div>
  )
}

export default Object_state02