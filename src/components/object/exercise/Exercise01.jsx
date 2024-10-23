import React, { useState } from 'react';

const Exercise01 = () => {
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

  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleSearch = (e) => {
    let searchValue = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchValue));
    setSearchTerm(searchValue); // Update state with filtered students
  };

  return (
    <div>
      <div className="w-50 mx-auto">
        <input type="search" name="" className=' form-control shadow-none mt-5' id="" placeholder="Search here......."  onChange={handleSearch} />
      </div>
      <table className=' table table-bordered w-50 mt-2 mx-auto'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        <tbody>
          {searchTerm ? // Check if search term exists 
            filteredStudents.map(student => (  // Use filteredStudents if search term exists
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            )) :
            students.map(student => (  // Use original students if search term is empty
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise01;