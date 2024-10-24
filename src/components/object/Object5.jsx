import React from 'react'
import { students } from './Object'
const Object5 = () => {
  var studentFilter = students.filter((value) => {
    return value.age >= 18 && value.age <= 20
  });
  return (
    <div>
        <h3>Student List</h3>
        
            {
                studentFilter.map((value) => (
                     <ul>
                        <li>Student Name   : {value.name} </li>
                        <li>Student Age    : {value.age}</li>
                        <li>Student Gender : {value.gender}</li>
                     </ul>
                ))
            }
        
    </div>
  )
}

export default Object5