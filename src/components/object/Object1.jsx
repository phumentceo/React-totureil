import React from 'react'

const Object1 = () => {
  const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }
  return (
    <div>
        <h1>Object 1 Example</h1>
        <p>Person Name : {person.name}</p>
        <p>Person Age  : {person.age}</p>
        <p>City        : {person.city}</p>
    </div>
  )
}

export default Object1