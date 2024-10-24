import React from 'react'
import Props04 from '../props/Props04'

const Object4 = () => {

        const students = [
        {
            "id"   : 1,
            "name" : "Lika",
            "age"  : 18,
            "gender" : "Female",
            "address" : "Kompong Thom",
            "position" : "Student"
        },
        {
            "id"   : 2,
            "name" : "Liv Panha",
            "age"  : 25,
            "gender" : "Female",
            "address" : "Kompong Cham",
            "position" : "Web Developer"
        },
        {
            "id"   : 3,
            "name" : "Han Riya",
            "age"  : 19,
            "gender" : "Female",
            "address" : "Takev",
            "position" : "Student"
        },
        {
            "id"   : 4,
            "name" : "Vann Liya",
            "age"  : 20,
            "gender" : "Female",
            "address" : "Phnom Penh",
            "position" : "Stock Management"
        }
    ];
    
  return (
    <div>
        {
            students.map((student) => (
                <Props04 
                  id={student.id} 
                  name={student.name}
                  gender={student.gender}
                  age={student.age}
                  position={student.position}
                  address={student.address}
                />
            ))
        }
    </div>
  )
}

export default Object4