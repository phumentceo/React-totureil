import React, { useState } from 'react';  

const Object08 = () => {  
  const [teacher, setTeacher] = useState({  
    name: 'John Doe',  
    age: 45,  
    subjects: ['Math', 'Science', 'English'],  
    contact: {  
      email: 'johndoe@example.com',  
      phone: '+885 1234567890',  
      address: '123 Main St, City, Country',  
      socialMedia: {  
        facebook: 'johndoe',  
        telegram: '097875678',  
      },  
    },  
  });  

  const handleInputChange = (e) => {  
    const { name, value } = e.target;  
    
    if (name === 'email' || name === 'phone' || name === 'address') {  
      // Update nested contact fields  
      setTeacher((prev) => ({  
        ...prev,  
        contact: {  
          ...prev.contact,  
          [name]: value,  
        },  
      }));

    } else {  
      // Update other top-level fields  
      setTeacher((prev) => ({  
        ...prev,  
        [name]: value,  
      }));  
    }  
  };  

  const handleSubjectChange = (e) => {  
    const selectedSubject = e.target.value;  
    
    console.log('Selected Subject:', selectedSubject);  
  };  

  return (  
    <div>  
      <input  
        type="text"  
        name="name"  
        value={teacher.name}  
        onChange={handleInputChange}  
      />  
      <input  
        type="number"  
        name="age"  
        value={teacher.age}  
        onChange={handleInputChange}  
      />  
      
      {/* select subject */}  
      <select name="subjects" onChange={handleSubjectChange}>  
        {teacher.subjects.map((subject, index) => (  
          <option key={index} value={subject}>{subject}</option>  
        ))}  
      </select>  

      {/* Contact details inputs */}  
      <input  
        type="email"  
        name="email"  
        value={teacher.contact.email}  
        onChange={handleInputChange}  
        placeholder="Email"  
      />  
      <input  
        type="text"  
        name="phone"  
        value={teacher.contact.phone}  
        onChange={handleInputChange}  
        placeholder="Phone"  
      />  
      <input  
        type="text"  
        name="address"  
        value={teacher.contact.address}  
        onChange={handleInputChange}  
        placeholder="Address"  
      />  

      <h1>Teacher Details</h1>  
      <h3>Name: {teacher.name}</h3>  
      <h3>Age: {teacher.age}</h3>  
      <h3>Subjects: {teacher.subjects.join(', ')}</h3>  
      <h3>Email: {teacher.contact.email}</h3>  
      <h3>Phone: {teacher.contact.phone}</h3>  
      <h3>Address: {teacher.contact.address}</h3>  
      <h3>Facebook: {teacher.contact.socialMedia.facebook}</h3>  
    </div>  
  );  
};  

export default Object08;