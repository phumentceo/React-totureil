import React from 'react'
import { allStudentsAndTeachers } from './Object'
const Object6 = () => {
  return (
    <div>
        <h3>All Person List</h3>
        {
          allStudentsAndTeachers.map((value) => {
            return (
               <ul>
                   <li>Person Name : {value.name}</li>
                   <li>Person Gender : {value.gender}</li>
                   <li>Person Age   : {value.age}</li>
               </ul>
            );
          })
        }

        <h3>Person List (age 20-30)</h3>
        {
          allStudentsAndTeachers.filter((value) => value.age >=20 && value.age <= 30 )
                                .map((value) => {
                                   return (
                                    <ul>
                                       <li>Person Name : {value.name}</li>
                                       <li>Person Gender : {value.gender}</li>
                                       <li>Person Age   : {value.age}</li>
                                    </ul>
                                   )
                                })
        }                  
    </div>
  )
}

export default Object6