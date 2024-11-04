import React, { useState } from 'react'

const Event4 = () => {
 
 const [student,setStudent] = useState({
    name: "John Doe",
    age: 20,
    city: "New York"
 
 });
  const handleChangeName = () => {
    setStudent({name: "Phument" });
  }
  return (
    <div>
        <h1>Student Information</h1>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>City: {student.city}</p>

        {/* change name */}
        <button onClick={handleChangeName}>change name</button>
    </div>
  )
}

export default Event4