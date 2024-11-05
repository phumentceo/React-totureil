import React from 'react'
import { useState } from 'react'

const Object07 = () => {
  const [teacher,setTeacher] = useState({
    name: 'John Doe',
    age: 45,
    subjects: ['Math', 'Science', 'English'],
    contact : {
        email: 'johndoe@example.com',
        phone: '+885 1234567890',
        address: '123 Main St, City, Country',
        socialMedia: {
            facebook: 'johndoe',
            telegram: '097875678',
        }
    }
  });
  
  const handleInputChange = (e) => {
    setTeacher({...teacher, [e.target.name]: e.target.value });
  }

  return (
    <div>

        <input type="text" name='name' onChange={handleInputChange}/>
        <input type="number" name='age' onChange={handleInputChange}/>
        
        {/* select subject */}
        <select name='subjects' onChange={handleInputChange}>
            {teacher.subjects.map((subject, index) => (
                <option key={index}>{subject}</option>
            ))}
        </select>


        <h1>Teacher Details</h1>
        <h3>Name: {teacher.name}</h3>
        <h3>Age: {teacher.age}</h3>
        <h3>Subjects: {teacher.subjects.join(',')}</h3>
        <h3>Email: {teacher.contact.email}</h3>
        <h3>Phone: {teacher.contact.phone}</h3>
        <h3>Address: {teacher.contact.address}</h3>
        <h3>Facebook: {teacher.contact.socialMedia.facebook}</h3>
        
    </div>
  )
}

export default Object07