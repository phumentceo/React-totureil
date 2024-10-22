import React from 'react'

const Object2 = () => {
  const students = [
     {
        "id"     : 1,
        "name"   : "Phument",
        "gender" : "Male",
        "address": "Kompong Thom"
     },
     {
        "id"     : 2,
        "name"   : "Reaksa",
        "gender" : "Male",
        "address": "Kompong Cham"
     },
     {
        "id"     : 3,
        "name"   : "Panha",
        "gender" : "Male",
        "address": "Kompong Chhnang"
     }
    ]
  return (
    <div>
        <h1>Students List ៖ </h1>
        <ul>
            {
                students.map(student => (
                    <li key={student.id}>
                        Student ID : {student.id}
                        <br/>
                        Student Name : {student.name}
                        <br/>
                        Student Gender : {student.gender}
                        <br/>
                        Student Address : {student.address}
                    </li>
                ))
 
            }
            {/* <li>Student ID : {students[0].id}</li>
            <li>Student Name : {students[0].name}</li>
            <li>Student Gender : {students[0].gender}</li>
            <li>Student Address : {students[0].address}</li> */}
        </ul>
    </div>
  )
}

export default Object2