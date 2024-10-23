import React from 'react'
const Object5 = () => {

    const students = [
        {
            "id" : 1,
            "name" : "Pot Phument",
            "gender" : "Male",
            "age"    : 22,
            "address" : "Kompong Thom"
        },
        {
            "id" : 2,
            "name" : "Chan Lika",
            "gender" : "Female",
            "age"    : 20,
            "address" : "Kompong Cham"
        },
        {
            "id" : 3,
            "name" : "Dung Dara",
            "gender" : "Male",
            "age"    : 20,
            "address" : "Kompong Thom"
        },
        {
            "id" : 4,
            "name" : "Pho Sokpheaktra",
            "gender" : "Male",
            "age"    : 18,
            "address" : "Takev"
        },
    ];

    const StudentsFilter = students.filter(value => value.age >=15 && value.age <= 20);

  return (
    <div>
        <h2>Students (15-20 years old):</h2>
        {StudentsFilter.map((student) => (
            <div key={student.id}>
                <h5>Name : {student.name}</h5>
                <h5>Gender : {student.gender}</h5>
                <h5>Age : {student.age}</h5>
                <h5>Address : {student.address}</h5>
            </div>
        ))}
    </div>
  )
}

export default Object5