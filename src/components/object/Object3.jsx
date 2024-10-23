import React from 'react'

const Object3 = () => {
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
        <table className='w-50 mt-5 table table-bordered mx-auto'>
            <thead className=' table-dark'>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Student Gender</th>
                    <th>Address</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(value => (
                        <tr key={value.id}>
                           <td>{value.id}</td>
                           <td>{value.name}</td>
                           <td>{value.gender}</td>
                           <td>{value.address}</td>
                           <td>{value.position}</td>
                       </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Object3