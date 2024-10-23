import React from 'react'

const Object2 = () => {
  const students = ["Lika","Reaksa","panha","bopha","rothana"];
  return (
    <div>
        <h3>Student List</h3>
        <ul>
            {
                students.map((value) => (
                     <li>Student Name : {value} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Object2